import { Injectable } from '@nestjs/common';
import { Environment, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEnvironmentDto } from './dto/create-environment.dto';
import { UpdateEnvironmentDto } from './dto/update-environment.dto';

@Injectable()
export class EnvironmentsService {
  constructor(private readonly prismaService: PrismaService) {}

  async remove(id: string): Promise<Environment> {
    return this.prismaService.environment.delete({
      where: { id },
    });
  }

  async findOne(id: string): Promise<Environment> {
    return this.prismaService.environment.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    updateEnvironmentDto: UpdateEnvironmentDto,
  ): Promise<Environment> {
    return this.prismaService.environment.update({
      where: { id },
      data: {
        name: updateEnvironmentDto.name,
        description: updateEnvironmentDto.description,
      },
    });
  }

  async create(
    createEnvironmentDto: CreateEnvironmentDto,
  ): Promise<Environment> {
    return this.prismaService.environment.create({
      data: {
        name: createEnvironmentDto.name,
        description: createEnvironmentDto.description,
      },
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.EnvironmentWhereUniqueInput;
    where?: Prisma.EnvironmentWhereInput;
    orderBy?: Prisma.EnvironmentOrderByWithRelationInput;
  }): Promise<Environment[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prismaService.environment.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
