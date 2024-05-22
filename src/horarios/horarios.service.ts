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
    return `This action returns all horarios`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} horario`;
  }

  async update(id: number, updateHorarioDto: UpdateHorarioDto) {
    return `This action updates a #${id} horario`;
  }

  async remove(id: number) {
    return `This action removes a #${id} horario`;
  }
}
