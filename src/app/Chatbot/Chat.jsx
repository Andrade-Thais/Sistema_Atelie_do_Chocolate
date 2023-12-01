import React, { useState } from "react";
import { connect } from "react-redux";
import { config } from "./Settings/config";
import { MessageParser } from "./Settings/MessageParser";
import { ActionProvider } from "./Settings/ActionProvider";
import Navbar from "../Components/Navbar/navbar";
import { Chatbot } from "react-chatbot-kit";
import { Provider } from "react-redux";
import "react-chatbot-kit/build/main.css";
import store from "./StorageContext/store";
import "./styles.css";

const Chat = () => {
  const [opcoes, setOpcoes] = useState([]);
  const [subopcoes, setSubopcoes] = useState([]);
  const [quantidades, setQuantidades] = useState([]);

  const handleAddOpcao = (opcao) => {
    setOpcoes((prevOpcoes) => [...prevOpcoes, opcao]);
  };

  const handleAddSubopcao = (subopcao) => {
    setSubopcoes((prevSubopcoes) => [...prevSubopcoes, subopcao]);
  };

  return (
    <>
      <Navbar />
      <Provider store={store}>
        <Chatbot
          headerText="Chatbot - Ateliê do Chocolate"
          placeholderText="Escreva sua mensagem aqui..."
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </Provider>
    </>
  );
};

export default connect(null)(Chat);
