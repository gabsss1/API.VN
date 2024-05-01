import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('alumnos')
@ApiTags('Alumnos')
export class AlumnosController {
  constructor(private readonly alumnosService: AlumnosService) {}

  @Post()
  create(@Body() createAlumnoDto: CreateAlumnoDto) {
    return this.alumnosService.create(createAlumnoDto);
  }

  @Get()
  findAll() {
    return this.alumnosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.alumnosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateAlumnoDto: UpdateAlumnoDto) {
    return this.alumnosService.update(id, updateAlumnoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.alumnosService.remove(id);
  }
}
