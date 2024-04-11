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
import { HostsService } from './hosts.service';
import { CreateHostDto } from './dto/create-host.dto';
import { UpdateHostDto } from './dto/update-host.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('hosts')
@ApiTags('hosts')
export class HostsController {
  constructor(private readonly hostsService: HostsService) {}

  @Get()
  async findAll(@Query() query) {
    return this.hostsService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.hostsService.findOne(id);
  }

  @Post()
  async create(@Body() createHostDto: CreateHostDto) {
    return this.hostsService.create(createHostDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.hostsService.remove(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateHostDto: UpdateHostDto) {
    return this.hostsService.update(id, updateHostDto);
  }
}
