import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSalonDto {

    @ApiProperty()
    @IsString()
    numero_salon: string;

    @ApiProperty()
    @IsString()
    piso: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    seccion_id: number;
}
