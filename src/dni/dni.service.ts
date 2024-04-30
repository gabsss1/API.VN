import { Injectable } from '@nestjs/common';
import { CreateDniDto } from './dto/create-dni.dto';
import { UpdateDniDto } from './dto/update-dni.dto';
import { Dni } from './entities/dni.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DniService {

  constructor(
    @InjectRepository(Dni)
    private readonly dniRepository: Repository<Dni>
  ) {}


  // create(createDniDto: CreateDniDto) {
  //   return 'This action adds a new dni';
  // }

  async findAll() {
    return this.dniRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} dni`;
  // }

  // update(id: number, updateDniDto: UpdateDniDto) {
  //   return `This action updates a #${id} dni`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} dni`;
  // }
}
