import React, { useState } from "react";
import { usePedidoContext } from "../../StorageContext/PedidoContext";
import "./styles.css";

export const SubOptions = (props) => {
  const [selectedSuboption, setSelectedSuboption] = useState(null);
  const {
    opcoes,
    subopcoes,
    setSubopcoes,
    pedido,
    setPedido,
  } = usePedidoContext();

  const handleSuboption = (id) => {
    setSelectedSuboption(id);
    switch (id) {
      case 1:
        props.actionProvider.handleTiposBolos();
        break;
      case 2:
        props.actionProvider.handleTiposDoces();
        break;
      case 3:
        props.actionProvider.handleTiposSalgados();
        break;
      case 4:
        props.actionProvider.handleTipoMiniLanches();
        break;
      case 5:
        props.actionProvider.handleTipoBuffet();
        break;
      default:
        break;
    }
  };

  const suboptions = [
    {
      texts: ["Bolo Personalizado", "Bolo Comum"],
      handler: props.actionProvider.handleTiposBolos,
      id: 1,
    },
    {
      texts: [
        "Brigadeiro",
        "Beijinho",
        "Brigadeiro de Paçoca",
        "Bicho de Pé",
        "Brigadeiro de Nutella",
        "Brigadeiro de Ninho",
        "Brigadeiro de Churros",
        "Cascata de Chocolate",
      ],
      handler: props.actionProvider.handleTiposDoces,
      id: 2,
    },
    {
      texts: [
        "Coxinha",
        "Bolinha de Queijo",
        "Bolinha de Carne",
        "Esfiha de Carne",
        "Esfiha de Frango",
        "Esfiha de Calabresa",
        "Quibe",
        "Crepe Suíço",
      ],
      handler: props.actionProvider.handleTiposSalgados,
      id: 3,
    },
    {
      texts: ["Mini Hambúrguer", "Mini Hotdog"],
      handler: props.actionProvider.handleTiposMiniLanches,
      id: 4,
    },
    {
      text: "Serviços de Buffet",
      handler: props.actionProvider.handleTiposBuffet,
      id: 5,
    },
  ];

  const buttonsMarkup = suboptions.map((suboption) => (
    <div key={suboption.id}>
      {suboption.texts &&
        suboption.texts.map((text, index) => (
          <button
            key={index}
            className={`option-button ${
              selectedSuboption === index ? "selected" : ""
            }`}
            onClick={handleSuboption(index)}
          >
            {text}
          </button>
        ))}
    </div>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};
