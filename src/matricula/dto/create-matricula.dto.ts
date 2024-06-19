import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMatriculaDto {

    @ApiProperty()
    @IsString()
    periodo_academico: string;

    @ApiProperty()
    @IsString()
    numero_matricula: string;

    @ApiProperty()
    @IsString()
    observaciones: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    alumno_id: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    apoderado_id: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    seccion_id: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    grados_id: number;
}
