import { Module } from '@nestjs/common';
import { RadioService } from './radio/applications/radio.service';
import { RadioController } from './radio/adaptors/web/radio.controller';

@Module({
  providers: [RadioService],
  controllers: [RadioController]
})
export class RadioModule {}
