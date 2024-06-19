import { Module } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CursosController } from './cursos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';
import { Docente } from 'src/docentes/entities/docente.entity';
import { Grado } from 'src/grado/entities/grado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Curso, Docente, Grado])],
  controllers: [CursosController],
  providers: [CursosService],
  exports: [TypeOrmModule]
})
export class CursosModule {}
