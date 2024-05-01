import { Module } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { AlumnosController } from './alumnos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from './entities/alumno.entity';
import { Dni } from 'src/dni/entities/dni.entity';
import { Apoderado } from 'src/apoderado/entities/apoderado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Alumno, Dni, Apoderado])],
  controllers: [AlumnosController],
  providers: [AlumnosService],
})
export class AlumnosModule {}
