import { Injectable } from '@nestjs/common';
import { CreateSeccionDto } from './dto/create-seccion.dto';
import { UpdateSeccionDto } from './dto/update-seccion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Seccion } from './entities/seccion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeccionService {

  constructor(
    @InjectRepository(Seccion)
    private readonly seccionRepository: Repository<Seccion>
  ) {}

  // create(createSeccionDto: CreateSeccionDto) {
  //   return 'This action adds a new seccion';
  // }

  findAll() {
    return this.seccionRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} seccion`;
  // }

  // update(id: number, updateSeccionDto: UpdateSeccionDto) {
  //   return `This action updates a #${id} seccion`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} seccion`;
  // }
}
