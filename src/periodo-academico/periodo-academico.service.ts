import { Injectable } from '@nestjs/common';
import { CreatePeriodoAcademicoDto } from './dto/create-periodo-academico.dto';
import { UpdatePeriodoAcademicoDto } from './dto/update-periodo-academico.dto';

@Injectable()
export class PeriodoAcademicoService {
  create(createPeriodoAcademicoDto: CreatePeriodoAcademicoDto) {
    return 'This action adds a new periodoAcademico';
  }

  findAll() {
    return `This action returns all periodoAcademico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} periodoAcademico`;
  }

  update(id: number, updatePeriodoAcademicoDto: UpdatePeriodoAcademicoDto) {
    return `This action updates a #${id} periodoAcademico`;
  }

  remove(id: number) {
    return `This action removes a #${id} periodoAcademico`;
  }
}
