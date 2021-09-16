import { CreateUserController } from "./CreateUserController";
import { PostgresUsersRepository } from "../../repositories/implementantions/PostgresUsersRepository";
import { CreateUserTool } from "./CreateUserTool";

const postgresUsersRepository = new PostgresUsersRepository();

const createUserTool = new CreateUserTool(
  postgresUsersRepository,
);

const createUserController = new CreateUserController(
  createUserTool
);

export { CreateUserTool, createUserController };