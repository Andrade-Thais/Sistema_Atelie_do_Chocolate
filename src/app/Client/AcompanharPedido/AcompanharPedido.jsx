import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../Components/Navbar/navbar";
import { Card } from "react-bootstrap";
import firebase from "../../Config/firebase";
import Modals from "../../Components/Modals/Modals";
import "./styles.css";
import { AuthContext } from "../../Auth/Context/auth";
import SpinningCircles from "react-loading-icons/dist/esm/components/spinning-circles";

export default function AcompanharPedido() {
  const [pedidosEmAberto, setPedidosEmAberto] = useState([]);
  const [pedidosEmAndamento, setPedidosEmAndamento] = useState([]);
  const [pedidosConcluidos, setPedidosConcluidos] = useState([]);
  const [pedidosCancelados, setPedidosCancelados] = useState([]);
  const [lastPedidoNumber, setLastPedidoNumber] = useState(0);
  const { userID } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pedidoStatus, setPedidoStatus] = useState("Em Aberto");
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null);

  const handleShowModal = (pedido) => {
    setPedidoSelecionado(pedido);
  };

  const handleHideModal = () => {
    setPedidoSelecionado(null);
  };

  const getPedidoStatus = (status) => {
    if (status.emAberto) {
      return "Em aberto";
    } else if (status.emAndamento) {
      return "Em andamento";
    } else if (status.concluido) {
      return "Concluído";
    } else if (status.cancelado) {
      return "Cancelado";
    } else {
      return null;
    }
  };
  const filterPedidos = (pedidos) => {
    return pedidos.filter((pedido) => pedido.numero !== 0);
  };

  useEffect(() => {
    async function getPedidos() {
      try {
        const db = firebase.firestore();
        const pedidosEmAbertoData = [];
        const pedidosEmAndamentoData = [];
        const pedidosConcluidosData = [];
        const pedidosCanceladosData = [];

        const usuarioRef = db.collection("usuarios").doc(userID);
        const pedidosRef = usuarioRef.collection("pedidos");

        const pedidosSnapshot = await pedidosRef.get();

        pedidosSnapshot.forEach((doc) => {
          const dadosPedido = doc.data();
          const status = getPedidoStatus(dadosPedido);

          if (status === "Em aberto") {
            pedidosEmAbertoData.push(dadosPedido);
          } else if (status === "Em andamento") {
            pedidosEmAndamentoData.push(dadosPedido);
          } else if (status === "Concluído") {
            pedidosConcluidosData.push(dadosPedido);
          } else if (status === "Cancelado") {
            pedidosCanceladosData.push(dadosPedido);
          }
        });

        setPedidosEmAberto(pedidosEmAbertoData);
        setPedidosEmAndamento(pedidosEmAndamentoData);
        setPedidosConcluidos(pedidosConcluidosData);
        setPedidosCancelados(pedidosCanceladosData);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao obter pedidos:", error);
      }
    }

    async function fetchLastPedidoNumber() {
      try {
        const db = firebase.firestore();
        const lastNumberRef = db.collection("metadata").doc("numeroDePedidos");
        const doc = await lastNumberRef.get();
        if (doc.exists) {
          setLastPedidoNumber(doc.data().numero);
        }
      } catch (error) {
        console.error("Erro ao obter o último número de pedido:", error);
      }
    }

    fetchLastPedidoNumber();
    getPedidos();
  }, [userID]);

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", margin: "20px" }}>
        Acompanhamento de Pedidos
      </h1>
      <div className="card__container">
        {loading ? (
          <div className="loading">
            <SpinningCircles fill="#4C2B17" speed="0.75" />
          </div>
        ) : (
          <>
            <Card className="column">
              <Card.Header className="text heading">
                Pedidos em Aberto
              </Card.Header>
              <Card.Body>
                {filterPedidos(pedidosEmAberto).map((pedido, index) => (
                  <Card className="column__item" key={index}>
                    <Card.Header>
                      <button
                        type="button"
                        className="text column__item__text"
                        onClick={() => handleShowModal(pedido)}
                      >
                        Pedido {pedido.numero}
                      </button>
                    </Card.Header>
                  </Card>
                ))}
              </Card.Body>
            </Card>
            <Card className="column">
              <Card.Header className="text heading">
                Pedidos em Andamento
              </Card.Header>
              <Card.Body>
                {filterPedidos(pedidosEmAndamento).map((pedido, index) => (
                  <Card className="column__item" key={index}>
                    <Card.Header>
                      <button
                        type="button"
                        className="text column__item__text"
                        onClick={() => handleShowModal(pedido)}
                      >
                        Pedido {pedido.numero}
                      </button>
                    </Card.Header>
                  </Card>
                ))}
              </Card.Body>
            </Card>
            <Card className="column">
              <Card.Header className="text heading ">
                Pedidos Concluídos
              </Card.Header>
              <Card.Body>
                {filterPedidos(pedidosConcluidos).map((pedido, index) => (
                  <Card className="column__item" key={index}>
                    <Card.Header>
                      <button
                        type="button"
                        className="text column__item__text"
                        onClick={() => handleShowModal(pedido)}
                      >
                        Pedido {pedido.numero}
                      </button>
                    </Card.Header>
                  </Card>
                ))}
              </Card.Body>
            </Card>
            <Card className="column">
              <Card.Header className="text heading ">
                Pedidos Cancelados
              </Card.Header>
              <Card.Body>
                {pedidosCancelados.map((pedido, index) => (
                  <Card className="column__item" key={index}>
                    <Card.Header>
                      <button
                        type="button"
                        className="text column__item__text"
                        onClick={() => handleShowModal(pedido)}
                      >
                        Pedido {pedido.numero}
                      </button>
                    </Card.Header>
                  </Card>
                ))}
              </Card.Body>
            </Card>
          </>
        )}
      </div>
      {pedidoSelecionado ? (
        <Modals
          numero={pedidoSelecionado.numero}
          pedidoDetails={pedidoSelecionado}
          cliente={pedidoSelecionado?.cliente}
          avaliacao={pedidoSelecionado?.avaliacao}
          itens={pedidoSelecionado?.itensQuantidades}
          dataPedido={pedidoSelecionado?.dataPedido}
          idPedido={pedidoSelecionado.idPedido}
          status={pedidoStatus}
          onHide={handleHideModal}
        />
      ) : null}
    </>
  );
}
