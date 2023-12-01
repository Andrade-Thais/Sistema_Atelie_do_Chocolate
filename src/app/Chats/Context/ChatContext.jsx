import React, { useState, useEffect, createContext, useContext } from "react";

const PedidoContext = createContext({});

export const PedidoProvider = ({ children }) => {
  const [opcoes, setOpcoes] = useState([]);
  const [subopcoes, setSubopcoes] = useState([]);
  const [quantidades, setQuantidades] = useState({});
  const [pedido, setPedido] = useState([]);

  const optionSelected = () => {
    return opcoes[opcoes.length - 1];
  };

  const values = {
    pedido,
    setPedido,
    opcoes,
    setOpcoes,
    subopcoes,
    setSubopcoes,
    optionSelected,
    quantidades,
    setQuantidades,
  };

  return (
    <PedidoContext.Provider value={values}>{children}</PedidoContext.Provider>
  );
};

export const usePedidoContext = () => {
  const context = useContext(PedidoContext);
  if (!context) {
    throw new Error(
      "usePedidoContext deve ser usado dentro de um PedidoProvider"
    );
  }
  return context;
};
