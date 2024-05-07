import { Module } from '@nestjs/common';
import { ApoderadoService } from './apoderado.service';
import { ApoderadoController } from './apoderado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apoderado } from './entities/apoderado.entity';
import { Dni } from 'src/dni/entities/dni.entity';
import { Alumno } from 'src/alumnos/entities/alumno.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Apoderado, Dni, Alumno])],
  controllers: [ApoderadoController],
  providers: [ApoderadoService],
  exports: [TypeOrmModule]
})
export class ApoderadoModule {}