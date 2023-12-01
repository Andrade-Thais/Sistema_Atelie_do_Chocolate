import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import Navbar from "../../Components/Navbar/navbar";
import SweetAlert from "react-bootstrap-sweetalert";
import { useParams, useHistory } from "react-router-dom";
import "../PedidoForm/PedidoForm.css";
function Avaliacoes() {
  const { id } = useParams();
  const history = useHistory();
  const [userId, setUserId] = useState(null);
  const [pedidos, setPedidos] = useState([]);
  const [avaliacao, setAvaliacao] = useState("");
  const [avaliacaoSelecionada, setAvaliacaoSelecionada] = useState("");
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const fetchPedidos = async () => {
      const db = firebase.firestore();

      const user = firebase.auth().currentUser;

      if (user) {
        setUserId(user.uid);

        const usuariosRef = db.collection("usuarios");
        const userRef = usuariosRef.doc(user.uid);
        const pedidosRef = userRef.collection("pedidos");

        pedidosRef
          .get()
          .then((querySnapshot) => {
            const pedidosData = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));

            // Filtre apenas os pedidos sem avaliação
            const pedidosSemAvaliacao = pedidosData.filter(
              (pedido) => !pedido.avaliacao
            );

            setPedidos(pedidosSemAvaliacao);
          })
          .catch((error) => {
            console.error("Erro ao recuperar pedidos: ", error);
          });
      }
    };

    fetchPedidos();
  }, []);

  const handleAvaliacaoChange = (event) => {
    const pedidoId = event.target.value;
    setAvaliacaoSelecionada(pedidoId);

    const pedido = pedidos.find((pedido) => pedido.id === pedidoId);
    setPedidoSelecionado(pedido);
  };

  const showSuccessAlert = () => {
    setShowAlert(true);
  };

  const hideSuccessAlert = () => {
    setShowAlert(false);
    history.push("/");
  };

  const atualizarPedido = async () => {
    if (pedidoSelecionado) {
      const db = firebase.firestore();
      const { id } = pedidoSelecionado;

      console.log("Valor da avaliacao:", avaliacao);

      db.collection("usuarios")
        .doc(userId)
        .collection("pedidos")
        .doc(id)
        .update({ avaliacao })
        .then(() => {
          console.log("Pedido atualizado com sucesso!");
          showSuccessAlert();
        })
        .catch((error) => {
          console.error("Erro ao atualizar pedido: ", error);
        });
    }
  };

  const pedidosFiltrados = pedidos.filter((pedido) => pedido.numero !== 0);

  return (
    <>
      <Navbar />
      <div className="container-formulario">
        <div className="Row">
          <h1 className="text-center">Avalie Seus Pedidos</h1>
          <p className="text-center">Sua opinião é essencial para nós!</p>
        </div>
        <div className="Row">
          {pedidosFiltrados.length > 0 ? (
            <div className="col-sm-3 m mx-auto p-2">
              <select
                className="form-select"
                aria-label="Default select example"
                value={avaliacaoSelecionada}
                onChange={handleAvaliacaoChange}
              >
                <option value="">Escolha um pedido</option>
                {pedidos.map((pedido) => (
                  <option key={pedido.id} value={pedido.id}>
                    {pedido.numero}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="col-sm-12 text-center">
              <p>Não há avaliações pendentes no momento.</p>
              <p>Que tal fazer uma nova compra?</p>
              <button className="submit">
                <a href="/app/novo-pedido" className="text">
                  Ir para a página de compras
                </a>
              </button>
            </div>
          )}
        </div>
        {pedidoSelecionado && (
          <div className="row">
            <div className="col-sm-6 m mx-auto p-2">
              <div className="mb-3">
                <h2>Detalhes do Pedido</h2>
                <label htmlFor="avaliacao" className="form-label">
                  Descrição:
                  <br />
                  {pedidoSelecionado.itensQuantidades.map((key, item) => (
                    <p key={key}>{key}</p>
                  ))}
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="avaliacao" className="form-label">
                  Avaliação:
                </label>
                <textarea
                  onChange={(e) => setAvaliacao(e.target.value)}
                  value={avaliacao}
                  className="form-control textarea"
                  id="avaliacao"
                  rows="4"
                />
                <button
                  onClick={atualizarPedido}
                  className="btn btn-primary submit"
                >
                  Enviar Avaliação
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SweetAlert para sucesso */}
        {showAlert && (
          <SweetAlert success title="Sucesso!" onConfirm={hideSuccessAlert}>
            Avaliação enviada com sucesso! Agradecemos muito por sua mensagem.
            Sua opinião é extremamente valiosa para nós, e estamos contentes por
            ter compartilhado seus pensamentos conosco.
          </SweetAlert>
        )}
      </div>
    </>
  );
}

export default Avaliacoes;
