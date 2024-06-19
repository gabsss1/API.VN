import { Module } from '@nestjs/common';
import { SalonService } from './salon.service';
import { SalonController } from './salon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salon } from './entities/salon.entity';
import { Seccion } from 'src/seccion/entities/seccion.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Salon, Seccion])],
  controllers: [SalonController],
  providers: [SalonService],
  exports: [TypeOrmModule]
})
export class SalonModule {}
