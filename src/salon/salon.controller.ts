import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SalonService } from './salon.service';
import { CreateSalonDto } from './dto/create-salon.dto';
import { UpdateSalonDto } from './dto/update-salon.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('salon')
@ApiTags('Salon')
export class SalonController {
  constructor(private readonly salonService: SalonService) {}

  @Post()
  create(@Body() createSalonDto: CreateSalonDto) {
    return this.salonService.create(createSalonDto);
  }

  @Get()
  findAll() {
    return this.salonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.salonService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateSalonDto: UpdateSalonDto) {
    return this.salonService.update(id, updateSalonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.salonService.remove(id);
  }
}
