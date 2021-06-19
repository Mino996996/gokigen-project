import { Injectable } from "@nestjs/common";

// このサービスは台本データのGET/POSTリクエストを受けて
// 画面側にいい感じに整える処理を担う

export type RadioScript = {
  date:string,
  totalTime: number,
  contentList:RadioContent[],
  groupId:number
}

export type RadioContent = {
  contentType: ContentType;
  time?:number;
  order?:number;
  bgm?:string;
  talkTheme?:string;
  talkScript?:string;
  mainSpeaker?:number[];
  memo?:string;
  groupId:number;
  date:string;
}

export enum ContentType {
  opening =1,
  freeTalk,
  jingle,
  miniCorner,
  corner,
  music,
  ending
}


@Injectable()
export class RadioService {
  constructor() {
  }

  // コントローラーの動作確認用とアーキテクチャー理解のために作成
  fetchDemo():{message: string}[] {
    return [
      {message: 'this is demo'},
      {message: 'radioController is done. GJ!'}
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
  cleaningContentList(sampleData: any[]):RadioContent[] {
    return sampleData.filter((value) => {
      return (value.contentType && value.date && value.groupId);
    });
  }

  // 【データ抽出用】日付とグループに該当するデータの抽出
  createContentList(sample:RadioContent[], date: string, groupId: number) {
    return "nodata";
  }
}
