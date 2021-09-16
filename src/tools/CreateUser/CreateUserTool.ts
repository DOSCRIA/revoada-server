import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/UsersRepository";
import { CreateUserDTO } from "./CreateUserDTO";

export class CreateUserTool {

  constructor (
    private userRepository: UserRepository,
  ) {}

  async execute (data: CreateUserDTO) {
    
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    /**
     * Check if user exists by email
     */
    if (userAlreadyExists) {
      throw {
        email: 'There is another account using this email.'
      };
    }

    /**
     * Save user
     */
    return await this.userRepository.save(new User(data));

  }

}