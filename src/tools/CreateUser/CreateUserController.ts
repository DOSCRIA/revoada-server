import { Request, Response } from "express";
import { CreateUserTool } from "./CreateUserTool";

export class CreateUserController {

  constructor (
    private createUserTool: CreateUserTool
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

      const userData = await this.createUserTool.execute({
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