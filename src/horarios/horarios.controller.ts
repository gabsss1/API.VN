import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { HorariosService } from './horarios.service';
import { CreateHorarioDto } from './dto/create-horario.dto';
import { UpdateHorarioDto } from './dto/update-horario.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('horarios')
@ApiTags('Horarios')
export class HorariosController {
  constructor(private readonly horariosService: HorariosService) {}

  @Post()
  create(@Body() createHorarioDto: CreateHorarioDto) {
    return this.horariosService.create(createHorarioDto);
  }

  @Get()
  findAll() {
    return this.horariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.horariosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateHorarioDto: UpdateHorarioDto) {
    return this.horariosService.update(id, updateHorarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.horariosService.remove(id);
  }
}
