import React from "react";
import "./styles.css";

const GetDoces = (props) => {
  const suboptions = [
    {
      texts: [
        "Brigadeiro",
        "Beijinho",
        "Brigadeiro de Paçoca",
        "Bicho de Pé",
        "Brigadeiro de Nutella",
        "Brigadeiro de Ninho",
        "Brigadeiro de Churros",
        "Cascata de Chocolate",
      ],
      handler: props.actionProvider.handleTiposDoces,
      id: 1,
    },
  ];

  const buttonsMarkup = suboptions.map((suboption) => (
    <div key={suboption.id}>
      {suboption.texts &&
        suboption.texts.map((text, index) => (
          <button key={index} className="option-button" disabled>
            {text}
          </button>
        ))}
    </div>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export { GetDoces };
