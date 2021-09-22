import dayjs from "dayjs";
import { RefreshTokenUser } from "../entities/RefreshTokenUser";
import { client } from "../prisma/client";

export interface GenerateRefreshTokenProviderProps {
  execute: (userId: string) => Promise<RefreshTokenUser>;
}

export class GenerateRefreshTokenProvider {

  async execute (userId: string): Promise<RefreshTokenUser> {
     try {
      const expiresIn = dayjs().add(15, 'second').unix();
      const generateRefreshToken = await client.refreshToken.create({
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