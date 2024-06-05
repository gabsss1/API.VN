import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Alumno } from './entities/alumno.entity';
import { Repository } from 'typeorm';
import { Dni } from 'src/dni/entities/dni.entity';
import { Apoderado } from 'src/apoderado/entities/apoderado.entity';
import { Aula } from 'src/aulas/entities/aula.entity';

@Injectable()
export class AlumnosService {

  constructor(

    @InjectRepository(Alumno)
    private readonly alumnoRepository: Repository<Alumno>,

    @InjectRepository(Dni)
    private readonly dniRepository: Repository<Dni>,

    @InjectRepository(Apoderado)
    private readonly apoderadoRepository: Repository<Apoderado>,

    @InjectRepository(Aula)
    private readonly aulaRepository: Repository<Aula>,

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

    const aula = await this.aulaRepository.findOneBy({
      aulas_id: createAlumnoDto.aulas_id
    })

    if(!aula){
      throw new BadRequestException('aula no encontrada');
    }

    if(aula.alumno.length >= aula.capacidad){
      throw new BadRequestException('Capacidad del aula llena.');
    }

    const alumno = this.alumnoRepository.create({
      nombres_alumno: createAlumnoDto.nombres_alumno,
      apellidos_alumno: createAlumnoDto.apellidos_alumno,
      direccion_alumno: createAlumnoDto.direccion_alumno,
      telefono_alumno: createAlumnoDto.telefono_alumno,
      numero_dni: createAlumnoDto.numero_dni,
      dni,
      apoderado,
      aula
    });
    return await this.alumnoRepository.save(alumno);
  }

  async findAll() {
    return this.alumnoRepository.find({ relations: ['dni', 'apoderado', 'aula'] });
  }

  async findOne(alumno_id: number) {
    return await this.alumnoRepository.findOne({ 
      where: { alumno_id }, 
      relations: ['dni', 'apoderado', 'aula'] 
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

    let aula;
    if(updateAlumnoDto.aulas_id){
      aula = await this.aulaRepository.findOneBy({
        aulas_id: updateAlumnoDto.aulas_id
      })
    }

    if(!aula){
      throw new BadRequestException('aula no encontrada');
    }

    const alumnoEnAula = aula.alumno.find(alumnoAula => alumnoAula.alumno_id === alumno.alumno_id);

    // Si el alumno no está actualmente en el aula, verificar la capacidad del aula
    if (!alumnoEnAula) {
      if (aula.alumno.length >= aula.capacidad) {
        throw new BadRequestException('Capacidad del aula llena.');
      }
    }

    return await this.alumnoRepository.save({
      ...alumno,
      ...updateAlumnoDto,
      dni,
      apoderado,
      aula
    })
  }

  async remove(alumno_id: number) {
    return await this.alumnoRepository.delete(alumno_id);
  }
}
