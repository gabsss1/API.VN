import { PartialType } from '@nestjs/swagger';
import { CreateDniDto } from './create-dni.dto';

export class UpdateDniDto extends PartialType(CreateDniDto) {}
