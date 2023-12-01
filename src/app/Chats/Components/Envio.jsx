import React from "react";
import Ketlyn from "../assets/Perfil.png";

function Envio({ conteudoPedido }) {
  return (
    <div className="menu_opcoes">
      <div className="intro">
        <img src={Ketlyn} alt="Ketlyn" className="img__perfil" />
        <p className="text">
          Você selecionou os seguintes itens:
          <ul>
            {conteudoPedido.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </p>
      </div>
      <button onClick={handleConfirmarPedido} className="confirmar-button">
        Confirmar Pedido
      </button>
    </div>
  );
}

function handleConfirmarPedido() {
  alert(
    "Pedido confirmado! Ketlyn irá te retornar por Whatsapp em até 2 dias úteis."
  );
}

export default Envio;
