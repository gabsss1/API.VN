import { Module } from '@nestjs/common';
import { SeccionService } from './seccion.service';
import { SeccionController } from './seccion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seccion } from './entities/seccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Seccion])],
  controllers: [SeccionController],
  providers: [SeccionService],
  exports: [TypeOrmModule]
})
export class SeccionModule {}
