import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSeccionDto } from './dto/create-seccion.dto';
import { UpdateSeccionDto } from './dto/update-seccion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Seccion } from './entities/seccion.entity';
import { Repository } from 'typeorm';
import { Grado } from 'src/grado/entities/grado.entity';
import { Docente } from 'src/docentes/entities/docente.entity';

@Injectable()
export class SeccionService {

  constructor(
    @InjectRepository(Seccion)
    private readonly seccionRepository: Repository<Seccion>,

    @InjectRepository(Grado)
    private readonly gradoRepository: Repository<Grado>,

    @InjectRepository(Docente)
    private readonly docenteRepository: Repository<Docente>
  ) {}

  async create(createSeccionDto: CreateSeccionDto) {
    const grado = await this.gradoRepository.findOneBy({
      grados_id: createSeccionDto.grados_id
    })
    if(!grado){
      throw new BadRequestException('grado not foud')
    }
    
    const docente = await this.docenteRepository.findOneBy({
      docente_id: createSeccionDto.docente_id
    })
    if(!docente){
      throw new BadRequestException('docente not found')
    }

    const seccion = this.seccionRepository.create({
      nombre_seccion: createSeccionDto.nombre_seccion,
      capacidad: createSeccionDto.capacidad,
      docente,
      grado
    })
    return await this.seccionRepository.save(seccion)
  }

  async findAll() {
    return this.seccionRepository.find();
  }

  async findOne(seccion_id: number) {
    return await this.seccionRepository.findOneBy({seccion_id});
  }

  async update(seccion_id: number, updateSeccionDto: UpdateSeccionDto) {
    const seccion = await this.seccionRepository.findOneBy({seccion_id})
    if(!seccion){
      throw new BadRequestException('seccion not found')
    }
    let docente;
    if(updateSeccionDto.docente_id){
      docente = await this.docenteRepository.findOneBy({
        docente_id: updateSeccionDto.docente_id
      });
      if(!docente){
        throw new BadRequestException('docente not found')
      }
    }
    let grado;
    if(updateSeccionDto.grados_id){
      grado = await this.gradoRepository.findOneBy({
        grados_id: updateSeccionDto.grados_id
      });
      if(!grado){
        throw new BadRequestException('grado not found')
      }
    }
    return await this.seccionRepository.save({
      ...seccion,
      ...updateSeccionDto,
      docente,
      grado
    })
  }

  async remove(seccion_id: number) {
    return await this.seccionRepository.delete(seccion_id);
  }
}
