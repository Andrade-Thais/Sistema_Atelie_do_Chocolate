import React from "react";

const UserForm = ({ data, updateFieldHandler, handleAvancar }) => {
  return (
    <div className="full-form">
      <h2>Informações do Cliente</h2>
      <p>
        Por gentileza, preencha as informações do cliente para criar o pedido.
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
          placeholder="Digite o nome do cliente: "
        />
      </div>
      <div className="form-control">
        <label htmlFor="idCliente" className="label">
          ID do Cliente (Disponível na página de Gerenciamento de Clientes):{" "}
        </label>
        <input
          type="text"
          name="idCliente"
          id="idCliente"
          className="input"
          placeholder="Digite o ID do cliente: "
          value={data.idCliente || ""}
          onChange={(e) => updateFieldHandler("idCliente", e.target.value)}
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
          placeholder="Digite o e-mail do cliente para contato: "
          value={data.email || ""}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
        />
      </div>
    </div>
  );
};

export default UserForm;
