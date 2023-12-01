import React from "react";

const OpcoesForm = ({ data, updateFieldHandler }) => {
  const getCheckboxClass = (itemName) => {
    return data.opcoes.includes(itemName) ? "opcao checked" : "opcao";
  };

  return (
    <>
      <h2>Catálogo de Opções</h2>
      <p>Agora, escolha as opções desejadas para sua festa!</p>
      <div className="btn__opcoes">
        <div>
          <input
            type="checkbox"
            className="checkbox"
            name="bolos"
            id="bolos"
            checked={data.opcoes.includes("Bolos")}
            onChange={() => updateFieldHandler("opcoes", "Bolos")}
          />
          <label htmlFor="bolos" className={getCheckboxClass("Bolos")}>
            Bolos
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            className="checkbox"
            name="doces"
            id="doces"
            checked={data.opcoes.includes("Doces")}
            onChange={() => updateFieldHandler("opcoes", "Doces")}
          />
          <label htmlFor="doces" className={getCheckboxClass("Doces")}>
            Doces
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            className="checkbox"
            name="salgados"
            id="salgados"
            checked={data.opcoes.includes("Salgados")}
            onChange={() => updateFieldHandler("opcoes", "Salgados")}
          />
          <label htmlFor="salgados" className={getCheckboxClass("Salgados")}>
            Salgados
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            className="checkbox"
            name="MiniLanches"
            id="MiniLanches"
            checked={data.opcoes.includes("Mini Lanches")}
            onChange={() => updateFieldHandler("opcoes", "Mini Lanches")}
          />
          <label
            htmlFor="MiniLanches"
            className={getCheckboxClass("Mini Lanches")}
          >
            Mini Lanches
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            className="checkbox"
            name="buffet"
            id="buffet"
            checked={data.opcoes.includes("Serviços de Buffet")}
            onChange={() => updateFieldHandler("opcoes", "Serviços de Buffet")}
          />
          <label
            htmlFor="buffet"
            className={getCheckboxClass("Serviços de Buffet")}
          >
            Serviços de Buffet
          </label>
        </div>
      </div>
    </>
  );
};

export default OpcoesForm;
