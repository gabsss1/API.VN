import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Alumno } from './entities/alumno.entity';
import { Repository } from 'typeorm';
import { Dni } from 'src/dni/entities/dni.entity';
import { Apoderado } from 'src/apoderado/entities/apoderado.entity';
import { Seccion } from 'src/seccion/entities/seccion.entity';

@Injectable()
export class AlumnosService {

  constructor(

    @InjectRepository(Alumno)
    private readonly alumnoRepository: Repository<Alumno>,

    @InjectRepository(Dni)
    private readonly dniRepository: Repository<Dni>,

    @InjectRepository(Apoderado)
    private readonly apoderadoRepository: Repository<Apoderado>,

    @InjectRepository(Seccion)
    private readonly seccionRepository: Repository<Seccion>,

  ) {}

  async create(createAlumnoDto: CreateAlumnoDto) {
    const dni = await this.dniRepository.findOneBy({
      dni_id: createAlumnoDto.dni_id
    });

    if(!dni){
      throw new BadRequestException('documento no encontrado');
    }

    const apoderado = await this.apoderadoRepository.findOneBy({
      apoderado_id: createAlumnoDto.apoderado_id
    })

    if(!apoderado){
      throw new BadRequestException('apoderado no encontrado');
    }

    const seccion = await this.seccionRepository.findOneBy({
      seccion_id: createAlumnoDto.seccion_id
    })

    if(!seccion){
      throw new BadRequestException('seccion no encontrada');
    }

    if(seccion.alumno.length >= seccion.capacidad){
      throw new BadRequestException('Capacidad de la seccion llena.');
    }

    const alumno = this.alumnoRepository.create({
      nombres_alumno: createAlumnoDto.nombres_alumno,
      apellidos_alumno: createAlumnoDto.apellidos_alumno,
      direccion_alumno: createAlumnoDto.direccion_alumno,
      telefono_alumno: createAlumnoDto.telefono_alumno,
      numero_dni: createAlumnoDto.numero_dni,
      dni,
      apoderado,
      seccion
    });
    return await this.alumnoRepository.save(alumno);
  }

  async findAll() {
    return this.alumnoRepository.find({ relations: ['dni', 'apoderado', 'seccion'] });
  }

  async findOne(alumno_id: number) {
    return await this.alumnoRepository.findOne({ 
      where: { alumno_id }, 
      relations: ['dni', 'apoderado', 'seccion'] 
    });
  }

  async update(alumno_id: number, updateAlumnoDto: UpdateAlumnoDto) {
    const alumno = await this.alumnoRepository.findOneBy({alumno_id});

    if(!alumno){
      throw new BadRequestException('alumno no encontrado');
    }

    let dni;
    if(updateAlumnoDto.dni_id){
      dni = await this.dniRepository.findOneBy({
        dni_id: updateAlumnoDto.dni_id
      })
    }

    if(!dni){
      throw new BadRequestException('documento no encontrado');
    }

    let apoderado;
    if(updateAlumnoDto.apoderado_id){
      apoderado = await this.apoderadoRepository.findOneBy({
        apoderado_id: updateAlumnoDto.apoderado_id
      })
    }

    if(!apoderado){
      throw new BadRequestException('apoderado no encontrado');
    }

    let seccion;
    if(updateAlumnoDto.seccion_id){
      seccion = await this.seccionRepository.findOneBy({
        seccion_id: updateAlumnoDto.seccion_id
      })
    }

    if(!seccion){
      throw new BadRequestException('seccion no encontrada');
    }

    const alumnoEnSeccion = seccion.alumno.find(alumnoSeccion => alumnoSeccion.alumno_id === alumno.alumno_id);

    // Si el alumno no está actualmente en el aula, verificar la capacidad del aula
    if (!alumnoEnSeccion) {
      if (seccion.alumno.length >= seccion.capacidad) {
        throw new BadRequestException('Capacidad de la seccion llena.');
      }
    }

    return await this.alumnoRepository.save({
      ...alumno,
      ...updateAlumnoDto,
      dni,
      apoderado,
      seccion
    })
  }

  async remove(alumno_id: number) {
    return await this.alumnoRepository.delete(alumno_id);
  }
}
