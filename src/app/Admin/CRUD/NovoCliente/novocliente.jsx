import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../../../Components/Navbar/navbar";
import "./novocliente.css";
import firebase from "../../../Config/firebase";

function NovoCliente() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [fone, setFone] = useState("");
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [sucesso, setSucesso] = useState("N");
  const db = firebase.firestore();

  function CadastrarCliente() {
    if (nome.length === 0) {
      setMensagem("Informe o nome");
    } else if (email.length === 0) {
      setMensagem("Informe o e-mail");
    } else if (fone.length === 0) {
      setMensagem("Informe o e-mail");
    } else if (cep.length === 0) {
      setMensagem("Informe o e-mail");
    } else if (numero.length === 0) {
      setMensagem("Informe o e-mail");
    } else {
      db.collection("usuarios")
        .add({
          nomecompleto: nome,
          email: email,
          telefone: fone,
          cep: cep,
          numero: numero,
          tipo: "cliente",
        })
        .then(() => {
          setMensagem("");
          setSucesso("S");
        })
        .catch((erro) => {
          setMensagem(erro);
          setSucesso("N");
        });
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="offset-lg-3 col-lg-6 cont">
          <h1 className="titulo">Novo Cliente</h1>
          <p>
            Deseja adicionar um cliente manualmente? Insira os dados e clique em
            salvar!
          </p>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Nome
              </label>
              <input
                onChange={(e) => setNome(e.target.value)}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                E-mail
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Telefone
              </label>
              <input
                onChange={(e) => setFone(e.target.value)}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                CEP
              </label>
              <input
                onChange={(e) => setCep(e.target.value)}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Número
              </label>
              <input
                onChange={(e) => setNumero(e.target.value)}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="text-center">
              <Link
                to="/app/admin/home"
                className="btn btn-outline-primary btn-acao cancel"
              >
                Cancelar
              </Link>
              <button
                onClick={CadastrarCliente}
                type="button"
                className="btn btn-primary btn-acao submit"
              >
                Salvar
              </button>
            </div>

            {mensagem.length > 0 ? (
              <div className="alert alert-danger mt-2" role="alert">
                {mensagem}
              </div>
            ) : null}
            {sucesso === "S" ? <Redirect to="/app/admin/home" /> : null}
          </form>
        </div>
      </div>
    </div>
  );
}

export default NovoCliente;
