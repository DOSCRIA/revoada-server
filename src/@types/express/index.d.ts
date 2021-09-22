interface AuthenticationProps {
  email: string;
  iat: number;
  exp: number;
  sub: string
}
declare namespace Express {
  export interface Request {
    auth: AuthenticationProps;
  }
}