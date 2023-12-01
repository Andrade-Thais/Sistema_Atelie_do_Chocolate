import React from "react";
import { AiFillContainer, AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import "../../PedidoForm/PedidoForm.css";
const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
      <div className="step active">
        <AiFillContainer />
        <p>Pedido</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <AiOutlineStar />
        <p>Avaliação</p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <FiSend />
        <p>Envio</p>
      </div>
    </div>
  );
};

export default Steps;
