import React, { useState } from "react";
import { usePedidoContext } from "../../StorageContext/PedidoContext";

export const Quantidade = (props) => {
  const {
    opcoes,
    subopcoes,
    quantidades,
    setQuantidades,
    pedido,
    setPedido,
    mapearOpcoesComSubopcoes,
  } = usePedidoContext();

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddClick = (subopcao) => {
    const newQuantidades = { ...quantidades };

    if (newQuantidades[subopcao] === undefined) {
      newQuantidades[subopcao] = 1;
    } else {
      newQuantidades[subopcao] += 1;
    }

    setQuantidades(newQuantidades);
  };

  const handleRemoveClick = (subopcao) => {
    const newQuantidades = { ...quantidades };

    if (
      newQuantidades[subopcao] !== undefined &&
      newQuantidades[subopcao] > 0
    ) {
      newQuantidades[subopcao] -= 1;
      setQuantidades(newQuantidades);
    }
  };

  const handleContinueClick = (quantidade) => {
    setQuantidades({ ...quantidades, quantidade });
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleSendClick = () => {
    setPedido(mapearOpcoesComSubopcoes(...opcoes, subopcoes, quantidades));
    console.log(pedido);
    props.actionProvider.handleBuffet();
  };

  return (
    <div className="options-container">
      {currentIndex < subopcoes.length && (
        <div key={subopcoes[currentIndex]}>
          <button disabled>{subopcoes[currentIndex]}</button>
          <button onClick={() => handleAddClick(subopcoes[currentIndex])}>
            +
          </button>
          <div className="quantidade">
            <input
              type="text"
              value={quantidades[subopcoes[currentIndex]] || 0}
              disabled
            />
          </div>

          <button onClick={() => handleRemoveClick(subopcoes[currentIndex])}>
            -
          </button>
        </div>
      )}
      {currentIndex === subopcoes.length - 1 && (
        <button className="submit-button" onClick={handleSendClick}>
          Próximo
        </button>
      )}
      {currentIndex < subopcoes.length - 1 && (
        <button onClick={handleContinueClick}>Continuar</button>
      )}
    </div>
  );
};
