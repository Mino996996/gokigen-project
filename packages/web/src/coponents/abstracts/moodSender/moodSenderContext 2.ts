import { createContext } from "react";
import { MoodSelectorSig } from "../../../api/serviceApi";

const defaultValue = {
  moodSender: () => {
    throw new Error();
  }
}

export const MoodSenderContext = createContext<{moodSender: MoodSelectorSig}>(defaultValue)
