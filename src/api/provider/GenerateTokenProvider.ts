import { sign } from "jsonwebtoken";

export class GenerateTokenProvider {

  async execute ({ id, email }) {

    /**
     * JWT payload
     */
    const payload = {
      email: email,
    }
      
    /**
     * JWT options
     */
    const jwtOptions = {
      subject: id,
      expiresIn: '20s'
    }

    /**
     * Generate and returns JWT
     */
    return sign(payload, process.env.JWT_MD5_TOKEN, jwtOptions);
        
  }

}