import { sign } from "jsonwebtoken";
import { PostgresRefreshTokenUserRepository } from "../../repositories/implementantions/PostgresRefreshTokenUserRepository";
import { UserRepository } from "../../repositories/UsersRepository";
import { AuthenticateUserDTO } from "./AuthenticateUserDTO";

export class AuthenticateUserUseCase {

  constructor (
    private userRepository: UserRepository,
    private generateRefreshTokenProvider: any,
    private generateTokenProvider: any,
    private refreshTokenUserRepository: PostgresRefreshTokenUserRepository,
  ) {}

  async execute (data: AuthenticateUserDTO) {
    
    /**
     * Check and get user data by email
     */
    const user = await this.userRepository.findByEmail(data.email);

    /**
     * Check if user exists by email
     */
    if (!user) throw new Error(JSON.stringify({ email_password: 'Email or password incorrect' }));

    const passwordMatch = this.userRepository.verifyPasswordMatches({
      password: data.password,
      hashPassword: user.password
    });

    /**
     * Check if password is correct
     */
     if (!passwordMatch) throw new Error(JSON.stringify({ email_password: 'Email or password incorrect' }));

    /**
     * Generate JWT
     */
    const token = await this.generateTokenProvider.execute({ id: user.id, email: user.email });

    /**
     * Remove all refresh token from user if exists
     */
    await this.refreshTokenUserRepository.remove(user.id);

    /**
     * Generate refresh token to JHWT schema
     */
    const refreshToken = await this.generateRefreshTokenProvider.execute(user.id)

    /**
     * Return JWTs
     */
    return {
      token,
      refreshToken
    }

  }

}