import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSeccionDto {
    @ApiProperty()
    @IsString()
    nombre_seccion: string;

    @ApiProperty()
    @IsNumber()
    capacidad: number;
    
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    docente_id: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    grados_id: number;
}
