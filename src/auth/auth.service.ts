import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from "./dto/register.dto";
import { JwtService } from "@nestjs/jwt";
import * as bcryptjs from "bcryptjs";
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
    constructor(
      private readonly usersService: UsuariosService,
      private readonly jwtService: JwtService
    ) {}

    async register({ contrasena_usuario, email_usuario, nombres_usuario }: RegisterDto) {
        const user = await this.usersService.findOneByEmail(email_usuario);
    
        if (user) {
          throw new BadRequestException("Email already exists");
        }
    
        const hashedPassword = await bcryptjs.hash(contrasena_usuario, 10);
    
        await this.usersService.create({
          nombres_usuario,
          email_usuario,
          contrasena_usuario: hashedPassword,
        });
    
        return {
          message: "User created successfully",
        };
      }

      async login({ email_usuario, contrasena_usuario }: LoginDto) {
        const user = await this.usersService.findOneByEmail(email_usuario);
    
        if (!user) {
          throw new UnauthorizedException("Invalid email");
        }
    
        const isPasswordValid = await bcryptjs.compare(contrasena_usuario, user.contrasena_usuario);
    
        if (!isPasswordValid) {
          throw new UnauthorizedException("Invalid password");
        }

        const payload = { email: user.email_usuario };

        const token = await this.jwtService.signAsync(payload);
    
        return {
          token: token,
          email: user.email_usuario,
        };
      }
}
