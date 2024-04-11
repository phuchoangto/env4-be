// model Environment {
//   id          String @id @default(auto()) @map("_id") @db.ObjectId
//   name        String
//   description String?
//   hosts       Host[]
// }

import { ApiProperty } from '@nestjs/swagger';
import { HostType } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateHostDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsOptional()
  type?: HostType;

  @ApiProperty()
  @IsOptional()
  publicIp?: string;

  @ApiProperty()
  @IsOptional()
  privateIp?: string;

  @ApiProperty()
  @IsOptional()
  sshUser?: string;

  @ApiProperty()
  @IsOptional()
  sshPort?: number;

  @ApiProperty()
  @IsOptional()
  sshPass?: string;

  @ApiProperty()
  @IsOptional()
  os?: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  cpu?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  ram?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  disk?: number;

  @ApiProperty()
  @IsOptional()
  description?: string;

  @ApiProperty()
  environmentId: string;
}
