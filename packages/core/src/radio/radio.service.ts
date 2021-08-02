import { Injectable } from "@nestjs/common";
import { first } from "rxjs/operators";

// このサービスは台本データのGET/POSTリクエストを受けて
// 画面側にいい感じに整える処理を担う

export type RadioScript = {
  date: string,
  totalTime: number,
  contentList: RadioContent[],
  groupId: number
}

export type RadioContent = {
  contentType: ContentType;
  time?: number;
  order?: number;
  bgm?: string;
  talkTheme?: string;
  talkScript?: string;
  mainSpeaker?: number[];
  memo?: string;
  groupId: number;
  date: string;
}

export enum ContentType {
  opening = 1,
  freeTalk,
  jingle,
  miniCorner,
  corner,
  music,
  ending
}

export type UserData = {
  id: number,
  name: string,
  pass: string,
  status: string
}

export type Group = {
  id: number,
  name: string,
  member: number[]
}


@Injectable()
export class RadioService {
  constructor() {
  }

  /* コントローラーの動作確認用とアーキテクチャー理解のために作成 */
  fetchDemo(): { message: string }[] {
    return [
      { message: "this is demo" },
      { message: "radioController is done. GJ!" }
    ];
  }

  fetchScriptList() {
    return "under construction";
  }

  /* 【データ洗浄用】必須項目がないオブジェクトを除外する */
  cleaningContentList(sampleData: any[]): RadioContent[] {
    return sampleData.filter((value) => {
      return (value.contentType && value.date && value.groupId);
    });
  }

  /* 【データ抽出用】日付とグループに該当するデータの抽出 */
  getContentList(sample: RadioContent[], date: string | null, groupId: number | null): RadioContent[] | string {
    if (date && groupId) {
      return sample.filter(value => value.groupId === groupId).filter(value => value.date === date);
    } else if (date && !groupId) {
      return sample.filter(value => value.date === date);
    } else if (!date && groupId) {
      return sample.filter(value => value.groupId === groupId);
    } else {
      return "nodata";
    }
  }

  /* 所属グループのリストを返す */
  getGroupList(userData: UserData, sampleGroup:Group[]): Group[] | string{
    if (userData.status === 'login'){
      return sampleGroup.filter(value => value.member.includes(userData.id))
    } else {
      return 'please login'
    }
  }

  /* ログイン状態を確認する */
  loginCheck(userDataList: UserData[], userId: number): boolean {
    const user = userDataList.find(value => value.id === userId);
    return !!(user && user.status === 'login');
  }
}
