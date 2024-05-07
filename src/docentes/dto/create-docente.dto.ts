import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDocenteDto {
    
    @ApiProperty()
    @IsString()
    nombre_docente: string;

    @ApiProperty()
    @IsString()
    apellido_docente: string;

    @ApiProperty()
    @IsString()
    direccion_docente: string;

    @ApiProperty()
    @IsString()
    @IsEmail()
    email_docente: string;

    @ApiProperty()
    @IsString()
    telefono_docente: string;

    @ApiProperty()
    @IsNumber()
    numero_dni: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    dni_id: number;

}
