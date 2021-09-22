import { User, Password } from "../entities/User";

export interface UserRepository {
  findByEmail(email: string): Promise<User>;
  verifyPasswordMatches({ password, hashPassword  }: Password): boolean;
  save(user: User): Promise<User>;
}