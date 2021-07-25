import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RadioModule } from './radio.module';
import { PostgresqlService } from './postgresql/postgresql.service';

@Module({
  imports: [RadioModule],
  controllers: [AppController],
  providers: [AppService, PostgresqlService],
})
export class AppModule {}
