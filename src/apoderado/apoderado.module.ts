import { Module } from '@nestjs/common';
import { ApoderadoService } from './apoderado.service';
import { ApoderadoController } from './apoderado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apoderado } from './entities/apoderado.entity';
import { Dni } from 'src/dni/entities/dni.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Apoderado, Dni])],
  controllers: [ApoderadoController],
  providers: [ApoderadoService],
  exports: [TypeOrmModule]
})
export class ApoderadoModule {}