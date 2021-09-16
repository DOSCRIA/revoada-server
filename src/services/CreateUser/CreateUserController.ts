import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";

export class CreateUserController {

  constructor (
    private createUserService: CreateUserService
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

      await this.createUserService.execute({
        name,
        lastName,
        email, 
        password,
        phoneNumber
      });

      return response.status(201).send();

    } catch (err) {

      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
      
    }

  }

}