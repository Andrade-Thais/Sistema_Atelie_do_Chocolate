import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase.firestore();

function Produtos() {
  const [pedidos, setPedidos] = useState([]);
  const [observacao, setObservacao] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchPedidos = async () => {
      const user = firebase.auth().currentUser;

      if (user) {
        setUserId(user.uid);

        const usuariosRef = db.collection("usuarios");
        const userRef = usuariosRef.doc(user.uid);
        const pedidosRef = userRef.collection("pedidos");

        try {
          const querySnapshot = await pedidosRef.get();
          const pedidosData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setPedidos(pedidosData);
        } catch (error) {
          console.error("Erro ao recuperar pedidos: ", error);
        }
      }
    };

    fetchPedidos();
  }, []);

  const handleObservacaoChange = (novaObservacao) => {
    setObservacao(novaObservacao);
  };

  return (
    <section id="servicos">
      <div className="container">
        <div className="row">
          {pedidos.map((pedido) => (
            <div className="col-sm-6" key={pedido.id}>
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-header">ID do Pedido: {pedido.id}</div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    Itens do Pedido: {pedido.itens}
                  </li>
                  <li class="list-group-item">
                    Data do Pedido:{" "}
                    {pedido.dataPedido.toDate().toLocaleString()}
                  </li>
                  <li class="list-group-item">
                    Status do Pedido: {pedido.status}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Produtos;
