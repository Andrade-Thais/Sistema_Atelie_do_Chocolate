import React from "react";
import { ChatContext } from "./Context/ChatContext";
import Chatbot from "./Chatbot";

export default function ChatContainer() {
  return (
    <ChatContext>
      <Chatbot />
    </ChatContext>
  );
}
