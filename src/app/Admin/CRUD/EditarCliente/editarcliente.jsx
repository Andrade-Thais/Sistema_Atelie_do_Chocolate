import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../../../Components/Navbar/navbar";
import "./editarcliente.css";
import firebase from "../../../Config/firebase";
import "firebase/firestore";
import "./editarcliente.css";

function EditarCliente(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [sucesso, setSucesso] = useState("N");
  const db = firebase.firestore();

  useEffect(() => {
    firebase
      .firestore()
      .collection("usuarios")
      .doc(props.match.params.id)
      .get()
      .then((resultado) => {
        setNome(resultado.data().nome);
        setEmail(resultado.data().email);
        setTelefone(resultado.data().telefone);
        setCep(resultado.data().telefone);
        setNumero(resultado.data().numero);
      });
  }, [props.match.params.id]);

  function AlterarCliente() {
    if (nome.length === 0) {
      setMensagem("Informe o nome");
    } else if (email.length === 0) {
      setMensagem("Informe o e-mail");
    } else if (telefone.length === 0) {
      setMensagem("Informe o telefone");
    } else if (cep.length === 0) {
      setMensagem("Informe o CEP");
    } else if (email.length === 0) {
      setMensagem("Informe o número");
    } else {
      db.collection("usuarios")
        .doc(props.match.params.id)
        .update({
          nome: nome,
          email: email,
          telefone: telefone,
          cep: cep,
          numero: numero,
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
      <div className="container-fluid form">
        <div>
          <h1 style={{ textAlign: "center" }}>Editar Cliente</h1>
          <form className="form_fields">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Código
              </label>
              <input
                type="text"
                value={props.match.params.id}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                disabled
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Nome
              </label>
              <input
                onChange={(e) => setNome(e.target.value)}
                value={nome}
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
                value={email}
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
                onChange={(e) => setTelefone(e.target.value)}
                value={telefone}
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
                value={cep}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="text-center">
              <Link to="/app/admin/home" className="btn btn-primary submit">
                Cancelar
              </Link>
              <button
                onClick={AlterarCliente}
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
            {sucesso === "S" ? (
              <Redirect to="/app/admin/gerenciamento-clientes" />
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditarCliente;
