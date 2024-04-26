import { Body, Controller, HttpCode, HttpStatus, Post, Get, UseGuards, Request} from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { AuthService } from "./auth.service";
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from "./guard/auth.guard";

interface RequestWithUser extends Request {
    user: { email_usuario: string; rol: string };
  }

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("register")
    register(@Body() registerDto: RegisterDto) {
        return this.authService.register(registerDto);
    }

    @HttpCode(HttpStatus.OK)
    @Post("login")
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }

    @Get('profile')
    @UseGuards(AuthGuard)
    profile(@Request() req) {
        return req.user;
    }
}
