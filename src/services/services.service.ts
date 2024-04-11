import { Injectable } from '@nestjs/common';
import { Prisma, Service } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServicesService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ServiceWhereUniqueInput;
    where?: Prisma.ServiceWhereInput;
    orderBy?: Prisma.ServiceOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prismaService.service.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(id: string) {
    return this.prismaService.service.findUnique({
      where: { id },
    });
  }

  async create(createServiceDto: CreateServiceDto): Promise<Service> {
    return this.prismaService.service.create({
      data: {
        name: createServiceDto.name,
        description: createServiceDto.description,
        publicAccess: createServiceDto.publicAccess,
        privateAccess: createServiceDto.privateAccess,
        credentials: createServiceDto.credentials,
        host: {
          connect: { id: createServiceDto.hostId },
        },
      },
    });
  }

  async remove(id: string) {
    return this.prismaService.service.delete({
      where: { id },
    });
  }

  async update(id: string, updateServiceDto: UpdateServiceDto) {
    return this.prismaService.service.update({
      where: { id },
      data: {
        name: updateServiceDto.name,
        description: updateServiceDto.description,
        publicAccess: updateServiceDto.publicAccess,
        privateAccess: updateServiceDto.privateAccess,
        credentials: updateServiceDto.credentials,
        host: {
          connect: { id: updateServiceDto.hostId },
        },
      },
    });
  }
}
