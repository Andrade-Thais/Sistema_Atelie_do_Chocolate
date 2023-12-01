import React from "react";

const UserForm = ({ data, updateFieldHandler, handleAvancar }) => {
  return (
    <div className="full-form">
      <h2>Informações do Cliente</h2>
      <p>
        Por gentileza, preencha ou altere suas informações para realizar seu
        pedido.
      </p>

      <div className="form-control">
        <label htmlFor="name" className="label">
          Nome Completo:{" "}
        </label>
        <input
          type="text"
          name="text"
          id="name"
          className="input"
          value={data.nome || ""}
          onChange={(e) => updateFieldHandler("nome", e.target.value)}
          placeholder="Digite o seu nome: "
        />
      </div>
      <div className="form-control">
        <label htmlFor="email" className="label">
          E-mail:{" "}
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="input"
          placeholder="Digite o seu e-mail para contato: "
          value={data.email || ""}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
        />
      </div>
    </div>
  );
};

export default UserForm;
