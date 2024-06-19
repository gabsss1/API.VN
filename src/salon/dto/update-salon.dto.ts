import { PartialType } from '@nestjs/swagger';
import { CreateSalonDto } from './create-salon.dto';

export class UpdateSalonDto extends PartialType(CreateSalonDto) {}
