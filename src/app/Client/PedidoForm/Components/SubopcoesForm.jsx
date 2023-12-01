import React from "react";
import "../PedidoForm.css";

const SubopcoesForm = ({ data, updateFieldHandler }) => {
  const isCheckboxChecked = (itemName) => {
    return data.itens.includes(itemName);
  };

  return (
    <>
      <h2>Escolha seus itens!</h2>
      {data.opcoes !== "" && (
        <p>
          Você escolheu{" "}
          {data.opcoes.length === 1
            ? data.opcoes[0]
            : data.opcoes.slice(0, -1).join(", ") +
              " e " +
              data.opcoes[data.opcoes.length - 1]}
          . Agora, escolha os itens desejados para a festa!
        </p>
      )}
      <div className="btn__itens">
        {data.opcoes.map((opcao, index) => (
          <div className="itens" key={index}>
            <h3 className="heading">{opcao}</h3>
            {opcao === "Bolos" && (
              <div className="itens__list">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="bolopersonalizado"
                    id="bolopersonalizado"
                    checked={isCheckboxChecked("Bolo Personalizado")}
                    onChange={() =>
                      updateFieldHandler("itens", "Bolo Personalizado")
                    }
                  />
                  <label
                    htmlFor="bolopersonalizado"
                    className={
                      isCheckboxChecked("Bolo Personalizado")
                        ? "opcao checked"
                        : "opcao"
                    }
                  >
                    Bolo Personalizado
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="bolocomum"
                    id="bolocomum"
                    checked={isCheckboxChecked("Bolo Comum")}
                    onChange={() => updateFieldHandler("itens", "Bolo Comum")}
                  />
                  <label
                    htmlFor="bolocomum"
                    className={
                      isCheckboxChecked("Bolo Comum")
                        ? "opcao checked"
                        : "opcao"
                    }
                  >
                    Bolo Comum
                  </label>
                </div>
              </div>
            )}
            {opcao === "Doces" && (
              <div className="itens__list">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="brigadeiro"
                    id="brigadeiro"
                    checked={isCheckboxChecked("Brigadeiro")}
                    onChange={() => updateFieldHandler("itens", "Brigadeiro")}
                  />
                  <label
                    htmlFor="brigadeiro"
                    className={
                      isCheckboxChecked("Brigadeiro")
                        ? "opcao checked"
                        : "opcao"
                    }
                  >
                    Brigadeiro Tradicional
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="brigadeironinho"
                    id="brigadeironinho"
                    checked={isCheckboxChecked("Brigadeiro de Ninho")}
                    onChange={() =>
                      updateFieldHandler("itens", "Brigadeiro de Ninho")
                    }
                  />
                  <label
                    htmlFor="brigadeironinho"
                    className={
                      isCheckboxChecked("Brigadeiro de Ninho")
                        ? "opcao checked"
                        : "opcao"
                    }
                  >
                    Brigadeiro de Ninho
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="brigadeiropacoca"
                    id="brigadeiropacoca"
                    checked={isCheckboxChecked("Brigadeiro de Paçoca")}
                    onChange={() =>
                      updateFieldHandler("itens", "Brigadeiro de Paçoca")
                    }
                  />
                  <label
                    htmlFor="brigadeiropacoca"
                    className={
                      isCheckboxChecked("Brigadeiro de Paçoca")
                        ? "opcao checked"
                        : "opcao"
                    }
                  >
                    Brigadeiro de Paçoca
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="brigadeirochurros"
                    id="brigadeirochurros"
                    checked={isCheckboxChecked("Brigadeiro de Churros")}
                    onChange={() =>
                      updateFieldHandler("itens", "Brigadeiro de Churros")
                    }
                  />
                  <label
                    htmlFor="brigadeirochurros"
                    className={
                      isCheckboxChecked("Brigadeiro de Churros")
                        ? "opcao checked"
                        : "opcao"
                    }
                  >
                    Brigadeiro de Churros
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="beijinho"
                    id="beijinho"
                    checked={isCheckboxChecked("Beijinho")}
                    onChange={() => updateFieldHandler("itens", "Beijinho")}
                  />
                  <label
                    htmlFor="beijinho"
                    className={
                      isCheckboxChecked("Beijinho") ? "opcao checked" : "opcao"
                    }
                  >
                    Beijinho
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="bichodepe"
                    id="bichodepe"
                    checked={isCheckboxChecked("Bicho de Pé")}
                    onChange={() => updateFieldHandler("itens", "Bicho de Pé")}
                  />
                  <label
                    htmlFor="bichodepe"
                    className={
                      isCheckboxChecked("Bicho de Pé")
                        ? "opcao checked"
                        : "opcao"
                    }
                  >
                    Bicho de Pé
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="brigadeiroavela"
                    id="brigadeiroavela"
                    checked={isCheckboxChecked("Brigadeiro de Avelã")}
                    onChange={() =>
                      updateFieldHandler("itens", "Brigadeiro de Avelã")
                    }
                  />
                  <label
                    htmlFor="brigadeiroavela"
                    className={
                      isCheckboxChecked("Brigadeiro de Avelã")
                        ? "opcao checked"
                        : "opcao"
                    }
                  >
                    Brigadeiro de Avelã
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="brigadeiroprestigio"
                    id="brigadeiroprestigio"
                    checked={isCheckboxChecked("Brigadeiro de Prestígio")}
                    onChange={() =>
                      updateFieldHandler("itens", "Brigadeiro de Prestígio")
                    }
                  />
                  <label
                    htmlFor="brigadeiroprestigio"
                    className={
                      isCheckboxChecked("Brigadeiro de Prestígio")
                        ? "opcao checked"
                        : "opcao"
                    }
                  >
                    Brigadeiro de Prestígio
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="cajuzinho"
                    id="cajuzinho"
                    checked={isCheckboxChecked("Cajuzinho")}
                    onChange={() => updateFieldHandler("itens", "Cajuzinho")}
                  />
                  <label
                    htmlFor="cajuzinho"
                    className={
                      isCheckboxChecked("Cajuzinho") ? "opcao checked" : "opcao"
                    }
                  >
                    Cajuzinho
                  </label>
                </div>
              </div>
            )}
            {opcao === "Salgados" && (
              <div className="itens__list">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="coxinha"
                    id="coxinha"
                    checked={isCheckboxChecked("Coxinha")}
                    onChange={() => updateFieldHandler("itens", "Coxinha")}
                  />
                  <label
                    htmlFor="coxinha"
                    className={
                      isCheckboxChecked("Coxinha") ? "opcao checked" : "opcao"
                    }
                  >
                    Coxinha
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="bolinhaqueijo"
                    id="bolinhaqueijo"
                    checked={isCheckboxChecked("Bolinha de Queijo")}
                    onChange={() =>
                      updateFieldHandler("itens", "Bolinha de Queijo")
                    }
                  />
                  <label
                    htmlFor="bolinhaqueijo"
                    className={
                      isCheckboxChecked("Bolinha de Queijo")
                        ? "opcao checked"
                        : "opcao"
                    }
                  >
                    Bolinha de Queijo
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="bolinhadecarne"
                    id="bolinhadecarne"
                    checked={isCheckboxChecked("Bolinha de Carne")}
                    onChange={() =>
                      updateFieldHandler("itens", "Bolinha de Carne")
                    }
                  />
                  <label
                    htmlFor="bolinhadecarne"
                    className={
                      isCheckboxChecked("Bolinha de Carne")
                        ? "opcao checked"
                        : "opcao"
                    }
                  >
                    Bolinha de Carne
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="risole"
                    id="risole"
                    checked={isCheckboxChecked("Risole")}
                    onChange={() => updateFieldHandler("itens", "Risole")}
                  />
                  <label
                    htmlFor="risole"
                    className={
                      isCheckboxChecked("Risole") ? "opcao checked" : "opcao"
                    }
                  >
                    Risole
                  </label>
                </div>
              </div>
            )}
            {opcao === "Mini Lanches" && (
              <div className="itens__list">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="esfiha"
                    id="esfiha"
                    checked={isCheckboxChecked("Mini Esfiha de Calabresa")}
                    onChange={() =>
                      updateFieldHandler("itens", "Mini Esfiha de Calabresa")
                    }
                  />
                  <label
                    htmlFor="esfiha"
                    className={
                      isCheckboxChecked("Mini Esfiha de Calabresa")
                        ? "opcao checked"
                        : "opcao"
                    }
                  >
                    Mini Esfiha de Calabresa
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="esfihacarne"
                    id="esfihacarne"
                    checked={isCheckboxChecked("Mini Esfiha de Carne")}
                    onChange={() =>
                      updateFieldHandler("itens", "Mini Esfiha de Carne")
                    }
                  />
                  <label
                    htmlFor="esfihacarne"
                    className={
                      isCheckboxChecked("Mini Esfiha de Carne")
                        ? "opcao checked"
                        : "opcao"
                    }
                  >
                    Mini Esfiha de Carne
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="esfihaqueijo"
                    id="esfihaqueijo"
                    checked={isCheckboxChecked("Mini Esfiha de Queijo")}
                    onChange={() =>
                      updateFieldHandler("itens", "Mini Esfiha de Queijo")
                    }
                  />
                  <label
                    htmlFor="esfihaqueijo"
                    className={
                      isCheckboxChecked("Mini Esfiha de Queijo")
                        ? "opcao checked"
                        : "opcao"
                    }
                  >
                    Mini Esfiha de Queijo
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="hotdog"
                    id="hotdog"
                    checked={isCheckboxChecked("Mini Hot Dog")}
                    onChange={() => updateFieldHandler("itens", "Mini Hot Dog")}
                  />
                  <label
                    htmlFor="hotdog"
                    className={
                      isCheckboxChecked("Mini Hot Dog")
                        ? "opcao checked"
                        : "opcao"
                    }
                  >
                    Mini Hot Dog
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="hamburguer"
                    id="hamburguer"
                    checked={isCheckboxChecked("Mini Hambúrguer")}
                    onChange={() =>
                      updateFieldHandler("itens", "Mini Hambúrguer")
                    }
                  />
                  <label
                    htmlFor="hamburguer"
                    className={
                      isCheckboxChecked("Mini Hambúrguer")
                        ? "opcao checked"
                        : "opcao"
                    }
                  >
                    Mini Hambúrguer
                  </label>
                </div>
              </div>
            )}
            {opcao === "Serviços de Buffet" && (
              <div className="itens__list">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="kit1"
                    id="kit1"
                    checked={isCheckboxChecked("Kit Festa")}
                    onChange={() => updateFieldHandler("itens", "Kit Festa")}
                  />
                  <label
                    htmlFor="kit1"
                    className={
                      isCheckboxChecked("Kit Festa") ? "opcao checked" : "opcao"
                    }
                  >
                    Kit Completo: Todos os Produtos + Carrinho Gourmet
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="kit2"
                    id="kit2"
                    checked={isCheckboxChecked("Kit Básico")}
                    onChange={() => updateFieldHandler("itens", "Kit Básico")}
                  />
                  <label
                    htmlFor="kit2"
                    className={
                      isCheckboxChecked("Kit Básico")
                        ? "opcao checked"
                        : "opcao"
                    }
                  >
                    Kit 2: Todos os Produtos (Sem Carrinho Gourmet)
                  </label>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SubopcoesForm;
