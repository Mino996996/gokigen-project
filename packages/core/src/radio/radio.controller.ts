import { Controller, Get, Param} from "@nestjs/common";
import { RadioService } from "./radio.service";
import { sampleContent, sampleNoErrorData } from "./fixtures/sample-content-data";

@Controller("radio")
export class RadioController {
  constructor(private readonly _RS: RadioService ) {}
  @Get("demo")
  demo(){
    return this._RS.fetchDemo();
  }

  @Get("script")
  getAllScript(): string {
    return this._RS.fetchScriptList();
    // todo: 台本リストを返すサービスを書く
  }

  /* ユーザーIDとgroupID別で台本リストを取得する */
  @Get(":id/:group")
  // todo: 現在は動作テストのためこれで済ませるが、DB連携時に合わせて非同期処理に変えること
  getUserScript(@Param('id') userId:string, @Param('group') groupId:string){
    return this._RS.getContentList(sampleNoErrorData , null, Number(userId));
    // return `get userID:${Number(userId)}, groupID:${Number(groupId)}`
  }
}
