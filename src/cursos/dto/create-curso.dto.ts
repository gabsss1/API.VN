import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCursoDto {
    
    @ApiProperty()
    @IsString()
    nombre_cursos: string

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    docente_id: number

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    grados_id: number
}
