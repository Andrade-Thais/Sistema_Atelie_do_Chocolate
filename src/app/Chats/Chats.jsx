import React, { useState } from "react";
import { Menu } from "../../site/Components/menu";
import "./styles.css";
import { HandleOpcao, HandleOpcoes, ShowOpcoes } from "./Utils/UtilFunctions";

import BoasVindas from "./Components/BoasVindas";
import SelecaoOpcoes from "./Components/SelecaoOpcoes";
import Envio from "./Components/Envio";
import SelecaoQuantidade from "./Components/SubcomponenteQuantidade";

export default function Chats() {
  const [conteudoPedido, setConteudoPedido] = useState([]);
  const [mostrarProximasOpcoes, setMostrarProximasOpcoes] = useState(false);
  const [opcoesDesejadas, setOpcoesDesejadas] = useState([]);
  const [ultimaOpcaoDesejada, setUltimaOpcaoDesejada] = useState("");
  const [quantidades, setQuantidades] = useState([]);
  const [quantidadeSelecionada, setQuantidadeSelecionada] = useState("");

  function handleSelecionarCategoria(categoria) {
    setUltimaOpcaoDesejada(categoria);
    setMostrarProximasOpcoes(true);
  }

  // Função para selecionar a quantidade
  function handleSelecionarQuantidade(quantidade) {
    setQuantidadeSelecionada(quantidade);
  }

  function handleVoltar() {
    setOpcoesDesejadas([]);

    if (ultimaOpcaoDesejada !== "") {
      const novoConteudoPedido = conteudoPedido.filter(
        (item) => item !== ultimaOpcaoDesejada
      );
      setConteudoPedido(novoConteudoPedido);
    }
    setMostrarProximasOpcoes(false);
  }

  return (
    <>
      <Menu />
      <h1 className="title">Novo pedido</h1>
      <div className="container">
        {ultimaOpcaoDesejada === "" && !mostrarProximasOpcoes && (
          <BoasVindas handleOpcao={handleSelecionarCategoria} />
        )}
        {ultimaOpcaoDesejada !== "" && mostrarProximasOpcoes && (
          <SelecaoOpcoes
            opcaoDesejada={ultimaOpcaoDesejada}
            handleOpcao={HandleOpcao}
          />
        )}
        {ultimaOpcaoDesejada !== "" && !mostrarProximasOpcoes && (
          <SelecaoQuantidade
            quantidades={quantidades}
            handleSelecionarQuantidade={handleSelecionarQuantidade}
            quantidadeSelecionada={quantidadeSelecionada}
          />
        )}
        {ultimaOpcaoDesejada !== "" && mostrarProximasOpcoes && quantidades && (
          <Envio conteudoPedido={conteudoPedido} />
        )}
      </div>
    </>
  );
}
