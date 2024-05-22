import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAlumnoDto {

    @ApiProperty()
    @IsString()
    nombres_alumno: string

    @ApiProperty()
    @IsString()
    apellidos_alumno: string

    @ApiProperty()
    @IsString()
    direccion_alumno: string

    @ApiProperty()
    @IsString()
    telefono_alumno: string

    @ApiProperty()
    @IsNumber()
    numero_dni: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    dni_id: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    apoderado_id: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    aulas_id: number;
}
