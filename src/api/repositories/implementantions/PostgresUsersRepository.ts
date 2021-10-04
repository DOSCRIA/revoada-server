import { User, Password } from "../../entities/User";
import { UserRepository } from "../UsersRepository";
import bcrypt, { compareSync } from 'bcryptjs';
import { client } from "../../../../prisma/client";

export class PostgresUsersRepository implements UserRepository {

  verifyPasswordMatches({ 
    password,
    hashPassword
  }: Password): boolean {
    return compareSync(password, hashPassword);
  }

  async findByEmail(email: string): Promise<User> {
    return await client.users.findUnique({
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

    return await client.users.create({
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