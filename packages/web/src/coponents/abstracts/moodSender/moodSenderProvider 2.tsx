import { FunctionComponent } from "react";
import { MoodSenderContext } from "./moodSenderContext";
import { mockSendToServer } from "../../../api/mock/sendToServer";
import { sendMoodToServer } from "../../../api/http/sendToserver";

const MoodSenderProvider: FunctionComponent = ({ children }) => (
  <MoodSenderContext.Provider value={{
    moodSender: process.env.NODE_ENV !== "production" ? mockSendToServer : sendMoodToServer
  }}>
    {children}
  </MoodSenderContext.Provider>
);

MoodSenderProvider.displayName = "MoodSenderProvider";

export default MoodSenderProvider;
