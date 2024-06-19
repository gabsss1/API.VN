import { Module } from '@nestjs/common';
import { GradoService } from './grado.service';
import { GradoController } from './grado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grado } from './entities/grado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Grado])],
  controllers: [GradoController],
  providers: [GradoService],
  exports: [TypeOrmModule]
})
export class GradoModule {}
