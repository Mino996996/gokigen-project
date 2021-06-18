import { Controller, Get} from "@nestjs/common";
import { RadioService } from "./radio.service";

@Controller("radio")
export class RadioController {
  constructor(private readonly radioService: RadioService ) {}
  @Get("demo")
  demo(){
    return this.radioService.fetchDemo();
  }

  @Get("script")
  script(){
    return this.radioService.fetchScriptList();
    // todo: 台本リストを返すサービスを書く
  }
}
