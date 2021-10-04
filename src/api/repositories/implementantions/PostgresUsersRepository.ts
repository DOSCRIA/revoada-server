import { User, Password } from "../../entities/User";
import { UserRepository } from "../UsersRepository";
import bcrypt, { compareSync } from 'bcryptjs';
import { prisma } from "../../../../prisma/client";

export class PostgresUsersRepository implements UserRepository {

  verifyPasswordMatches({ 
    password,
    hashPassword
  }: Password): boolean {
    return compareSync(password, hashPassword);
  }

  async findByEmail(email: string): Promise<User> {
    return await prisma.users.findUnique({
      where: {
        email
      }
    });
  }

  async save({
    name,
    email,
    lastName, 
    password,
    phoneNumber
  }: User): Promise<User> {

    const passwordHash = bcrypt.hashSync(password, 12);

    return await prisma.users.create({
      data: {
        name,
        email,
        lastName, 
        password: passwordHash,
        phoneNumber
      },
    })

  }

}