import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

/**
 * Ensure if the user is really authenticated
 * @param request 
 * @param response 
 * @param next 
 * @returns next function
 */
export function ensureAuthenticated (
  request: Request,
  response: Response,
  next: NextFunction
) {

  /**
   * Get Bearer token from request
   */
  const authToken = request.headers.authorization;

  /**
   * Check if token was sent
   */
  if (!authToken) return response.status(401).json({
    token: 'Token is missing'
  });

  try {

    /**
     * Split bearer from token
     */
    const [ bearer, token ] = authToken.split(" ");

    /**
     * Decode token
     */
    const auth = verify(token, process.env.JWT_MD5_TOKEN);

    /**
     * Authentication props
     */
    const {
      email,
      iat,
      exp, 
      sub
    } = typeof auth === 'string' ?  JSON.parse(auth) : auth;

    /**
     * Put user data in the request Auth object
     */
    request.auth = {
      email,
      iat,
      exp,
      sub,
    };
    
    /**
     * Continues the flow
     */
    return next();

  } catch(err) {

    /**
     * Unauthorized
     */
    return response.status(401).json({
      message: 'Token invalid'
    });

  }

}