import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/UsersRepository";
import { CreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {

  constructor (
    private userRepository: UserRepository,
  ) {}

  async execute (data: CreateUserDTO) {
    
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