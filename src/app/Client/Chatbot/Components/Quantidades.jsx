import React from "react";
import { usePedidoContext } from "../Context/ChatContext";
import Ketlyn from "../assets/Perfil.png";

export default function Quantidades() {
  const {
    opcoesPrimarias,
    subopcoes,
    selectedSubopcoes,
    catalogoDisponivel,
    setCatalogoDisponivel,
  } = usePedidoContext();

  const handleQuantidadeChange = (subopcao, operacao) => {
    const catalogo = [...catalogoDisponivel.catalogo];
    const subopcaoIndex = catalogo.findIndex((item) => item.id === subopcao.id);

    if (subopcaoIndex !== -1) {
      if (operacao === "adicao") {
        if (
          catalogo[subopcaoIndex].opcaoRelacionada === 1 ||
          catalogo[subopcaoIndex].opcaoRelacionada === 5
        ) {
          catalogo[subopcaoIndex].quantidade += 1;
        } else {
          catalogo[subopcaoIndex].quantidade += 50;
        }
      } else if (operacao === "subtracao") {
        if (
          (catalogo[subopcaoIndex].opcaoRelacionada === 1 ||
            catalogo[subopcaoIndex].opcaoRelacionada === 5) &&
          catalogo[subopcaoIndex].quantidade !== 0
        ) {
          catalogo[subopcaoIndex].quantidade -= 1;
        } else if (
          (catalogo[subopcaoIndex].opcaoRelacionada === 1 ||
            catalogo[subopcaoIndex].opcaoRelacionada === 5) &&
          catalogo[subopcaoIndex].quantidade >= 50
        ) {
          catalogo[subopcaoIndex].quantidade -= 50;
        }
      }
      setCatalogoDisponivel({ ...catalogoDisponivel, catalogo: catalogo });
    }
  };

  return (
    <>
      {opcoesPrimarias && subopcoes && selectedSubopcoes && (
        <div className="menu_opcoes">
          <div className="intro">
            <img src={Ketlyn} alt="Ketlyn" className="img__perfil" />
            <p className="text">
              Agora, determine a quantidade desejada para cada item desejado!
            </p>
          </div>
          <div className="quantidades">
            {selectedSubopcoes.map((item) => (
              <div key={item.id} className="item-desejado">
                <div className="botao">{item.nome}</div>
                <div className="input-quantidades">
                  <button
                    onClick={() => handleQuantidadeChange(item, "adicao")}
                    className="btnAumentar"
                    style={{ width: 40 + "%" }}
                  >
                    <i
                      className="fa-solid fa-plus"
                      style={{ color: "#FFFFFF" }}
                    ></i>
                  </button>
                  <input
                    type="number"
                    name="quantidade"
                    placeholder="Quantidade Atual: "
                    value={item.quantidade}
                    disabled
                    style={{ border: "none" }}
                    key={`quantidade-${item.id}`}
                  />
                  <button
                    onClick={() => handleQuantidadeChange(item, "subtracao")}
                    className="btnDiminuir"
                    style={{ width: 40 + "%" }}
                  >
                    <i
                      className="fa-solid fa-minus"
                      style={{ color: "#FFFFFF" }}
                    ></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
