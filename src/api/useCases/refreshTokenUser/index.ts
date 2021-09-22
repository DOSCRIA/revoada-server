import { RefreshTokenUserUseCase } from "./RefreshTokenUserUseCase";
import { PostgresRefreshTokenUserRepository } from "../../repositories/implementantions/PostgresRefreshTokenUserRepository";
import { RefreshTokenUserController } from "./RefreshTokenUserController";
import { GenerateTokenProvider } from "../../provider/GenerateTokenProvider";
import { GenerateRefreshTokenProvider } from "../../provider/GenerateRefreshTokenProvider";

const refreshTokenUserRepository = new PostgresRefreshTokenUserRepository();
const generateTokenProvider = new GenerateTokenProvider();
const generateRefreshTokenProvider = new GenerateRefreshTokenProvider();

const refreshTokenUseCase = new RefreshTokenUserUseCase(
  refreshTokenUserRepository,
  generateTokenProvider,
  generateRefreshTokenProvider,
);

const refreshTokenUserController = new RefreshTokenUserController(
  refreshTokenUseCase
);

export { RefreshTokenUserUseCase, refreshTokenUserController };