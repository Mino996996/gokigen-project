import { Module } from '@nestjs/common';
import { RadioService } from './radio/radio.service';
import { RadioController } from './radio/radio.controller';

@Module({
  providers: [RadioService],
  controllers: [RadioController]
})
export class RadioModule {}
