import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {

  constructor(
    private authenticateUserUseCase: AuthenticateUserUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {

    const {
      email,
      password
    } = request.body;

    try {

      if (!email) throw new Error('You need to inform your name!');

      if (!password) throw new Error('You need to inform your name!');

      const userData = await this.authenticateUserUseCase.execute({
        email,
        password
      });

      return response.status(201).json(userData);

    } catch ({ message }) {
      return response.status(400).json(message || 'Unexpected error.')
    }

  }

}