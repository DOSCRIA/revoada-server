import dayjs from "dayjs";
import { GenerateRefreshTokenProviderProps } from "../../provider/GenerateRefreshTokenProvider";
import { RefreshTokenUserRepository } from "../../repositories/RefreshTokenUserRepository";

export class RefreshTokenUserUseCase {

  constructor (
    private refreshTokenUserRepository: RefreshTokenUserRepository,
    private generateTokenProvider: any,
    private generateRefreshTokenProvider: GenerateRefreshTokenProviderProps
  ) {}

  async execute (
    { 
      userId, 
      email
    },
    refresh_token: string
  ) {
    
    /**
     * Check and get user data by email
     */
    const refreshToken = await this.refreshTokenUserRepository.findById(refresh_token);

    /**
     * Refresh token does not exists
     */
    if (!refreshToken) throw new Error(JSON.stringify({ token: 'Refresh token invalid' }));
    
    /**
     * Generate new token
     */
     const token = await this.generateTokenProvider.execute({ id: userId, email });
    
    /**
     * Cgeck if refresh token expired
     */
    const refreshTokenExpired = dayjs().isAfter(dayjs.unix(refreshToken.expiresIn));

    /**
     * Refresh token has been expired
     */
    if (refreshTokenExpired) {
      
      /**
       * Remove all refresh token from user if exists
       */
      await this.refreshTokenUserRepository.remove(refreshToken.userId);

      /**
       * Make a new one refresh token
       */
      const newRefreshToken = await this.generateRefreshTokenProvider.execute(refreshToken.userId);

      /**
       * Returns token and the new refresh token
       */
      return {
        token,
        newRefreshToken
      }

    }

    /**
     * Returns new token
     */
    return {
      token
    }

  }

}