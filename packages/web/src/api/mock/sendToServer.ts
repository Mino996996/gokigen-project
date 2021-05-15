import {MoodLevel} from "../serviceApi";

export function mockSendToServer(_: MoodLevel): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}