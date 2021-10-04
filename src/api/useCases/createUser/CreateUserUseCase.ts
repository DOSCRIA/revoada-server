import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/UsersRepository";
import { CreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {

  constructor (
    private userRepository: UserRepository,
  ) {}

  async execute (data: CreateUserDTO) {


    /**
     * Check if user informed his name
     */
    if (!data.name) throw new Error(JSON.stringify({ name: 'You need to inform your name!' }));

    /**
     * Check if user informed his name
     */
    if (!data.lastName) throw new Error(JSON.stringify({ lastName: 'You need to inform your last name!' }));

    /**
     * Check if user informed his password
     */
    if (!data.password) throw new Error(JSON.stringify({ password: 'You need to inform some password.' }));

    /**
     * Check if user informed his phone number
     */
    if (!data.phoneNumber) throw new Error(JSON.stringify({ phoneNumber: 'You need to inform your phone number.' }));

    /**
     * Check if user exists
     */
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    /**
     * Check if user exists by email
     */
    if (userAlreadyExists) throw new Error(JSON.stringify({ email: 'There is another account using this email.' }));


    /**
     * Save user
     */
    return await this.userRepository.save(new User(data));

  }

}