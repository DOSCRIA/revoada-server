import { User } from "../../entities/User";
import { MailProvider } from "../../providers/MailProvider";
import { UserRepository } from "../../repositories/UsersRepository";
import { CreateUserDTO } from "./CreateUserDTO";

export class CreateUserService {

  constructor (
    private userRepository: UserRepository,
  ) {}

  async execute (data: CreateUserDTO) {
    
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    /**
     * Check if user exists by email
     */
    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }


    /**
     * Save user
     */
    const user = new User(data);
    await this.userRepository.save(user);

  }

}