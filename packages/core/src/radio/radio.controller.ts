import { Controller, Get} from "@nestjs/common";
import { RadioService } from "./radio.service";

@Controller("radio")
export class RadioController {
  constructor(private readonly radioService: RadioService ) {}
  @Get()
  demo(){
    return this.radioService.fetchDemo();
  }
}
