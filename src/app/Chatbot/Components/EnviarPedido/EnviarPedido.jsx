import React from "react";
import { usePedidoContext } from "../../StorageContext/PedidoContext";
import { useState } from "react";
import "firebase/firestore";
import firebase from "../../../Config/firebase";

export const EnviarPedido = () => {
  const {
    opcao,
    subopcao,
    quantidades,
    pedido,
    setPedido,
    mapearOpcoesComSubopcoes,
  } = usePedidoContext();
  const [pedidoEnviado, setPedidoEnviado] = useState(false);

  const handleRenderPedido = () => {
    return (
      <div className="pedido">
        {pedido.map((opcaoComSubopcoes, index) => (
          <div key={index}>
            <h3>{opcaoComSubopcoes.opcao}</h3>
            <ul>
              {opcaoComSubopcoes.subopcoes.map((subopcao, subIndex) => (
                <li key={subIndex}>
                  {subopcao.subopcao} - Quantidade: {subopcao.quantidade}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const handleSendPedido = async () => {
    try {
      const user = firebase.auth().currentUser;
      if (!user) {
        console.log("Usuário não encontrado!");
      }
      const usuarioRef = firebase
        .firestore()
        .collection("usuarios")
        .doc(user.uid);
      const newPedidoRef = usuarioRef.collection("pedidos");
      await newPedidoRef.add({
        opcoes: opcao,
        subopcoes: subopcao,
        quantidade: quantidades,
      });
      setPedidoEnviado(true);
    } catch (e) {
      console.error("Algo deu errado");
    }
  };

  const handleContinueEscolha = () => {};

  return (
    <div className="options-container">
      {pedidoEnviado ? (
        <p>Pedido enviado com sucesso!</p>
      ) : (
        <>
          {handleRenderPedido()}
          <button onClick={handleSendPedido}>Enviar Pedido</button>
          <button onClick={handleContinueEscolha}>
            Continuar escolhendo itens
          </button>
        </>
      )}
    </div>
  );
};
