// model Environment {
//   id          String @id @default(auto()) @map("_id") @db.ObjectId
//   name        String
//   description String?
//   hosts       Host[]
// }

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateEnvironmentDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsOptional()
  description?: string;
}
