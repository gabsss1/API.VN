import { Body, Controller, HttpCode, HttpStatus, Post, Get, UseGuards, Request} from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { AuthService } from "./auth.service";
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from "./guard/auth.guard";
import { Rol } from "./decorators/rol.decorator";
import { RolGuard } from "./guard/rol/rol.guard";
import { Roles } from "./enums/rol.enum";
import { Auth } from "./decorators/auth.decorator";

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
    @Auth(Roles.ADMIN) 
    profile(@Request() req: RequestWithUser) {
        return this.authService.profile(req.user);
    }
}
