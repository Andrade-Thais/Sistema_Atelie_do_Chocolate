import React from "react";
import Ketlyn from "../assets/Perfil.png";
import { usePedidoContext } from "../Context/ChatContext";

export default function BoasVindas() {
  const { setSelectedOpcaoId } = usePedidoContext();
  return (
    <>
      <div className="menu_opcoes">
        <div className="intro">
          <img src={Ketlyn} alt="Ketlyn" className="img__perfil" />
          <p className="text">
            Olá, seja bem-vindo(a)! Selecione o que deseja adicionar ao seu
            pedido!
          </p>
        </div>
        <div className="btn__opcoes">
          <button
            className="botao"
            onClick={() => {
              setSelectedOpcaoId(1);
            }}
          >
            Bolos
          </button>
          <button
            className="botao"
            onClick={() => {
              setSelectedOpcaoId(2);
            }}
          >
            Salgados
          </button>
          <button
            className="botao"
            onClick={() => {
              setSelectedOpcaoId(3);
            }}
          >
            Doces
          </button>
          <button
            className="botao"
            onClick={() => {
              setSelectedOpcaoId(4);
            }}
          >
            Mini Lanches
          </button>
          <button
            className="botao"
            onClick={() => {
              setSelectedOpcaoId(5);
            }}
          >
            Serviços de Buffet
          </button>
        </div>
      </div>
    </>
  );
}
