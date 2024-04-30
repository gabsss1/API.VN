import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApoderadoService } from './apoderado.service';
import { CreateApoderadoDto } from './dto/create-apoderado.dto';
import { UpdateApoderadoDto } from './dto/update-apoderado.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('apoderado')
@ApiTags('Apoderado')
export class ApoderadoController {
  constructor(private readonly apoderadoService: ApoderadoService) {}

  @Post()
  create(@Body() createApoderadoDto: CreateApoderadoDto) {
    return this.apoderadoService.create(createApoderadoDto);
  }

  @Get()
  findAll() {
    return this.apoderadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.apoderadoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateApoderadoDto: UpdateApoderadoDto) {
    return this.apoderadoService.update(id, updateApoderadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.apoderadoService.remove(id);
  }
}
