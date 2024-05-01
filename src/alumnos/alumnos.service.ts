import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Alumno } from './entities/alumno.entity';
import { Repository } from 'typeorm';
import { Dni } from 'src/dni/entities/dni.entity';
import { Apoderado } from 'src/apoderado/entities/apoderado.entity';

@Injectable()
export class AlumnosService {

  constructor(

    @InjectRepository(Alumno)
    private readonly alumnoRepository: Repository<Alumno>,

    @InjectRepository(Dni)
    private readonly dniRepository: Repository<Dni>,

    @InjectRepository(Apoderado)
    private readonly apoderadoRepository: Repository<Apoderado>

  ) {}

  async create(createAlumnoDto: CreateAlumnoDto) {
    const dni = await this.dniRepository.findOneBy({
      dni_id: createAlumnoDto.dni_id
    });

    if(!dni){
      throw new BadRequestException('Dni not found');
    }

    const apoderado = await this.apoderadoRepository.findOneBy({
      apoderado_id: createAlumnoDto.apoderado_id
    })

    const alumno = this.alumnoRepository.create({
      nombres_alumno: createAlumnoDto.nombres_alumno,
      apellidos_alumno: createAlumnoDto.apellidos_alumno,
      direccion: createAlumnoDto.direccion,
      telefono_alumno: createAlumnoDto.telefono_alumno,
      numero_dni: createAlumnoDto.numero_dni,
      dni,
      apoderado
    })
  }

  async findAll() {
    return this.alumnoRepository.find();
  }

  async findOne(alumno_id: number) {
    return await this.alumnoRepository.findOneBy({alumno_id});
  }

  async update(alumno_id: number, updateAlumnoDto: UpdateAlumnoDto) {
    const alumno = await this.alumnoRepository.findOneBy({alumno_id});

    if(!alumno){
      throw new BadRequestException('Alumno not found');
    }

    let dni;
    if(updateAlumnoDto.dni_id){
      dni = await this.dniRepository.findOneBy({
        dni_id: updateAlumnoDto.dni_id
      })
    }

    if(!dni){
      throw new BadRequestException('Dni not found');
    }

    let apoderado;
    if(updateAlumnoDto.apoderado_id){
      apoderado = await this.apoderadoRepository.findOneBy({
        apoderado_id: updateAlumnoDto.apoderado_id
      })
    }
    return await this.alumnoRepository.save({
      ...alumno,
      ...updateAlumnoDto,
      dni,
      apoderado
    })
  }

  async remove(alumno_id: number) {
    return await this.apoderadoRepository.softDelete(alumno_id);
  }
}
