import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { DocentesService } from './docentes.service';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('docentes')
@ApiTags('Docentes')
export class DocentesController {
  constructor(private readonly docentesService: DocentesService) {}

  @Post()
  create(@Body() createDocenteDto: CreateDocenteDto) {
    return this.docentesService.create(createDocenteDto);
  }

  @Get()
  findAll() {
    return this.docentesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.docentesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateDocenteDto: UpdateDocenteDto) {
    return this.docentesService.update(id, updateDocenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.docentesService.remove(id);
  }
}
