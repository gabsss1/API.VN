import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAulaDto {

    @ApiProperty()
    @IsString()
    numero_aula: string;

    @ApiProperty()
    @IsNumber()
    capacidad: number;

    @ApiProperty()
    @IsString()
    piso: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    seccion_id: number;
}
