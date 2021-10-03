import dayjs from "dayjs";
import { RefreshTokenUser } from "../entities/RefreshTokenUser";
import { client } from "../prisma/client";

export interface GenerateRefreshTokenProviderProps {
  execute: (userId: string) => Promise<RefreshTokenUser>;
}

export class GenerateRefreshTokenProvider {

  async execute (userId: string): Promise<RefreshTokenUser> {
     try {
      const expiresIn = dayjs().add(60, 'days').unix();
      const generateRefreshToken = await client.refreshTokens.create({
        data: {
          userId,
          expiresIn
        }
      });
      return generateRefreshToken;
    } catch (e) {
      console.error('caralho')
    }
  }

}