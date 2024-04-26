import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty()
  @IsString()
  @MinLength(1)
  nombres_usuario: string;

  @ApiProperty()
  @IsEmail()
  email_usuario: string;

  @ApiProperty()
  @IsString()
  @Transform(({ value }) => value.trim())
  contrasena_usuario: string;
}