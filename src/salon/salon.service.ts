import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSalonDto } from './dto/create-salon.dto';
import { UpdateSalonDto } from './dto/update-salon.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Salon } from './entities/salon.entity';
import { Repository } from 'typeorm';
import { Seccion } from 'src/seccion/entities/seccion.entity';


@Injectable()
export class SalonService {

  constructor(
    @InjectRepository(Salon)
    private readonly salonRepository: Repository<Salon>,
    
    @InjectRepository(Seccion)
    private readonly seccionRepository: Repository<Seccion>
  ) {}

  async create(createSalonDto: CreateSalonDto) {
    const seccion = await this.seccionRepository.findOneBy({
      seccion_id: createSalonDto.seccion_id
    })
    if(!seccion){
      throw new BadRequestException('seccion not found')
    }
    const salon = this.salonRepository.create({
      numero_salon: createSalonDto.numero_salon,
      piso: createSalonDto.piso,
      seccion
    })

    return await this.salonRepository.save(salon)
  }

  async findAll() {
    return this.salonRepository.find();
  }

  async findOne(salon_id: number) {
    return await this.salonRepository.findOneBy({salon_id})
  }

  async update(salon_id: number, updateSalonDto: UpdateSalonDto) {
    const salon = await this.salonRepository.findOneBy({salon_id})
    if(!salon){
      throw new BadRequestException('salon not found')
    }
    let seccion;
    if(updateSalonDto.seccion_id){
      seccion = await this.seccionRepository.findOneBy({
        seccion_id: updateSalonDto.seccion_id
      })
    }
    if(!seccion){
      throw new BadRequestException('seccion not found')
    }
    return await this.salonRepository.save({
      ...salon,
      ...updateSalonDto,
      seccion
    });
  }

  async remove(salon_id: number) {
    return await this.salonRepository.delete(salon_id)
  }
}
