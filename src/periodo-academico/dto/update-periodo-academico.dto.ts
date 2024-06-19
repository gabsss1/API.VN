import { PartialType } from '@nestjs/swagger';
import { CreatePeriodoAcademicoDto } from './create-periodo-academico.dto';

export class UpdatePeriodoAcademicoDto extends PartialType(CreatePeriodoAcademicoDto) {}
