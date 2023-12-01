import React, { useState } from "react";

function SelecaoQuantidades({ opcoes, handleProximo }) {
  const [quantidades, setQuantidades] = useState({});

  const handleQuantidade = (opcao, quantidade) => {
    setQuantidades({ ...quantidades, [opcao]: quantidade });
  };

  const incrementarQuantidade = (opcao) => {
    const quantidadeAtual = quantidades[opcao] || 0;
    handleQuantidade(opcao, quantidadeAtual + 1);
  };

  const decrementarQuantidade = (opcao) => {
    const quantidadeAtual = quantidades[opcao] || 0;
    if (quantidadeAtual > 0) {
      handleQuantidade(opcao, quantidadeAtual - 1);
    }
  };

  return (
    <div className="menu_opcoes">
      <div className="btn__opcoes">
        {opcoes.map((opcao) => (
          <div key={opcao}>
            <p>{`Escolha a quantidade para ${opcao}:`}</p>
            <div>
              <button
                className="btnDiminuir"
                onClick={() => decrementarQuantidade(opcao)}
              >
                -
              </button>
              <span>{quantidades[opcao] || 0}</span>
              <button
                className="btnAumentar"
                onClick={() => incrementarQuantidade(opcao)}
              >
                +
              </button>
            </div>
          </div>
        ))}
        <button className="opcao" onClick={() => handleProximo(quantidades)}>
          Próximo
        </button>
      </div>
    </div>
  );
}

export default SelecaoQuantidades;
