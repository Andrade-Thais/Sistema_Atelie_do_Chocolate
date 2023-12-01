import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/navbar";
import { Card } from "react-bootstrap";
import ModalsAdmin from "../../Components/Modals/ModalsAdmin";
import firebase from "../../Config/firebase";
import { SpinningCircles } from "react-loading-icons";
import "./styles.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function GerenciarPedidos() {
  const [pedidosEmAberto, setPedidosEmAberto] = useState([]);
  const [pedidosEmAndamento, setPedidosEmAndamento] = useState([]);
  const [pedidosConcluidos, setPedidosConcluidos] = useState([]);
  const [lastPedidoNumber, setLastPedidoNumber] = useState(0);
  const [pedidosCancelados, setPedidosCancelados] = useState([]);
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null);
  const [pedidoStatus, setPedidoStatus] = useState("Em Aberto");
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const handleShowModal = (pedido) => {
    setPedidoSelecionado(pedido);
  };

  const handleHideModal = () => {
    setPedidoSelecionado(null);
  };

  const getPedidoStatus = async (pedido) => {
    if (pedido && pedido.emAberto) {
      return "Em Aberto";
    } else if (pedido && pedido.emAndamento) {
      return "Em Andamento";
    } else if (pedido && pedido.concluido) {
      return "Concluído";
    } else if (pedido && pedido.cancelado) {
      return "Cancelado";
    } else {
      return null;
    }
  };

  const updatePedidoStatus = async (newStatus) => {
    try {
      const db = firebase.firestore();
      const pedidoRef = db
        .collection("usuarios")
        .doc(pedidoSelecionado.idCliente)
        .collection("pedidos")
        .doc(pedidoSelecionado.id);

      if (newStatus === "Em Andamento") {
        await pedidoRef.update({
          emAberto: false,
          emAndamento: true,
          concluido: false,
          cancelado: false,
        });
      } else if (newStatus === "Concluído") {
        await pedidoRef.update({
          emAberto: false,
          emAndamento: false,
          concluido: true,
          cancelado: false,
        });
      } else if (newStatus === "Cancelado") {
        await pedidoRef.update({
          emAberto: false,
          emAndamento: false,
          concluido: false,
          cancelado: true,
        });
      }
      setPedidoStatus(newStatus);
    } catch (error) {
      console.error("Erro ao atualizar o status do pedido:", error);
    }
  };

  const cancelarPedido = async () => {
    try {
      if (pedidoSelecionado) {
        const db = firebase.firestore();
        const pedidoRef = db
          .collection("usuarios")
          .doc(pedidoSelecionado.idCliente)
          .collection("pedidos")
          .doc(pedidoSelecionado.idPedido);

        const docSnapshot = await pedidoRef.get();

        if (docSnapshot.exists) {
          await pedidoRef.update({
            emAberto: false,
            emAndamento: false,
            concluido: false,
            cancelado: true,
          });

          console.log("Pedido cancelado com sucesso!");
          handleHideModal();
        } else {
          console.error("Documento do pedido não encontrado.");
        }
      } else {
        console.error("Nenhum pedido selecionado para cancelar.");
      }
    } catch (error) {
      console.error("Erro ao cancelar o pedido:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = firebase.firestore();
        const pedidosEmAbertoData = [];
        const pedidosEmAndamentoData = [];
        const pedidosConcluidosData = [];
        const pedidosCanceladosData = [];

        const usuariosRef = db.collection("usuarios");
        const usuariosSnapshot = await usuariosRef.get();

        for (const usuarioDoc of usuariosSnapshot.docs) {
          const pedidosRef = usuarioDoc.ref.collection("pedidos");
          const pedidosSnapshot = await pedidosRef.get();

          pedidosSnapshot.forEach((doc) => {
            const dadosPedido = doc.data();

            if (dadosPedido.emAberto) {
              pedidosEmAbertoData.push(dadosPedido);
            } else if (dadosPedido.emAndamento) {
              pedidosEmAndamentoData.push(dadosPedido);
            } else if (dadosPedido.concluido) {
              pedidosConcluidosData.push(dadosPedido);
            } else if (dadosPedido.cancelado) {
              pedidosCanceladosData.push(dadosPedido);
            }
          });
        }

        setPedidosEmAberto(pedidosEmAbertoData);
        setPedidosEmAndamento(pedidosEmAndamentoData);
        setPedidosConcluidos(pedidosConcluidosData);
        setPedidosCancelados(pedidosCanceladosData);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao obter pedidos:", error);
      }
    };

    const fetchLastPedidoNumber = async () => {
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
    };

    fetchData();
    fetchLastPedidoNumber();
  }, []);

  useEffect(() => {
    const fetchStatus = async () => {
      if (pedidoSelecionado) {
        const status = await getPedidoStatus(pedidoSelecionado);
        if (status === "emAberto") {
          setPedidoStatus("Em Aberto");
        } else if (status === "emAndamento") {
          setPedidoStatus("Em Andamento");
        } else if (status === "concluido") {
          setPedidoStatus("Concluído");
        } else if (status === "cancelado") {
          setPedidoStatus("Cancelado");
        } else {
          setPedidoStatus("Status desconhecido");
        }
      }
    };

    fetchStatus();
  }, [pedidoSelecionado]);

  const filterPedidos = (pedidos) => {
    return pedidos.filter((pedido) => pedido.numero !== 0);
  };
  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", margin: "20px" }}>
        Gerenciamento de Pedidos
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
                {pedidosEmAberto.map((pedido, index) => (
                  <Card className="column__item" key={index}>
                    <Card.Header>
                      <button
                        type="button"
                        className="text column__item__text"
                        onClick={() => {
                          handleShowModal(pedido);
                        }}
                      >
                        Pedido {pedido.numero} - {pedido.cliente}
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
                {pedidosEmAndamento.map((pedido, index) => (
                  <Card className="column__item" key={index}>
                    <Card.Header>
                      <button
                        type="button"
                        className="text column__item__text"
                        onClick={() => handleShowModal(pedido)}
                      >
                        Pedido {pedido.numero} - {pedido.cliente}
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
                        onClick={() => {
                          handleShowModal(pedido);
                        }}
                      >
                        Pedido {pedido.numero} - {pedido.cliente}
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
                {filterPedidos(pedidosCancelados).map((pedido, index) => (
                  <Card className="column__item" key={index}>
                    <Card.Header>
                      <button
                        type="button"
                        className="text column__item__text"
                        onClick={() => {
                          handleShowModal(pedido);
                        }}
                      >
                        Pedido {pedido.numero} - {pedido.cliente}
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
        <ModalsAdmin
          pedidoDetails={pedidoSelecionado}
          cliente={pedidoSelecionado?.cliente}
          avaliacao={pedidoSelecionado?.avaliacao}
          itens={pedidoSelecionado?.itensQuantidades}
          dataPedido={pedidoSelecionado?.dataPedido}
          idPedido={pedidoSelecionado.idPedido}
          status={pedidoStatus}
          handleCancelarPedido={cancelarPedido}
          onHide={handleHideModal}
          changeStatus={updatePedidoStatus}
        />
      ) : null}
    </>
  );
}
