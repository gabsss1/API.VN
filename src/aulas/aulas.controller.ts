import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AulasService } from './aulas.service';
import { CreateAulaDto } from './dto/create-aula.dto';
import { UpdateAulaDto } from './dto/update-aula.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('aulas')
@ApiTags('Aulas')
export class AulasController {
  constructor(private readonly aulasService: AulasService) {}

  @Post()
  create(@Body() createAulaDto: CreateAulaDto) {
    return this.aulasService.create(createAulaDto);
  }

  @Get()
  findAll() {
    return this.aulasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.aulasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateAulaDto: UpdateAulaDto) {
    return this.aulasService.update(id, updateAulaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.aulasService.remove(id);
  }
}
