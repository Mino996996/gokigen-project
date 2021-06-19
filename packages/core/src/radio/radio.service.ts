import { Injectable } from "@nestjs/common";
import { CreateContentListDto } from "./createContentListDto";
import { ScriptRepository } from "./script/scriptRepository";

// このサービスは台本データのGET/POSTリクエストを受けて
// 画面側にいい感じに整える処理を担う

export type RadioScript = {
  date:string,
  totalTime: number,
  contentList:RadioContent[],
  groupId:number
}

export type RadioContent = {
  id: number;
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
  constructor(private readonly scriptRepository: ScriptRepository) {}
  // コントローラーの動作確認用とアーキテクチャー理解のために作成
  fetchDemo(): { message: string }[] {
    return [
      { message: 'this is demo' },
      { message: 'radioController is done. GJ!' },
    ];
  }

  scriptList() {
    const scripts = this.scriptRepository.scripts();
    return 'under construction';
  }

  // createContentScript(contentType:ContentType, storyTitle:string, mainPersonality:string, goal:string, minute:number, memo:string) {
  //   const content = new Content(contentType, storyTitle, mainPersonality, goal, minute, memo);
  //   return content.getContentScript();
  // }

  // 【データ抽出用】日付とグループに該当するデータの抽出
  createContentList(dto: CreateContentListDto) {
    return 'nodata';
  }
}
