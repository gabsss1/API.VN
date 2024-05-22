import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('cursos')
@ApiTags('Cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Post()
  create(@Body() createCursoDto: CreateCursoDto) {
    return this.cursosService.create(createCursoDto);
  }

  @Get()
  findAll() {
    return this.cursosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.cursosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCursoDto: UpdateCursoDto) {
    return this.cursosService.update(id, updateCursoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.cursosService.remove(id);
  }
}
