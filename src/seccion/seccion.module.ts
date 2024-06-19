import { Module } from '@nestjs/common';
import { SeccionService } from './seccion.service';
import { SeccionController } from './seccion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seccion } from './entities/seccion.entity';
import { Grado } from 'src/grado/entities/grado.entity';
import { Docente } from 'src/docentes/entities/docente.entity';
import { Alumno } from 'src/alumnos/entities/alumno.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Seccion, Grado, Docente, Alumno])],
  controllers: [SeccionController],
  providers: [SeccionService],
  exports: [TypeOrmModule]
})
export class SeccionModule {}
