import { Module } from '@nestjs/common';
import { RadioScriptService } from './radioScript.service';
import { RadioController } from './radio.controller';

@Module({
  providers: [RadioScriptService],
  controllers: [RadioController]
})
export class RadioModule {}
