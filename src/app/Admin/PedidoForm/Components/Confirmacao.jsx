import React from "react";

const Confirmacao = ({ data, updateFieldHandler }) => {
  return (
    <>
      <h2>Confirme seu pedido!</h2>
      <p>
        Agora, verifique os itens de seu pedido. Caso deseje mais algum item de
        nosso catálogo, clique em voltar!
      </p>
      <div>
        <h3>Opções desejadas:</h3>
        <ul>
          {data.opcoes.map((opcao, index) => (
            <li key={index}>{opcao}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Itens e suas respectivas quantidades: </h3>
        <ul>
          {data.itens.map((item, index) => (
            <li key={index}>
              {item} - {data.quantidades && data.quantidades[index]}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Confirmacao;
