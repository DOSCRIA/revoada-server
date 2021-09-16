import { User } from "../../entities/User";
import { UserRepository } from "../UsersRepository";
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export class PostgresUsersRepository implements UserRepository {

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