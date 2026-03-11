import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BatalhaService } from './batalha.service';
import { CreateBatalhaDto } from './dto/create-batalha.dto';
import { UpdateBatalhaDto } from './dto/update-batalha.dto';

@Controller('batalha')
export class BatalhaController {
  constructor(private readonly batalhaService: BatalhaService) {}

  @Post()
  create(@Body() createBatalhaDto: CreateBatalhaDto) {
    return this.batalhaService.create(createBatalhaDto);
  }

  @Get()
  findAll() {
    return this.batalhaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.batalhaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBatalhaDto: UpdateBatalhaDto) {
    return this.batalhaService.update(+id, updateBatalhaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.batalhaService.remove(+id);
  }
}
