import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RadioModule } from './radio.module';

@Module({
  imports: [RadioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
