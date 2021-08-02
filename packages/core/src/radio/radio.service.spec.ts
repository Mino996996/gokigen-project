import { Test, TestingModule } from "@nestjs/testing";
import { RadioService, RadioContent, ContentType } from "./radio.service";
import { okData1, okData2, okData3, sampleContent, sampleNoErrorData } from "./fixtures/sample-content-data";
import { sampleUser} from "./fixtures/sample-user-data";
import { okGroup, sampleGroup } from "./fixtures/sample-group-data";

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
    const okData = sampleNoErrorData;
    expect(service.cleaningContentList(sampleData)).toEqual(okData);
  });

  it("グループと収録日に該当するコンテンツをデータリストから拾い出す", () => {
    const date = '2021/6/1 13:00';
    const groupId = 1;
    expect(service.getContentList(sampleNoErrorData, date, groupId)).toEqual(okData1);
  });

  it("グループと収録日に該当するコンテンツをデータリストから拾い出す.このとき該当しない条件なら,nodataを返す", () => {
    const date = '2021/6/2 13:00';
    const groupId = 1;
    expect(service.getContentList(sampleNoErrorData, date, groupId)).toEqual("nodata");
  });

  it("グループと収録日に該当するコンテンツをデータリストから拾い出す.このとき日付がnullなら,グループIDのみの該当結果を返す", () => {
    const date = null;
    const groupId = 1;
    expect(service.getContentList(sampleNoErrorData, date, groupId)).toEqual(okData2);
  });

  it("グループと収録日に該当するコンテンツをデータリストから拾い出す.このときグループIDがnullなら,日付のみの該当結果を返す", () => {
    const date = '2021/6/1 13:00';
    const groupId = null;
    expect(service.getContentList(sampleNoErrorData, date, groupId)).toEqual(okData3);
  });

  it("ログイン状態の確認@ログイン状態時はtrueを返す", () => {
    // userData = { id: 1, name: "aka", pass: "akaaka", status: 'login' }
    expect(service.loginCheck(sampleUser, 1)).toBeTruthy();
  });

  it("ログイン状態の確認@ログアウト状態でfalse,またはIDがない場合もfalseを返す", () => {
    // userData = { id: 5, name: "jake", pass: "jacky", status: 'logout'}
    expect(service.loginCheck(sampleUser, 5)).toBeFalsy();
    expect(service.loginCheck(sampleUser, 1000)).toBeFalsy();
  });

  it("所属するグループIDをリストアップする", () => {
    const userData = { id: 1, name: "aka", pass: "akaaka", status: 'login' }
    expect(service.getGroupList(userData.id, sampleGroup)).toEqual(okGroup);
  });

  it("所属するグループIDをリストアップする IDが存在しないときは空配列を返す", () => {
    expect(service.getGroupList(1000, sampleGroup)).toEqual([]);
  });

});
