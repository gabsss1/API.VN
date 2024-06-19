import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateGradoDto } from './dto/create-grado.dto';
import { UpdateGradoDto } from './dto/update-grado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Grado } from './entities/grado.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GradoService {

  constructor(
    @InjectRepository(Grado)
    private readonly gradoRepository: Repository<Grado>,
  ) {}

  async create(createGradoDto: CreateGradoDto) {
    const grado = this.gradoRepository.create({
      nombre_grado: createGradoDto.nombre_grado,
    })
    return await this.gradoRepository.save(grado)
  }

  async findAll() {
    return this.gradoRepository.find();
  }

  async findOne(grados_id: number) {
    return await this.gradoRepository.findOneBy({grados_id})
  }

  async update(grados_id: number, updateGradoDto: UpdateGradoDto) {
    const grado = await this.gradoRepository.findOneBy({grados_id})
    if(!grado){
      throw new BadRequestException('grado not found')
    }
    return await this.gradoRepository.save({
      ...grado,
      ...updateGradoDto
    })
  }

  async remove(grados_id: number) {
    return await this.gradoRepository.delete(grados_id);
  }
}
