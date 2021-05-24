import { Test, TestingModule } from "@nestjs/testing";
import { RadioService } from "./radio.service";

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
  let service: RadioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RadioService],
    }).compile();

    service = module.get<RadioService>(RadioService);
  });

  test('コンテンツリストで0を選択したらopeningを返す', ()=>{
    expect(service.).toEqual('opening');
  });

  test('経過時間を計算する', () =>{
    service.startRadio()
    expect(service.elapsedTimeInSec()).toEqual(expect.any(Number))
  });
});
