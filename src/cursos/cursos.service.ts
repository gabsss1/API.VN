import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';
import { Repository } from 'typeorm';
import { Docente } from 'src/docentes/entities/docente.entity';
import { Grado } from 'src/grado/entities/grado.entity';

@Injectable()
export class CursosService {

  constructor(

    @InjectRepository(Curso)
    private readonly cursoRepository: Repository<Curso>,

    @InjectRepository(Docente)
    private readonly docenteRepository: Repository<Docente>,

    @InjectRepository(Grado)
    private readonly gradoRepository: Repository<Grado>
  ) {}

  async create(createCursoDto: CreateCursoDto) {
    const docente = await this.docenteRepository.findOneBy({
      docente_id: createCursoDto.docente_id
    })

    if(!docente){
      throw new BadRequestException('docente not found')
    }

    const grado = await this.gradoRepository.findOneBy({
      grados_id: createCursoDto.grados_id
    })

    if(!grado){
      throw new BadRequestException('aula not found')
    }

    const cursos = this.cursoRepository.create({
      nombre_cursos: createCursoDto.nombre_cursos,
      docente,
      grado
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

    let grado;
    if(updateCursoDto.grados_id){
      grado = await this.gradoRepository.findOneBy({
        grados_id: updateCursoDto.grados_id
      })
    }

    return await this.cursoRepository.save({
      ...curso,
      ...updateCursoDto,
      docente,
      grado
    })
  }

  async remove(cursos_id: number) {
    return await this.cursoRepository.delete(cursos_id);
  }
}