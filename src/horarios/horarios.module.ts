import { Module } from '@nestjs/common';
import { HorariosService } from './horarios.service';
import { HorariosController } from './horarios.controller';

@Module({
  controllers: [HorariosController],
  providers: [HorariosService],
})
export class HorariosModule {}
