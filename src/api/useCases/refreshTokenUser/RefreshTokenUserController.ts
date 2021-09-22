import { Request, Response } from "express";
import { RefreshTokenUserUseCase } from "./RefreshTokenUserUseCase";

export class RefreshTokenUserController {

  constructor (
    private refreshTokenUserCase: RefreshTokenUserUseCase
  ){}

  async handle(request: Request, response: Response): Promise<Response> {

    const { refreshToken } = request.body;

    const {
      sub,
      email,
    } = request.auth;

    try {

      const token = await this.refreshTokenUserCase.execute({ userId: sub, email }, refreshToken);

      return response.status(201).json(token);

    } catch ({ message }) {
      return response.status(400).json(JSON.parse(message) || 'Unexpected error.');
    }

  }

}