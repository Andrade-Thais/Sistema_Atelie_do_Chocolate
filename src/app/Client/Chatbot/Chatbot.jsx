import React, { useState } from "react";
import { usePedidoContext } from "./Context/ChatContext";
import Navbar from "../../Components/Navbar/navbar";
import BoasVindas from "./Components/BoasVindas";
import Itens from "./Components/Itens";
import Quantidades from "./Components/Quantidades";

import "./styles.css";
export default function Chatbot() {
  const {
    opcoesPrimarias,
    subopcoes,
    quantidades,
    selectedSubopcoes,
    continuarPedido,
  } = usePedidoContext();

  return (
    <>
      <Navbar />
      <h1 className="title">Novo Pedido</h1>
      <div className="container">
        {opcoesPrimarias && <BoasVindas />}
        {subopcoes && <Itens />}
        {continuarPedido && selectedSubopcoes.length > 0 && <Quantidades />}
      </div>
    </>
  );
}
