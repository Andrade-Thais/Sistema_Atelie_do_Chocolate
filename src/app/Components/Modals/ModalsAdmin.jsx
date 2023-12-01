import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import firebase from "firebase";
import SweetAlert from "react-bootstrap-sweetalert";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ModalsAdmin = ({
  pedidoDetails,
  onHide,
  numero,
  dataPedido,
  cliente,
  avaliacao,
  itens,
  emAberto,
  emAndamento,
  concluido,
  changeStatus,
  idPedido,
  handleCancelarPedido,
  ...props
}) => {
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const history = useHistory();

  const handleShowModal = () => {
    setShowConfirmationPopup(true);
  };

  const hideSuccessAlert = () => {
    setShowConfirmationPopup(false);
    history.go(0);
  };

  const changePedidoStatus = () => {
    let newStatus;

    if (pedidoDetails.emAberto) {
      newStatus = {
        emAberto: false,
        emAndamento: true,
        concluido: false,
        cancelado: false,
      };
    } else if (pedidoDetails.emAndamento) {
      newStatus = {
        emAberto: false,
        emAndamento: false,
        concluido: true,
        cancelado: false,
      };
    } else if (pedidoDetails.concluido) {
      newStatus = {
        emAberto: false,
        emAndamento: false,
        concluido: false,
        cancelado: true,
      };
    }

    return newStatus;
  };

  const formatStatus = () => {
    if (pedidoDetails.cancelado) {
      return "Cancelado";
    } else if (pedidoDetails.emAberto) {
      return "Em Aberto";
    } else if (pedidoDetails.emAndamento) {
      return "Em Andamento";
    } else if (pedidoDetails.concluido) {
      return "Concluído";
    } else {
      return "Status Desconhecido";
    }
  };
  const formatarData = (dataPedido) => {
    const data = dataPedido?.toDate();
    return data?.toLocaleString();
  };

  const updatePedidoStatusInFirebase = async () => {
    const db = firebase.firestore();

    if (pedidoDetails && pedidoDetails.idCliente != null) {
      const pedidoRef = db
        .collection("usuarios")
        .doc(String(pedidoDetails.idCliente))
        .collection("pedidos")
        .doc(String(pedidoDetails.idPedido));
      await pedidoRef.update({
        ...changePedidoStatus(),
        cancelado: pedidoDetails.cancelado,
      });

      try {
        const docSnapshot = await pedidoRef.get();

        if (docSnapshot.exists) {
          await pedidoRef.update(changePedidoStatus()); // Update with new status
          console.log("Document updated successfully!");
          setShowConfirmationPopup(true);
        } else {
          console.error(
            "Document does not exist at the specified path:",
            pedidoRef.path
          );
        }
      } catch (error) {
        console.error("Error updating document:", error);
      }
    } else {
      console.error(
        "pedidoDetails or pedidoDetails.idCliente is null or undefined"
      );
    }
  };

  const handleCancelarPedidoComConfirmacao = () => {
    handleCancelarPedido();
    handleShowModal();
  };
  return (
    <>
      <Modal size="lg" centered show={pedidoDetails !== null} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h1>Dados do Pedido</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {pedidoDetails && (
            <>
              <p>Número do Pedido: {numero}</p>
              <p>
                Data do Pedido:{" "}
                {pedidoDetails && formatarData(pedidoDetails.dataPedido)}
              </p>
              <p>Cliente: {cliente}</p>
              <p>Avaliação: {avaliacao}</p>
              <p>Status: {formatStatus()}</p>
              <h3>Itens do pedido:</h3>
              <p>
                {itens &&
                  Array.isArray(itens) &&
                  itens.map((item, index) => <p key={index}>{item}</p>)}
              </p>
            </>
          )}
        </Modal.Body>

        <Modal.Footer>
          <button className="submit" onClick={onHide}>
            Fechar
          </button>
          {!pedidoDetails.cancelado && (
            <>
              <button className="submit" onClick={updatePedidoStatusInFirebase}>
                Mudar Status
              </button>
              <button
                className="submit"
                onClick={handleCancelarPedidoComConfirmacao}
              >
                Cancelar Pedido
              </button>
            </>
          )}
        </Modal.Footer>
      </Modal>
      {showConfirmationPopup && (
        <SweetAlert
          success
          title="Status Alterado!"
          onConfirm={hideSuccessAlert}
        >
          Status alterado com sucesso. Para sincronizar os pedidos, clique em OK
          e recarregue a página!
        </SweetAlert>
      )}
    </>
  );
};

export default ModalsAdmin;
