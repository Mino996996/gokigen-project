import { Test, TestingModule } from "@nestjs/testing";
import { RadioService, RadioContent, ContentType } from "./radio.service";
import { sampleContent, sampleNoErrorContent } from './fixtures/sample-content-data';
import { sampleUser} from "./fixtures/sample-user-data";
import { sampleGroup} from "./fixtures/sample-group-data";

describe('RadioService', () => {
  let service: RadioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RadioService],
    }).compile();

    service = module.get<RadioService>(RadioService);
  });

  // 型定義でいい感じにできないか？
  it("データにある必要項目を含まないコンテンツリストは除外する", () => {
    const sampleData: any[] = sampleContent;
    const okData = sampleNoErrorContent;
    expect(service.cleaningContentList(sampleData)).toEqual(okData);
  });

  it("グループと収録日に該当するコンテンツをデータリストから拾い出す", () => {
    const okData = [
      {
        id:2, date:'2021/6/1 13:00', contentType:1, order:1, time:5, bgm:'エーデルワイス',
        talkTheme:'みかんの話', talkScript:'皮が厚いとおもったら伊予柑だった', mainSpeaker:[],
        memo:'テンション高めに', groupId:1
      },
      {
        id:4, date:'2021/6/1 13:00', contentType:4, order:3, groupId:1
      },
      { //エラー用:contentTypeなし
        id:5, date:'2021/6/1 13:00', order:4, groupId:1
      },
      {
        id:6, date:'2021/6/1 13:00', contentType:6, order:0, groupId:1
      },
      { //エラー用:dateなし
        id:8, contentType:6, order:0, groupId:1
      },
    ];
    const ngData = [
      {
      id:2, date:'2021/6/1 13:00', contentType:1, order:1, time:5, bgm:'エーデルワイス',
      talkTheme:'みかんの話', talkScript:'皮が厚いとおもったら伊予柑だった', mainSpeaker:[],
      memo:'テンション高めに', groupId:1
    },
      {
        id:3, date:'2021/7/1 13:00', contentType:3, order:4, time:40,
        talkTheme:'ふつおた', mainSpeaker:[3,4], groupId:2
      },
      {
        id:4, date:'2021/6/1 13:00', contentType:4, order:3, groupId:1
      },
      { //エラー用:contentTypeなし
        id:5, date:'2021/6/1 13:00', order:4, groupId:1
      },
      {
        id:6, date:'2021/6/1 13:00', contentType:6, order:0, groupId:1
      },
      { //エラー用:groupIdなし
        id:7, date:'2021/6/1 13:00', contentType:6, order:0
      },
      { //エラー用:dateなし
        id:8, contentType:6, order:0, groupId:1
      },
      {
        id:9, date:'2021/6/1 13:00', contentType:6, order:0, groupId:2
      },];
    const date = '2021/6/1 13:00';
    const groupId = 1;
    const sample = service.cleaningContentList(sampleContent);
    expect(service.createContentList(sample, date, groupId)).toEqual("nodata");

  });

  // it("コンテンツの収録時間を算出する", () => {
  //
  //   expect().toBe();
  // });

  // it("表示用に各コンテンツデータをいい感じ整える", () => {
  //   const okContentData: RadioContent = {
  //
  //   };
  //   const ngContentData: RadioContent = {
  //
  //   };
  //   expect().toBe();
  // });

  // it("なんかいい感じに指定グループの台本を作成して返す", () => {
  //   const okData: RadioContent = {
  //
  //   };
  //   const ngData: RadioContent = {
  //
  //   };
  //   expect(service.createContentScript(1, '餃子の話',
  //     'aka', '美味しい焼き方おしえて',5,
  //     'テンション高めに')).toEqual(okData);
  // });
});
