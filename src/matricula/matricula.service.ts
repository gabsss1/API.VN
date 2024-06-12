import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMatriculaDto } from './dto/create-matricula.dto';
import { UpdateMatriculaDto } from './dto/update-matricula.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Matricula } from './entities/matricula.entity';
import { Repository } from 'typeorm';
import { Alumno } from 'src/alumnos/entities/alumno.entity';
import { Apoderado } from 'src/apoderado/entities/apoderado.entity';
import { Seccion } from 'src/seccion/entities/seccion.entity';

@Injectable()
export class MatriculaService {


  constructor(

    @InjectRepository(Matricula)
    private readonly matriculaRepository: Repository <Matricula>,

    @InjectRepository(Alumno)
    private readonly alumnoRepository: Repository<Alumno>,

    @InjectRepository(Apoderado)
    private readonly apoderadoRepository: Repository<Apoderado>,

    @InjectRepository(Seccion)
    private readonly seccionRepository: Repository<Seccion>
  ) {}

  async create(createMatriculaDto: CreateMatriculaDto) {
    const alumno = await this.alumnoRepository.findOneBy({
      alumno_id: createMatriculaDto.alumno_id
    })

    if(!alumno){
      throw new BadRequestException('alumno not found')
    }

    const apoderado = await this.apoderadoRepository.findOneBy({
      apoderado_id: createMatriculaDto.apoderado_id
    })

    if(!apoderado){
      throw new BadRequestException('apoderado not found')
    }

    const seccion = await this.seccionRepository.findOneBy({
      seccion_id: createMatriculaDto.seccion_id
    })

    if(!seccion){
      throw new BadRequestException('seccion not found')
    }

    const matricula = this.matriculaRepository.create({
      periodo_academico: createMatriculaDto.periodo_academico,
      numero_matricula: createMatriculaDto.numero_matricula,
      observaciones: createMatriculaDto.observaciones,
      alumno,
      apoderado,
      seccion
    });
    return await this.matriculaRepository.save(matricula);
  }

  async findAll() {
    return this.matriculaRepository.find();
  }

  async findOne(matricula_id: number) {
    return await this.matriculaRepository.findOneBy({matricula_id})
  }

  async update(matricula_id: number, updateMatriculaDto: UpdateMatriculaDto) {
    const matricula = await this.matriculaRepository.findOneBy({matricula_id})

    if(!matricula){
      throw new BadRequestException('matricula not found');
    }

    let alumno;
    if(updateMatriculaDto.alumno_id){
      alumno = await this.alumnoRepository.findOneBy({
        alumno_id: updateMatriculaDto.alumno_id
      })
    }

    if(!alumno){
      throw new BadRequestException('alumno not found');
    }

    let apoderado;
    if(updateMatriculaDto.apoderado_id){
      apoderado = await this.apoderadoRepository.findOneBy({
        apoderado_id: updateMatriculaDto.apoderado_id
      })
    }

    if(!apoderado){
      throw new BadRequestException('apoderado not found');
    }

    let seccion;
    if(updateMatriculaDto.seccion_id){
      seccion = await this.seccionRepository.findOneBy({
        seccion_id: updateMatriculaDto.seccion_id
      })
    }

    if(!seccion){
      throw new BadRequestException('seccion not found');
    }

    return await this.matriculaRepository.save({
      ...matricula,
      ...updateMatriculaDto,
      alumno,
      apoderado,
      seccion
    })
  }

  async remove(matricula_id: number) {
    return await this.matriculaRepository.delete(matricula_id)
  }
}