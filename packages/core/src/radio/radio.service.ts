import { Injectable } from "@nestjs/common";
import { Content } from "./content";

// このサービスは台本データのGET/POSTリクエストを受けて
// 画面側にいい感じに整える処理を担う

export type RadioContent = {
  contentType: ContentType;
  storyTitle:string;
  mainPersonality:string;
  goal:string;
  time:number;
  memo?:string;
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

  fetchDemo():{message: string}[] {
    return [
      {message: 'this is demo'},
      {message: 'radioController is done. GJ!'}
    ];
  }

  startRadio() {

  }

  elapsedTimeInSec(): number {
    return 3599;
  }

  selectContent(num:number) {
    switch (num){
      case 0:
        return ContentType.opening;
      case 1:
        return ContentType.freeTalk;
      case 2:
        return ContentType.jingle;
      case 3:
        return ContentType.miniCorner;
      case 4:
        return ContentType.corner;
      case 5:
        return ContentType.music;
      case 6:
        return ContentType.ending;
    }
  }

  editCornerName(name: string) {
    return undefined;
  }


  fetchScriptList() {
    return "under construction";
  }

  createContentScript(contentType:ContentType, storyTitle:string, mainPersonality:string, goal:string, minute:number, memo:string) {
    const content = new Content(contentType, storyTitle, mainPersonality, goal, minute, memo);
    return content.getContentScript();
  }
}
