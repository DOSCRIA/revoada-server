import { sign } from "jsonwebtoken";
import { UserRepository } from "../../repositories/UsersRepository";
import { AuthenticateUserDTO } from "./AuthenticateUserDTO";

export class AuthenticateUserTool {

  constructor (
    private userRepository: UserRepository,
  ) {}

  async execute (data: AuthenticateUserDTO) {
    
    const user = await this.userRepository.findByEmail(data.email);

    /**
     * Check if user exists by email
     */
    if (!user) throw new Error(JSON.stringify({ email_password: 'Email/Password incorrect' }));

    const passwordMatch = this.userRepository.verifyPasswordMatches({
      password: data.password,
      hashPassword: user.password
    });

    /**
     * Check if password is correct
     */
    if (!passwordMatch) throw { email_password: 'Email/Passwords incorrect' };


    const payload = {
      email: data.email,
    }

    const jwtOptions = {
      subject: user.id,
      expiresIn: '1d'
    }

    const token = sign(payload, process.env.JWT_MD5_TOKEN, jwtOptions)

    return {
      token
    }

  }

}