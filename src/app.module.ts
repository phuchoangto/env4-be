import { Module } from '@nestjs/common';
import { EnvironmentsModule } from './environments/environments.module';
import { PrismaModule } from './prisma/prisma.module';
import { HostsModule } from './hosts/hosts.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [EnvironmentsModule, PrismaModule, HostsModule, ServicesModule],
})
export class AppModule {}
