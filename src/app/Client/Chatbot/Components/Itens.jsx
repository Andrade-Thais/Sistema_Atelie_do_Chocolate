import React from "react";
import { usePedidoContext } from "../Context/ChatContext";
import Ketlyn from "../assets/Perfil.png";
import UseCustomHistory from "../Hooks/UseCustomHistory";

export default function Itens() {
  const {
    subopcoes,
    selectedOpcaoId,
    selectedSubopcoes,
    setSelectedSubopcoes,
    setContinuarPedido,
  } = usePedidoContext();

  const { voltar } = UseCustomHistory();

  const handleCheckboxChange = (itemName, id) => {
    const subopcoesFiltradas = Object.keys(subopcoes).filter(
      (key) => subopcoes[key].nome === itemName && subopcoes[key].id === id
    );

    setSelectedSubopcoes((prevSelected) => {
      if (subopcoesFiltradas.some((item) => prevSelected.includes(item))) {
        return prevSelected.filter(
          (selectedItem) => !subopcoesFiltradas.includes(selectedItem)
        );
      } else {
        return [...prevSelected, { itemName, id }];
      }
    });
  };

  const handleProx = () => {
    if (selectedSubopcoes.length > 0) {
      setContinuarPedido(true);
    } else {
      console.log("Selecione pelo menos uma opção antes de continuar.");
    }
  };

  return (
    <>
      {selectedOpcaoId === 1 && (
        <div className="menu_opcoes">
          <div className="intro">
            <img src={Ketlyn} alt="Ketlyn" className="img__perfil" />
            <p className="text">
              Você escolheu Bolos. Confeitamos bolos personalizados com
              personagens ou flores com papelaria de luxo. Confira as opções
              abaixo!
            </p>
          </div>
          <form className="btn__opcoes">
            {Array.isArray(subopcoes) &&
              subopcoes.map((item) => (
                <div key={item.id} className="opcao-item">
                  <input
                    type="checkbox"
                    name={item.nome}
                    id={item.id}
                    className="checkbox"
                    onChange={() => handleCheckboxChange(item.nome, item.id)}
                  />
                  <label className="opcao" htmlFor={item.id}>
                    {item.nome}
                  </label>
                </div>
              ))}
            <div className="send">
              <button
                className="voltar"
                onClick={() => {
                  voltar();
                }}
              >
                <i
                  className="icone fa-solid fa-rotate-left fa-2xl"
                  style={{ color: "#ffffff" }}
                ></i>
              </button>
              <button
                type="button"
                className="opcao"
                onClick={() => {
                  handleProx();
                }}
              >
                Próximo
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
