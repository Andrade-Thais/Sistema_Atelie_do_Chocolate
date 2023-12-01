import React, { useState } from "react";
import Ketlyn from "../assets/Perfil.png";
import { HandleOpcao } from "../Utils/UtilFunctions";

function BoasVindas() {
  const [ultimaOpcaoDesejada, setUltimaOpcaoDesejada] = useState(null);
  const [opcoesDesejadas, setOpcoesDesejadas] = useState([]);
  const [mostrarProximasOpcoes, setMostrarProximasOpcoes] = useState(false);
  const [conteudoPedido, setConteudoPedido] = useState([]);

  const handleOpcao = (opcaoDesejada) => {
    HandleOpcao(
      opcaoDesejada,
      setUltimaOpcaoDesejada,
      opcoesDesejadas,
      setOpcoesDesejadas,
      setMostrarProximasOpcoes,
      conteudoPedido,
      setConteudoPedido
    );
  };

  return (
    <div className="menu_opcoes">
      <div className="intro">
        <img src={Ketlyn} alt="Ketlyn" className="img__perfil" />
        <p className="text">
          Olá, seja bem-vindo(a)! Selecione o que deseja adicionar ao seu
          pedido!
        </p>
      </div>
      <div className="btn__opcoes">
        <button className="opcao" onClick={() => HandleOpcao("Bolos")}>
          Bolos
        </button>
        <button className="opcao" onClick={() => HandleOpcao("Doces")}>
          Doces
        </button>
        <button className="opcao" onClick={() => HandleOpcao("Salgados")}>
          Salgados
        </button>
        <button className="opcao" onClick={() => HandleOpcao("Mini Lanches")}>
          Mini Lanches
        </button>
        <button
          className="opcao"
          onClick={() => HandleOpcao("Serviços de Buffet")}
        >
          Serviços de Buffet
        </button>
      </div>
    </div>
  );
}

export default BoasVindas;
