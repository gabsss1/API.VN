import { Module } from '@nestjs/common';
import { MatriculaService } from './matricula.service';
import { MatriculaController } from './matricula.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Matricula } from './entities/matricula.entity';
import { Alumno } from 'src/alumnos/entities/alumno.entity';
import { Apoderado } from 'src/apoderado/entities/apoderado.entity';
import { Seccion } from 'src/seccion/entities/seccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Matricula, Alumno, Apoderado, Seccion])],
  controllers: [MatriculaController],
  providers: [MatriculaService],
  exports: [TypeOrmModule]
})
export class MatriculaModule {}
