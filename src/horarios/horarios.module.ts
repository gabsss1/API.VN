import { Module } from '@nestjs/common';
import { HorariosService } from './horarios.service';
import { HorariosController } from './horarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Horario } from './entities/horario.entity';
import { Curso } from 'src/cursos/curso.entity';
import { Docente } from 'src/docentes/entities/docente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Curso, Horario, Docente])],
  controllers: [HorariosController],
  providers: [HorariosService],
  exports: [TypeOrmModule]
})
export class HorariosModule {}
