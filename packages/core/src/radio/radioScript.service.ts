import { Injectable } from '@nestjs/common';

export type Outlines = {
  contentType: ContentType;
  cornerName:string;
  talkOutline:string;
  mainGive:string;
  time:number;
}

export enum ContentType {
  opening = 'オープニング',
  freeTalk = 'フリートーク',
  jingle =　'ジングル',
  miniCorner = 'ミニコーナー',
  corner ='コーナー',
  music = '曲',
  ending = 'エンディング'
}

@Injectable()
export class RadioScriptService {
  constructor() {
  }

  startRadio() {

  }

  elapsedTimeInSec(): number {
    return 0;
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
}
