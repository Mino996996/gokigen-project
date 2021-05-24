import { Test, TestingModule } from "@nestjs/testing";
import { RadioScriptService } from "./radioScript.service";

type ScriptItems = {
  contentType: ContentType;
  corner:string;
  talkOutline:string;
  mainGive:string;
  time:number;
}

enum ContentType {
  'opening',
  'freeTalk',
  'jingle',
  'miniCorner',
  'corner',
  'music',
  'ending'
}
describe('RadioService', () => {
  let service: RadioScriptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RadioScriptService],
    }).compile();

    service = module.get<RadioScriptService>(RadioScriptService);
  });

  test('コンテンツリストで0を選択したらopeningを返す', ()=>{
    expect(service).toEqual('opening');
  });

  test('経過時間を計算する', () =>{
    service.startRadio()
    expect(service.elapsedTimeInSec()).toEqual(expect.any(Number))
  });
});
