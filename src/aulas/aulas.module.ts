import { Module } from '@nestjs/common';
import { AulasService } from './aulas.service';
import { AulasController } from './aulas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aula } from './entities/aula.entity';
import { Seccion } from 'src/seccion/entities/seccion.entity';
import { Alumno } from 'src/alumnos/entities/alumno.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Aula, Seccion, Alumno])],
  controllers: [AulasController],
  providers: [AulasService],
  exports: [TypeOrmModule]
})
export class AulasModule {}
