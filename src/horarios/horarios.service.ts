import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateHorarioDto } from './dto/create-horario.dto';
import { UpdateHorarioDto } from './dto/update-horario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Horario } from './entities/horario.entity';
import { Repository } from 'typeorm';
import { Docente } from 'src/docentes/entities/docente.entity';
import { Curso } from 'src/cursos/curso.entity';

@Injectable()
export class HorariosService {

  constructor(
    @InjectRepository(Horario)
    private readonly horarioRepository: Repository<Horario>,

    @InjectRepository(Docente)
    private readonly docenteRepository: Repository<Docente>,

    @InjectRepository(Curso)
    private readonly cursoRepository: Repository<Curso>
  ) {}

  async create(createHorarioDto: CreateHorarioDto) {
    const docente = await this.docenteRepository.findOneBy({
      docente_id: createHorarioDto.docente_id
    })

    if(!docente){
      throw new BadRequestException('docente not found')
    }

    const curso = await this.cursoRepository.findOneBy({
      cursos_id: createHorarioDto.cursos_id
    })

    if(!curso){
      throw new BadRequestException('curso not found')
    }

    const horario = this.horarioRepository.create({
      hora_inicio: createHorarioDto.hora_inicio,
      hora_fin: createHorarioDto.hora_fin,
      curso,
      docente
    })
    return await this.horarioRepository.save(horario);
  }

  async findAll() {
    return this.horarioRepository.find();
  }

  async findOne(horario_id: number) {
    return await this.horarioRepository.findOneBy({horario_id});
  }

  async update(horario_id: number, updateHorarioDto: UpdateHorarioDto) {
    const horario = await this.horarioRepository.findOneBy({horario_id})

    if(!horario){
      throw new BadRequestException('horario not found')
    }

    let docente;
    if(updateHorarioDto.docente_id){
      docente = await this.docenteRepository.findOneBy({
        docente_id: updateHorarioDto.docente_id
      });

      if(!docente){
        throw new BadRequestException('docente not found');
      }
    }

    let curso;
    if(updateHorarioDto.cursos_id){
      curso = await this.cursoRepository.findOneBy({
        cursos_id: updateHorarioDto.cursos_id
      });

      if(!docente){
        throw new BadRequestException('cursos not found');
      }
    }

    return await this.horarioRepository.save({
      ...horario,
      ...updateHorarioDto,
      docente,
      curso
    })

  }

  async remove(horario_id: number) {
    return await this.horarioRepository.delete(horario_id);
  }
}
