import React, { useState } from "react";
import { usePedidoContext } from "../../StorageContext/PedidoContext";

const GetBolos = (props) => {
  const { subopcoes, setSubopcoes } = usePedidoContext();

  const [opcoesSelecionadas, setOpcoesSelecionadas] = useState([]);

  const suboptions = [
    {
      texts: ["Bolo Personalizado", "Bolo Comum"],
      handler: props.actionProvider.handleTiposBolos,
      id: 1,
    },
  ];

  const handleCheckboxChange = (text) => {
    if (opcoesSelecionadas.includes(text)) {
      setOpcoesSelecionadas(
        opcoesSelecionadas.filter((opcao) => opcao !== text)
      );
    } else {
      setOpcoesSelecionadas([...opcoesSelecionadas, text]);
    }
  };

  const handleSuboptionClick = () => {
    setSubopcoes([...subopcoes, ...opcoesSelecionadas]);
    props.actionProvider.handleTiposBolos(opcoesSelecionadas);
  };

  const buttonsMarkup = (
    <div className="options-container">
      {suboptions.map((suboption) => (
        <div key={suboption.id}>
          {suboption.texts &&
            suboption.texts.map((text, index) => (
              <label key={index} htmlFor={index} className="button">
                <input
                  type="checkbox"
                  id={index}
                  className="checkbox"
                  checked={opcoesSelecionadas.includes(text)}
                  onChange={() => handleCheckboxChange(text)}
                />
                {text}
              </label>
            ))}
          <button className="submit-button" onClick={handleSuboptionClick}>
            Próximo
          </button>
        </div>
      ))}
    </div>
  );

  return <div className="options-container">{buttonsMarkup}</div>;
};

export { GetBolos };
