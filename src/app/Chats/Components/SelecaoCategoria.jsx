import React, { useState, useEffect } from "react";
import Ketlyn from "../assets/Perfil.png";
import { ShowOpcoes, HandleOpcao } from "../Utils/UtilFunctions";

function SelecaoCategoria({ opcaoDesejada, HandleOpcao }) {
  const [opcoesMostradas, setOpcoesMostradas] = useState([]);

  useEffect(() => {
    ShowOpcoes(opcaoDesejada, opcoesMostradas, setOpcoesMostradas);
  }, [opcaoDesejada]);

  const handleOpcaoSelecionada = (opcaoSelecionada) => {
    // Implemente a lógica de manipulação da opção selecionada aqui, se necessário
    console.log(`Opção selecionada: ${opcaoSelecionada}`);
  };

  return (
    <div className="menu_opcoes">
      <div className="intro">
        <img src={Ketlyn} alt="Ketlyn" className="img__perfil" />
        <p className="text">
          Você escolheu {opcaoDesejada}. Confira as opções abaixo!
        </p>
      </div>
      <div name="opcoes" className="btn__opcoes">
        {opcoesMostradas.map((opcaoRenderizada) => (
          <div key={opcaoRenderizada}>
            <label htmlFor={opcaoRenderizada}>{opcaoRenderizada}</label>
            <input
              type="checkbox"
              name="checkbox"
              id={opcaoRenderizada}
              className="checkbox"
              onChange={() => handleOpcaoSelecionada(opcaoRenderizada)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelecaoCategoria;
