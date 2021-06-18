import { Test, TestingModule } from "@nestjs/testing";
import { RadioService, RadioContent, ContentType } from "./radio.service";

describe('RadioService', () => {
  let service: RadioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RadioService],
    }).compile();

    service = module.get<RadioService>(RadioService);
  });

  // test('1時間のラジオをスタートしてから1秒後、残り時間が 60 x 60 - 1 になる', async () =>{
  //   service.startRadio()
  //   await new Promise((resolve) => setTimeout(resolve, 1000))
  //
  //   expect(service.elapsedTimeInSec()).toEqual(60*60-1)
  // });
  //
  // it('コンテンツリストで0を選択したら"オープニング"を返す', ()=>{
  //   expect(service.selectContent(0)).toEqual("オープニング");
  //   // expect(service.selectContent(8)).toBeTruthy();
  // });
  //
  // it('コーナー名に"ふつおた"を記入したら、"ふつおた"を返す', () =>{
  //   expect(service.editCornerName('ふつおた')).toEqual('ふつおた');
  // });
  //
  // test('経過時間を計算する', () =>{
  //   service.startRadio()
  //   expect(service.elapsedTimeInSec()).toEqual(expect.any(Number))
  // });

  it("なんかいい感じにコーナーの中身をまとめる", () => {
    const okContentData: RadioContent = {
      contentType:1, storyTitle:'餃子の話', talkPoint:'皮が薄い', goal:'美味しい焼き方おしえて', time:5
    };
    const ngContentData: RadioContent = {
      contentType:2, storyTitle:'みかんの話', talkPoint:'皮が厚い', goal:'いよかんだった', time:50
    };
    expect(service.createContentScript()).toEqual(okContentData);
  });
});
