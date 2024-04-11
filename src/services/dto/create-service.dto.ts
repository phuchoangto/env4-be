import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class CreateServiceDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  @IsOptional()
  description?: string;

  @ApiProperty()
  hostId: string;

  @ApiProperty()
  @IsOptional()
  publicAccess?: string;

  @ApiProperty()
  @IsOptional()
  privateAccess?: string;

  @ApiProperty()
  @IsOptional()
  credentials?: string;
}
