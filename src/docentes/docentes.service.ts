import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dni } from 'src/dni/entities/dni.entity';
import { Repository } from 'typeorm';
import { Docente } from './entities/docente.entity';

@Injectable()
export class DocentesService {

  constructor(
    @InjectRepository(Dni)
    private readonly dniRepository: Repository<Dni>,

    @InjectRepository(Docente)
    private readonly docenteRepository: Repository<Docente>,

  ) {}

  async create(createDocenteDto: CreateDocenteDto) {
    const dni = await this.dniRepository.findOneBy({
      dni_id: createDocenteDto.dni_id
    });

    if(!dni){
      throw new BadRequestException('Dni not found')
    }

    const docente = this.docenteRepository.create({
      nombre_docente: createDocenteDto.nombre_docente,
      apellido_docente: createDocenteDto.apellido_docente,
      direccion_docente: createDocenteDto.direccion_docente,
      email_docente: createDocenteDto.email_docente,
      telefono_docente: createDocenteDto.telefono_docente,
      numero_dni: createDocenteDto.numero_dni,
      dni,
    })
    return await this.docenteRepository.save(docente)
  }

  async findAll() {
    return this.docenteRepository.find()
  }

  async findOne(docente_id: number) {
    return await this.docenteRepository.findOneBy({docente_id})
  }

  async update(docente_id: number, updateDocenteDto: UpdateDocenteDto) {
    const docente = await this.docenteRepository.findOneBy({docente_id})

    if(!docente){
      throw new BadRequestException('Docente not found')
    }

    let dni;
    if(updateDocenteDto.dni_id){
      dni = await this.dniRepository.findOneBy({
        dni_id: updateDocenteDto.dni_id
      })
    }

    if(!dni){
      throw new BadRequestException('Dni not found')
    }

    return await this.docenteRepository.save({
      ...docente,
      ...updateDocenteDto,
      dni,
    })
  }

  async remove(docente_id: number) {
    return await this.docenteRepository.softDelete(docente_id)
  }
}
