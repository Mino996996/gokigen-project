import { Test, TestingModule } from "@nestjs/testing";
import { RadioScriptService, ContentType, Outlines } from "./radioScript.service";


describe('RadioService', () => {
  let service: RadioScriptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RadioScriptService],
    }).compile();

    service = module.get<RadioScriptService>(RadioScriptService);
  });

  it('コンテンツリストで0を選択したら"オープニング"を返す', ()=>{
    expect(service.selectContent(0)).toEqual("オープニング");
    // expect(service.selectContent(8)).toBeTruthy();
  });

  it('コーナー名に"ふつおた"を記入したら、"ふつおた"を返す', () =>{
    expect(service.editCornerName('ふつおた').toEqual('ふつおた'));
  });

  test('経過時間を計算する', () =>{
    service.startRadio()
    await new Promise((resolve) => setTimeout(resolve, 1000))

    expect(service.elapsedTimeInSec()).toEqual(60*60-1)
  });
});
