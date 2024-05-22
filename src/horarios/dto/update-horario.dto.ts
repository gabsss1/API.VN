import { PartialType } from '@nestjs/swagger';
import { CreateHorarioDto } from './create-horario.dto';

export class UpdateHorarioDto extends PartialType(CreateHorarioDto) {}
