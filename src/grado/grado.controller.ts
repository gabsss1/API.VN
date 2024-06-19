import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { GradoService } from './grado.service';
import { CreateGradoDto } from './dto/create-grado.dto';
import { UpdateGradoDto } from './dto/update-grado.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('grado')
@ApiTags('Grado')
export class GradoController {
  constructor(private readonly gradoService: GradoService) {}

  @Post()
  create(@Body() createGradoDto: CreateGradoDto) {
    return this.gradoService.create(createGradoDto);
  }

  @Get()
  findAll() {
    return this.gradoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.gradoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateGradoDto: UpdateGradoDto) {
    return this.gradoService.update(id, updateGradoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.gradoService.remove(id);
  }
}
