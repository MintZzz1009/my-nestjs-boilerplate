import { Controller, HttpCode, HttpStatus, Post, Body } from '@nestjs/common';
import { AuthEmailLoginDto } from './dto/auth-email-login.dto';
import { LoginResponseType } from './types/login-response.type';
import { AuthService } from './auth.service';
import { AuthRegisterLoginDto } from './dto/auth-register-login.dto';

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('email/login')
  @HttpCode(HttpStatus.OK)
  login(@Body() loginDto: AuthEmailLoginDto): Promise<LoginResponseType> {
    return this.service.validateLogin(loginDto);
  }

  @Post('email/register')
  @HttpCode(HttpStatus.NO_CONTENT)
  async register(@Body() createUserDto: AuthRegisterLoginDto): Promise<void> {
    return this.service.register(createUserDto);
  }
}
