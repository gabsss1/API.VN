import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAulaDto } from './dto/create-aula.dto';
import { UpdateAulaDto } from './dto/update-aula.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aula } from './entities/aula.entity';
import { Repository } from 'typeorm';
import { Seccion } from 'src/seccion/entities/seccion.entity';
import { Alumno } from 'src/alumnos/entities/alumno.entity';

@Injectable()
export class AulasService {

  constructor(
      @InjectRepository(Aula)
      private readonly aulaRepository: Repository<Aula>,

      @InjectRepository(Seccion)
      private readonly seccionRepository: Repository<Seccion>,
  ) {}

  async create(createAulaDto: CreateAulaDto) {
    const seccion = await this.seccionRepository.findOneBy({
      seccion_id: createAulaDto.seccion_id
    })

    if(!seccion){
      throw new BadRequestException('Seccion not found');
    }
    
    const aula = this.aulaRepository.create({
      numero_aula: createAulaDto.numero_aula,
      capacidad: createAulaDto.capacidad,
      piso: createAulaDto.piso,
      seccion,
    })
    
    return await this.aulaRepository.save(aula);
  }

  async findAll() {
    return this.aulaRepository.find();
  }

  async findOne(aulas_id: number) {
    return await this.aulaRepository.findOneBy({aulas_id});
  }

  async update(aulas_id: number, updateAulaDto: UpdateAulaDto) {
    const aula = await this.aulaRepository.findOneBy({aulas_id});

    if(!aula){
      throw new BadRequestException('aula not found');
    }

    let seccion;
    if(updateAulaDto.seccion_id){
      seccion = await this.seccionRepository.findOneBy({
        seccion_id: updateAulaDto.seccion_id
      });

      if(!seccion){
        throw new BadRequestException('seccion not found');
      }
    }
    return await this.aulaRepository.save({
      ...aula,
      ...updateAulaDto,
      seccion
    });
  }

  async remove(aulas_id: number) {
    return await this.aulaRepository.delete(aulas_id);
  }
}
