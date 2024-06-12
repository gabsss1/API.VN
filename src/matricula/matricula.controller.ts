import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { MatriculaService } from './matricula.service';
import { CreateMatriculaDto } from './dto/create-matricula.dto';
import { UpdateMatriculaDto } from './dto/update-matricula.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('matricula')
@ApiTags('Matricula')
export class MatriculaController {
  constructor(private readonly matriculaService: MatriculaService) {}

  @Post()
  create(@Body() createMatriculaDto: CreateMatriculaDto) {
    return this.matriculaService.create(createMatriculaDto);
  }

  @Get()
  findAll() {
    return this.matriculaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.matriculaService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateMatriculaDto: UpdateMatriculaDto) {
    return this.matriculaService.update(id, updateMatriculaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.matriculaService.remove(id);
  }
}
