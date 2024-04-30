import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DniService } from './dni.service';
import { CreateDniDto } from './dto/create-dni.dto';
import { UpdateDniDto } from './dto/update-dni.dto';

@Controller('dni')
export class DniController {
  constructor(private readonly dniService: DniService) {}

  // @Post()
  // create(@Body() createDniDto: CreateDniDto) {
  //   return this.dniService.create(createDniDto);
  // }

  @Get()
  findAll() {
    return this.dniService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.dniService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDniDto: UpdateDniDto) {
  //   return this.dniService.update(+id, updateDniDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.dniService.remove(+id);
  // }
}
