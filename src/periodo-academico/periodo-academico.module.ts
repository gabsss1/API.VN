import { Module } from '@nestjs/common';
import { PeriodoAcademicoService } from './periodo-academico.service';
import { PeriodoAcademicoController } from './periodo-academico.controller';

@Module({
  controllers: [PeriodoAcademicoController],
  providers: [PeriodoAcademicoService],
})
export class PeriodoAcademicoModule {}
