import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Estrelas from "./Estrelas";

export default function Avaliacoes(props) {
  const [conteudoModal, setConteudoModal] = useState([]);
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState();

  const handleClose = () => {
    setShow(false);
  };

  const onClickStar = (index) => {
    setActiveIndex((oldState) => (oldState === index ? undefined : index));
  };

  const items = [...Array(5).keys()];

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Avalie seu Pedido!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Pedido {props.tituloPedido}</h1>
          {items.map((index) => (
            <Estrelas
              onClick={() => onClickStar(index)}
              key={`star_${index}`}
              isActive={index <= activeIndex}
            />
          ))}
          <h6>Escreva um comentário: (opcional)</h6>
          <textarea
            name="comentario"
            id="comentario"
            cols="30"
            rows="10"
            className="form__comment"
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="submit" onClick={handleClose}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
