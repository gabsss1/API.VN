import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';
import { Repository } from 'typeorm';
import { Docente } from 'src/docentes/entities/docente.entity';
import { Aula } from 'src/aulas/entities/aula.entity';

@Injectable()
export class CursosService {

  constructor(

    @InjectRepository(Curso)
    private readonly cursoRepository: Repository<Curso>,

    @InjectRepository(Docente)
    private readonly docenteRepository: Repository<Docente>,

    @InjectRepository(Aula)
    private readonly aulaRepository: Repository<Aula>
  ) {}

  async create(createCursoDto: CreateCursoDto) {
    const docente = await this.docenteRepository.findOneBy({
      docente_id: createCursoDto.docente_id
    })

    if(!docente){
      throw new BadRequestException('docente not found')
    }

    const aula = await this.aulaRepository.findOneBy({
      aulas_id: createCursoDto.aulas_id
    })

    if(!aula){
      throw new BadRequestException('aula not found')
    }

    const cursos = this.cursoRepository.create({
      nombre_cursos: createCursoDto.nombre_cursos,
      docente,
      aula
    });
    return await this.cursoRepository.save(cursos);
  }

  async findAll() {
    return this.cursoRepository.find();
  }

  async findOne(cursos_id: number) {
    return await this.cursoRepository.findOneBy({cursos_id});
  }

  async update(cursos_id: number, updateCursoDto: UpdateCursoDto) {
    const curso = await this.cursoRepository.findOneBy({cursos_id})

    if(!curso){
      throw new BadRequestException('curso not found');
    }

    let docente;
    if(updateCursoDto.docente_id){
      docente = await this.docenteRepository.findOneBy({
        docente_id: updateCursoDto.docente_id
      })
    }

    if(!docente){
      throw new BadRequestException('docente not found');
    }

    let aula;
    if(updateCursoDto.aulas_id){
      aula = await this.aulaRepository.findOneBy({
        aulas_id: updateCursoDto.aulas_id
      })
    }

    return await this.cursoRepository.save({
      ...curso,
      ...updateCursoDto,
      docente,
      aula
    })
  }

  async remove(cursos_id: number) {
    return await this.cursoRepository.delete(cursos_id);
  }
}