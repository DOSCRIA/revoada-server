import { Request, Response } from "express";
import { AuthenticateUserTool } from "./AuthenticateUserTool";

export class AuthenticateUserController {

  constructor (
    private authenticateUserTool: AuthenticateUserTool
  ){}

  async handle(request: Request, response: Response): Promise<Response> {

    const { 
      email,
      password
    } = request.body;

    try {

      const userData = await this.authenticateUserTool.execute({
        email, 
        password
      });

      return response.status(201).json(userData);

    } catch ({ message }) {
      return response.status(400).json(JSON.parse(message) || 'Unexpected error.')
    }

  }

}