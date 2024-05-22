import { Module } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CursosController } from './cursos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';
import { Docente } from 'src/docentes/entities/docente.entity';
import { Aula } from 'src/aulas/entities/aula.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Curso, Docente, Aula])],
  controllers: [CursosController],
  providers: [CursosService],
  exports: [TypeOrmModule]
})
export class CursosModule {}
