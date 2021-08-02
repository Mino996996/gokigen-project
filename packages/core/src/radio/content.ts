import { ContentType, RadioContent } from "./applications/radio.service";

export class Content {
  constructor(
  private readonly contentType: ContentType,
  private readonly storyTitle: string,
  private readonly mainPersonality: string,
  private readonly goal: string,
  private readonly time: number,
  private readonly memo: string
) {}


  // getContentScript():RadioContent {
  //   return {
  //     contentType: this.contentType,
  //     talkTheme: this.storyTitle,
  //     mainSpeaker: this.mainPersonality,
  //     goal: this.goal,
  //     time: this.time,
  //     memo: this.memo
  //   };
  // }
}
