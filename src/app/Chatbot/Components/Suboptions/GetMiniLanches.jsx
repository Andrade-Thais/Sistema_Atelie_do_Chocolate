import React from "react";
import "./styles.css";

const GetMiniLanches = (props) => {
  const suboptions = [
    {
      texts: ["Mini Hambúrguer", "Mini Hotdog"],
      handler: props.actionProvider.handleTiposMiniLanches,
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

export { GetMiniLanches };
