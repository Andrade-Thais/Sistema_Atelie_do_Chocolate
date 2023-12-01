// ChatContext.jsx

import React, { createContext, useContext, useState } from "react";
import catalogo from "../assets/catalogo";

const PedidoContext = createContext({});

export const ChatContext = ({ children }) => {
  const [catalogoDisponivel, setCatalogoDisponivel] = useState(catalogo);
  const [selectedOpcaoId, setSelectedOpcaoId] = useState(0);
  const [selectedSubopcoes, setSelectedSubopcoes] = useState([]);
  const [continuarPedido, setContinuarPedido] = useState(false);

  const opcoesPrimarias = catalogoDisponivel.catalogo.filter(
    (opcao) => !opcao.opcaoRelacionada
  );

  const subopcoes = catalogoDisponivel.catalogo.find(
    (subopcao) => subopcao.opcaoRelacionada === selectedOpcaoId
  );

  const quantidade = catalogoDisponivel.catalogo.map(
    (subopcoesSelecionadas) =>
      subopcoesSelecionadas.quantidade === selectedOpcaoId
  );

  const values = {
    opcoesPrimarias,
    subopcoes: Array.isArray(subopcoes) ? subopcoes : [subopcoes],
    quantidade,
    selectedOpcaoId,
    setSelectedOpcaoId,
    selectedSubopcoes,
    setSelectedSubopcoes,
    continuarPedido,
    setContinuarPedido,
    catalogoDisponivel,
    setCatalogoDisponivel,
  };

  return (
    <PedidoContext.Provider value={values}>{children}</PedidoContext.Provider>
  );
};

export const usePedidoContext = () => {
  const context = useContext(PedidoContext);
  if (!context) {
    throw new Error("usePedidoContext must be used within a PedidoProvider");
  }
  return context;
};
