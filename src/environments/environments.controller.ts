import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { EnvironmentsService } from './environments.service';
import { CreateEnvironmentDto } from './dto/create-environment.dto';
import { UpdateEnvironmentDto } from './dto/update-environment.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('environments')
@ApiTags('environments')
export class EnvironmentsController {
  constructor(private readonly environmentsService: EnvironmentsService) {}

  @Get()
  async findAll(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,
    @Query('where') where?: string,
    @Query('orderBy') orderBy?: string,
  ) {
    return this.environmentsService.findAll({
      skip: skip ? +skip : undefined,
      take: take ? +take : undefined,
      cursor: cursor ? { id: cursor } : undefined,
      where: where ? JSON.parse(where) : undefined,
      orderBy: orderBy ? JSON.parse(orderBy) : undefined,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.environmentsService.findOne(id);
  }

  @Post()
  async create(@Body() createEnvironmentDto: CreateEnvironmentDto) {
    return this.environmentsService.create(createEnvironmentDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEnvironmentDto: UpdateEnvironmentDto,
  ) {
    return this.environmentsService.update(id, updateEnvironmentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.environmentsService.remove(id);
  }
}
