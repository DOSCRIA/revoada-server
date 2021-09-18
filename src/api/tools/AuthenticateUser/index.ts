import { AuthenticateUserController } from "./AuthenticateUserController";
import { PostgresUsersRepository } from "../../repositories/implementantions/PostgresUsersRepository";
import { AuthenticateUserTool } from "./AuthenticateUserTool";

const postgresUsersRepository = new PostgresUsersRepository();

const createUserTool = new AuthenticateUserTool(
  postgresUsersRepository,
);

const authenticateUserController = new AuthenticateUserController(
  createUserTool
);

export { AuthenticateUserTool, authenticateUserController };