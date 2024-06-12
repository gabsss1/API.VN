import { PartialType } from '@nestjs/swagger';
import { CreateMatriculaDto } from './create-matricula.dto';

export class UpdateMatriculaDto extends PartialType(CreateMatriculaDto) {}
