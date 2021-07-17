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

export type userData = {
  id: number,
  name: string,
  pass: string,
  status: string
}

export type group = {
  id: number,
  name: string,
  member: number[]
}


@Injectable()
export class RadioService {
  constructor() {
  }

  // コントローラーの動作確認用とアーキテクチャー理解のために作成
  fetchDemo(): { message: string }[] {
    return [
      { message: "this is demo" },
      { message: "radioController is done. GJ!" }
    ];
  }

  fetchScriptList() {
    return "under construction";
  }

  // createContentScript(contentType:ContentType, storyTitle:string, mainPersonality:string, goal:string, minute:number, memo:string) {
  //   const content = new Content(contentType, storyTitle, mainPersonality, goal, minute, memo);
  //   return content.getContentScript();
  // }

  // 【データ洗浄用】必須項目がないオブジェクトを除外する
  cleaningContentList(sampleData: any[]): RadioContent[] {
    return sampleData.filter((value) => {
      return (value.contentType && value.date && value.groupId);
    });
  }

  // 【データ抽出用】日付とグループに該当するデータの抽出
  createContentList(sample: RadioContent[], date: string | null, groupId: number | null): RadioContent[] | string {
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

  /* ログイン状態を確認して、ログインしていたら所属グループのリストを返す */
  checkBelong(userData: userData, sampleGroup:group[]): group[] | string{
    if (userData.status === 'login'){
      return sampleGroup.filter(value => value.member.includes(userData.id))
    } else {
      return 'please login'
    }
  }
}
