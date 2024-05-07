import { Module } from '@nestjs/common';
import { DocentesService } from './docentes.service';
import { DocentesController } from './docentes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Docente } from './entities/docente.entity';
import { Dni } from 'src/dni/entities/dni.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Docente, Dni])],
  controllers: [DocentesController],
  providers: [DocentesService],
  exports: [TypeOrmModule]
})
export class DocentesModule {}
