import { Module } from '@nestjs/common';
import { DniService } from './dni.service';
import { DniController } from './dni.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dni } from './entities/dni.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dni])],
  controllers: [DniController],
  providers: [DniService],
  exports: [TypeOrmModule]
})
export class DniModule {}
