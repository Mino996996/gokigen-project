import { Test, TestingModule } from '@nestjs/testing';
import { RadioContent, RadioService } from './radio.service';
import { sampleContent } from '../fixtures/sample-content-data';
import { CreateContentListDto } from "./createContentListDto";

describe('RadioService', () => {
  let service: RadioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RadioService],
    }).compile();

    service = module.get<RadioService>(RadioService);
  });

  it('xxxしているとき、グループと収録日に該当するコンテンツをデータリストから拾い出す', () => {
    expect(
      service.createContentList(
        new CreateContentListDto(
          (sampleContent as any) as RadioContent[],
          '2021/6/1 13:00',
          1,
        ),
      ),
    ).toEqual('nodata');
  });

  xit('xxxしているとき、グループと収録日に該当するコンテンツをデータリストから拾い出さない', () => {
    // todo: テスト書く
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
