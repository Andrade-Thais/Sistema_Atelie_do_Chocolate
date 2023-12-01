import React, { useState } from "react";
import { ActionProvider } from "./Settings/ActionProvider";
import { MessageParser } from "./Settings/MessageParser";
import { config as chatbotConfig } from "./Settings/config";
import Chat from "./Chat";
import { createChatBotMessage } from "react-chatbot-kit";
import {
  PedidoProvider,
  usePedidoContext,
} from "./StorageContext/PedidoContext";

const ChatContainer = () => {
  const [chatbotState, setChatbotState] = useState({
    messages: [],
  });

  const addMessageToState = (message) => {
    setChatbotState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const actionProvider = new ActionProvider(
    createChatBotMessage,
    setChatbotState
  );

  const {
    pedido,
    setPedido,
    opcoes,
    setOpcoes,
    subopcoes,
    setSubopcoes,
    addOpcoes,
    addSubopcoes,
  } = usePedidoContext();

  const messageParser = new MessageParser(actionProvider, {
    setPedido,
  });

  return (
    <PedidoProvider>
      <Chat
        actionProvider={actionProvider}
        config={chatbotConfig}
        messageParser={messageParser}
      />
    </PedidoProvider>
  );
};

export default ChatContainer;
