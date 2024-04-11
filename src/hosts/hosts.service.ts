import { Injectable } from '@nestjs/common';
import { Host, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHostDto } from './dto/create-host.dto';
import { UpdateHostDto } from './dto/update-host.dto';
@Injectable()
export class HostsService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.HostWhereUniqueInput;
    where?: Prisma.HostWhereInput;
    orderBy?: Prisma.HostOrderByWithRelationInput;
  }): Promise<Host[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prismaService.host.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(id: string): Promise<Host> {
    return this.prismaService.host.findUnique({
      where: { id },
    });
  }

  async create(createHostDto: CreateHostDto): Promise<Host> {
    return this.prismaService.host.create({
      data: {
        name: createHostDto.name,
        publicIp: createHostDto.publicIp,
        privateIp: createHostDto.privateIp,
        sshUser: createHostDto.sshUser,
        sshPort: createHostDto.sshPort,
        sshPass: createHostDto.sshPass,
        os: createHostDto.os,
        cpu: createHostDto.cpu,
        ram: createHostDto.ram,
        disk: createHostDto.disk,
        environment: {
          connect: { id: createHostDto.environmentId },
        },
      },
    });
  }

  async remove(id: string): Promise<Host> {
    return this.prismaService.host.delete({
      where: { id },
    });
  }

  async update(id: string, updateHostDto: UpdateHostDto): Promise<Host> {
    return this.prismaService.host.update({
      where: { id },
      data: {
        name: updateHostDto.name,
        publicIp: updateHostDto.publicIp,
        privateIp: updateHostDto.privateIp,
        sshUser: updateHostDto.sshUser,
        sshPort: updateHostDto.sshPort,
        sshPass: updateHostDto.sshPass,
        os: updateHostDto.os,
        cpu: updateHostDto.cpu,
        ram: updateHostDto.ram,
        disk: updateHostDto.disk,
        environment: {
          connect: { id: updateHostDto.environmentId },
        },
      },
    });
  }
}
