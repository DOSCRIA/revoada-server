import { User } from "../entities/User";

export interface Password {
  password: string;
  hashPassword: string;
}

export interface UserRepository {
  findByEmail(email: string): Promise<User>;
  verifyPasswordMatches({ password, hashPassword  }: Password): boolean;
  save(user: User): Promise<User>;
}