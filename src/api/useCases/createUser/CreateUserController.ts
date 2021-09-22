import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {

  constructor (
    private createUserUseCase: CreateUserUseCase
  ){}

  async handle(request: Request, response: Response): Promise<Response> {

    const { 
      name,
      lastName,
      email, 
      password,
      phoneNumber
    } = request.body;

    try {

      const userData = await this.createUserUseCase.execute({
        name,
        lastName,
        email, 
        password,
        phoneNumber
      });

      return response.status(201).json(userData);

    } catch (err) {

      return response.status(400).json(err || 'Unexpected error.')
      
    }

  }

}