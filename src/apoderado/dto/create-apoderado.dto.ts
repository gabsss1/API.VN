import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateApoderadoDto {

    @ApiProperty()
    @IsString()
    nombres_apoderado: string;

    @ApiProperty()
    @IsString()
    apellidos_apoderado: string;

    @ApiProperty()
    @IsEmail()
    email_apoderado: string;

    @ApiProperty()
    @IsString()
    telefono_apoderado: string;

    @ApiProperty()
    @IsString()
    direccion_apoderado: string;

    @IsNotEmpty()
    @IsNumber() // Esto asegura que el dni_id sea un número
    @ApiProperty()
    dni_id: number;
}
