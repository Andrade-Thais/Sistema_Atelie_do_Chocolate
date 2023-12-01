import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import firebase from "firebase";
import SweetAlert from "react-bootstrap-sweetalert";

const Modals = ({
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
  ...props
}) => {
  const formatStatus = () => {
    if (pedidoDetails.emAberto) {
      return "Em Aberto";
    } else if (pedidoDetails.emAndamento) {
      return "Em Andamento";
    } else if (pedidoDetails.concluido) {
      return "Concluído";
    } else if (pedidoDetails.cancelado) {
      return "Cancelado";
    } else {
      return "Status Desconhecido";
    }
  };

  const formatarData = (dataPedido) => {
    const data = dataPedido?.toDate();
    return data?.toLocaleString();
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
              <p>Nome: {cliente}</p>
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
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modals;
