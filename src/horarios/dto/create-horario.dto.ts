import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class CreateHorarioDto {

    @ApiProperty()
    @IsDate()
    hora_inicio: Date

    @ApiProperty()
    @IsDate()
    hora_fin: Date

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    cursos_id: number

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    docente_id: number
}
