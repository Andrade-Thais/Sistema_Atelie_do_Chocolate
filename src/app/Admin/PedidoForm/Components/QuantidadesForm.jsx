import React from "react";
import { GrFormNext } from "react-icons/gr";
import "../PedidoForm.css";
const QuantidadesForm = ({ data, handleQuantidade, handleAvancar }) => {
  const todasQuantidadesPreenchidas = data.quantidades.every(
    (quantidade) => quantidade !== "" && !isNaN(quantidade)
  );

  return (
    <div className="full-form">
      <h2>Selecione as quantidades!</h2>
      {data.opcoes !== "" && (
        <p>
          Escolhidos os itens para a festa, agora selecione as quantidades
          desejadas!
        </p>
      )}
      <div className="btn__quantidades">
        {data.itens.map((item, index) => (
          <div className="quantidades" key={index}>
            <label>
              {item}:{" "}
              <input
                type="number"
                min={0}
                placeholder="Digite aqui a quantidade desejada..."
                className="quantidades__input"
                value={data.quantidades[index] || ""}
                onChange={(e) => {
                  handleQuantidade(index, e.target.value, "quantidades");
                }}
                onBlur={(e) => {
                  handleQuantidade(index, e.target.value, "quantidades");
                }}
              />
            </label>
          </div>
        ))}
      </div>
      <button
        type="button"
        disabled={!todasQuantidadesPreenchidas}
        onClick={handleAvancar}
      >
        <span>Avançar</span>
        <GrFormNext />
      </button>
    </div>
  );
};

export default QuantidadesForm;
