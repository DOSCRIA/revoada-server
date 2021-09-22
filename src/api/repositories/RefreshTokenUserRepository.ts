import { RefreshTokenUser } from "../entities/RefreshTokenUser";

export interface RefreshTokenUserRepository {
  findById(id: string): Promise<RefreshTokenUser>;
  remove(userId: string): Promise<void>;
}