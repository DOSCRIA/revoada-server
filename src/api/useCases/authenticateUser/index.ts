import { AuthenticateUserController } from "./AuthenticateUserController";
import { PostgresUsersRepository } from "../../repositories/implementantions/PostgresUsersRepository";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { GenerateRefreshTokenProvider } from "../../provider/GenerateRefreshTokenProvider";
import { GenerateTokenProvider } from "../../provider/GenerateTokenProvider";
import { PostgresRefreshTokenUserRepository } from "../../repositories/implementantions/PostgresRefreshTokenUserRepository";

const postgresUsersRepository = new PostgresUsersRepository();
const generateRefreshTokenProvider = new GenerateRefreshTokenProvider();
const generateTokenProvider = new GenerateTokenProvider();
const refreshTokenUserRepository = new PostgresRefreshTokenUserRepository();

const createUserUseCase = new AuthenticateUserUseCase(
  postgresUsersRepository,
  generateRefreshTokenProvider,
  generateTokenProvider,
  refreshTokenUserRepository
);

const authenticateUserController = new AuthenticateUserController(
  createUserUseCase
);

export { AuthenticateUserUseCase, authenticateUserController };