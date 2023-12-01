import React from "react";
import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";

import { Options } from "../Components/Options/Options.jsx";
import { GetBolos } from "../Components/Suboptions/GetBolos.jsx";
import { GetDoces } from "../Components/Suboptions/GetDoces.jsx";
import { GetSalgados } from "../Components/Suboptions/GetSalgados.jsx";
import { GetMiniLanches } from "../Components/Suboptions/GetMiniLanches.jsx";
import { GetBuffet } from "../Components/Suboptions/GetBuffet.jsx";
import { PedidoProvider } from "../StorageContext/PedidoContext.jsx";
import { Quantidade } from "../Components/Quantidade/Quantidade.jsx";
import { EnviarPedido } from "../Components/EnviarPedido/EnviarPedido.jsx";
const config = {
  botName: "Ateliê do Chocolate",
  initialMessages: [
    createChatBotMessage(
      `Olá! Seja bem-vindo(a). Para fazer um novo pedido, digite a opção desejada!`,
      {
        widget: "options",
      }
    ),
    createCustomMessage(),
  ],
  customElements: {
    pedidoContext: (props) => <PedidoProvider {...props} />,
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "suboptionsBolos",
      widgetFunc: (props) => <GetBolos {...props} />,
    },
    {
      widgetName: "suboptionsDoces",
      widgetFunc: (props) => <GetDoces {...props} />,
    },
    {
      widgetName: "suboptionsSalgados",
      widgetFunc: (props) => <GetSalgados {...props} />,
    },
    {
      widgetName: "suboptionsMiniLanches",
      widgetFunc: (props) => <GetMiniLanches {...props} />,
    },
    {
      widgetName: "suboptionsBuffet",
      widgetFunc: (props) => <GetBuffet {...props} />,
    },
    {
      widgetName: "quantidades",
      widgetFunc: (props) => <Quantidade {...props} />,
    },
    {
      widgetName: "confirmarPedido",
      widgetFunc: (props) => <EnviarPedido {...props} />,
    },
  ],
};

export { config };
