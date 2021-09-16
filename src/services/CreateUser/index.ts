import { CreateUserController } from "./CreateUserController";
import { PostgresUsersRepository } from "../../repositories/implementantions/PostgresUsersRepository";
import { CreateUserService } from "./CreateUserService";

const postgresUsersRepository = new PostgresUsersRepository();

const createUserService = new CreateUserService(
  postgresUsersRepository,
);

const createUserController = new CreateUserController(
  createUserService
);

export { CreateUserService, createUserController };