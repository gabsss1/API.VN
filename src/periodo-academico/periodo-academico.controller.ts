import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeriodoAcademicoService } from './periodo-academico.service';
import { CreatePeriodoAcademicoDto } from './dto/create-periodo-academico.dto';
import { UpdatePeriodoAcademicoDto } from './dto/update-periodo-academico.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('periodo-academico')
@ApiTags('Periodo Academico')
export class PeriodoAcademicoController {
  constructor(private readonly periodoAcademicoService: PeriodoAcademicoService) {}

  @Post()
  create(@Body() createPeriodoAcademicoDto: CreatePeriodoAcademicoDto) {
    return this.periodoAcademicoService.create(createPeriodoAcademicoDto);
  }

  @Get()
  findAll() {
    return this.periodoAcademicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.periodoAcademicoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePeriodoAcademicoDto: UpdatePeriodoAcademicoDto) {
    return this.periodoAcademicoService.update(+id, updatePeriodoAcademicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.periodoAcademicoService.remove(+id);
  }
}
