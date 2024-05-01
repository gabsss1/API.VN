import { PartialType } from '@nestjs/swagger';
import { CreateAlumnoDto } from './create-alumno.dto';

export class UpdateAlumnoDto extends PartialType(CreateAlumnoDto) {}
