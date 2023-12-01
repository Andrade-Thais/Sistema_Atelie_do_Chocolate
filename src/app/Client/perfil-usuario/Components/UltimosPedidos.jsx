import React, { useEffect, useState } from "react";
import firebase from "../../Config/firebase";

export default function Pedidos(props) {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const userRef = firebase.firestore().collection("users").doc(props.userID);
    const pedidosRef = userRef.collection("pedidos");

    pedidosRef
      .get()
      .then((querySnapshot) => {
        const pedidosData = [];
        querySnapshot.forEach((doc) => {
          const pedido = doc.data();
          pedidosData.push(pedido);
        });
        setPedidos(pedidosData);
      })
      .catch((error) => {
        console.error("Erro ao buscar os pedidos:", error);
      });
  }, [props.userID]);

  const mostrarConteudo = (pedidoId) => {
    const pedidoSelecionado = pedidos.find((pedido) => pedido.id === pedidoId);

    if (pedidoSelecionado) {
      console.log("Conteúdo do pedido:", pedidoSelecionado);
    } else {
      console.log("Pedido não encontrado");
    }
  };

  return (
    <div className="pedido">
      <h2>{props.titulo}</h2>
      <div className="conteudo-pedido" id={`conteudo-pedido-${props.id}`}>
        {pedidos.map((pedido, index) => (
          <div key={index}>
            <p>{pedido.descricao}</p>
            <button onClick={() => mostrarConteudo(pedido.id)}>Ver Mais</button>
          </div>
        ))}
      </div>
    </div>
  );
}
