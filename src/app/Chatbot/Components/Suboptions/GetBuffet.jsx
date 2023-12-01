import React from "react";
import "./styles.css";

const GetBuffet = (props) => {
  const suboptions = [
    {
      text: "Serviços de Buffet",
      handler: props.actionProvider.handleTiposSalgados,
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

export { GetBuffet };
