import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { i18n } from 'src/helpers/internationalization';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) { }

  @Post('/local/signup')
  signupLocal(
    @Body() data: AuthDto,
  ) {
    this.authService.signupLocal(data);
  }

  @Post('/local/login')
  loginLocal() {
    this.authService.loginLocal();
  }

  @Post('/logout')
  logout() {
    this.authService.logout();
  }

  @Post('/refresh')
  refreshTokens() {
    this.authService.refreshTokens();
  }
}
