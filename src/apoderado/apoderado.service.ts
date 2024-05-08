import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateApoderadoDto } from './dto/create-apoderado.dto';
import { UpdateApoderadoDto } from './dto/update-apoderado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Apoderado } from './entities/apoderado.entity';
import { Repository } from 'typeorm';
import { Dni } from 'src/dni/entities/dni.entity';

@Injectable()
export class ApoderadoService {

  constructor(

    @InjectRepository(Apoderado)
    private readonly apoderadoRepository: Repository<Apoderado>,

    @InjectRepository(Dni)
    private readonly dniRepository: Repository<Dni>,
  ) {}

  async create(createApoderadoDto: CreateApoderadoDto) {
    const dni = await this.dniRepository.findOneBy({
      dni_id: createApoderadoDto.dni_id
    });

    if (!dni) {
      throw new BadRequestException('Dni not found');
    }

    const apoderado = this.apoderadoRepository.create({
      nombres_apoderado: createApoderadoDto.nombres_apoderado,
      apellidos_apoderado: createApoderadoDto.apellidos_apoderado,
      email_apoderado: createApoderadoDto.email_apoderado,
      telefono_apoderado: createApoderadoDto.telefono_apoderado,
      direccion_apoderado: createApoderadoDto.direccion_apoderado,
      dni,
      numero_dni: createApoderadoDto.numero_dni
    });
    return await this.apoderadoRepository.save(apoderado);
  }

  async findAll() {
    return this.apoderadoRepository.find();
  }

  async findOne(apoderado_id: number) {
    return await this.apoderadoRepository.findOneBy({apoderado_id});
  }

  async update(apoderado_id: number, updateApoderadoDto: UpdateApoderadoDto) {
    const apoderado = await this.apoderadoRepository.findOneBy({ apoderado_id });

    if (!apoderado) {
      throw new BadRequestException('apoderado not found');
    }

    let dni;
    if (updateApoderadoDto.dni_id) {
      dni = await this.dniRepository.findOneBy({
        dni_id: updateApoderadoDto.dni_id
      });
  
      if (!dni) {
        throw new BadRequestException('dni not found');
      }
    }
    return await this.apoderadoRepository.save({
      ...apoderado,
      ...updateApoderadoDto,
      dni,
    });
  }

  async remove(apoderado_id: number) {
    return await this.apoderadoRepository.delete(apoderado_id);
  }
}
