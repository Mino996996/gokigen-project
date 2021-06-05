import { useContext } from "react";
import { MoodSenderContext } from "./moodSenderContext";

export function useMoodSelector() {
  return useContext(MoodSenderContext);
}