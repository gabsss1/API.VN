import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty()
  @IsEmail()
  email_usuario: string;

  @ApiProperty()
  @IsString()
  @MinLength(6)
  @Transform(({ value }) => value.trim())
  contrasena_usuario: string;
}
