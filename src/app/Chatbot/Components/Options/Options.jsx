import React from "react";
import { usePedidoContext } from "../../StorageContext/PedidoContext";
import "./styles.css";

export const Options = (props) => {
  const { opcoes, setOpcoes, pedido, setPedido } = usePedidoContext();

  const handleOption = (id) => {
    switch (id) {
      case 1:
        props.actionProvider.handleBolos();
        setOpcoes([...opcoes, "Bolos"]);
        setPedido([...opcoes, "Bolos"]);
        break;
      case 2:
        props.actionProvider.handleDoces();
        setOpcoes([...opcoes, "Doces"]);
        setPedido([...opcoes, "Doces"]);
        break;
      case 3:
        props.actionProvider.handleSalgados();
        setOpcoes([...opcoes, "Salgados"]);
        setPedido([...opcoes, "Salgados"]);
        break;
      case 4:
        props.actionProvider.handleMiniLanches();
        setOpcoes([...opcoes, "Mini Lanches"]);
        setPedido([...opcoes, "Mini Lanches"]);
        break;
      case 5:
        props.actionProvider.handleBuffet();
        setOpcoes([...opcoes, "Buffet"]);
        setPedido([...opcoes, "Buffet"]);
        break;
      default:
        break;
    }
    console.log(opcoes);
    console.log(pedido);
  };

  const options = [
    {
      text: "Bolos",
      id: 1,
    },
    {
      text: "Doces",
      id: 2,
    },
    {
      text: "Salgados",
      id: 3,
    },
    {
      text: "Mini Lanches",
      id: 4,
    },
    {
      text: "Serviços de Buffet",
      id: 5,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button
      key={option.id}
      className="option-button"
      onClick={() => handleOption(option.id)}
    >
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};
