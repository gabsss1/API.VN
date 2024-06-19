import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SeccionService } from './seccion.service';
import { CreateSeccionDto } from './dto/create-seccion.dto';
import { UpdateSeccionDto } from './dto/update-seccion.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('seccion')
@ApiTags('Seccion')
export class SeccionController {
  constructor(private readonly seccionService: SeccionService) {}

  @Post()
  create(@Body() createSeccionDto: CreateSeccionDto) {
    return this.seccionService.create(createSeccionDto);
  }

  @Get()
  findAll() {
    return this.seccionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.seccionService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateSeccionDto: UpdateSeccionDto) {
    return this.seccionService.update(id, updateSeccionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.seccionService.remove(id);
  }
}
