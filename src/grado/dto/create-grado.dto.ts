import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateGradoDto {
    @ApiProperty()
    @IsString()
    nombre_grado: string;
}
