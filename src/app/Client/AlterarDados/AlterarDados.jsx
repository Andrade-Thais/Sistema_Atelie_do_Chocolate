import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import firebase from "../../Config/firebase";
import "firebase/auth";

import Navbar from "../../Components/Navbar/navbar";

function AlterarDados() {
  const [nomecompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (user) {
      setCurrentUser(user);
      const db = firebase.firestore();
      const usuarios = db.collection("usuarios");

      usuarios
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            const userData = doc.data();
            setNomeCompleto(userData.nomecompleto || "");
            setEmail(userData.email || "");
            setTelefone(userData.telefone || "");
            setCep(userData.cep || "");
            setNumero(userData.numero || "");
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    }
  }, []);

  function atualizarDados() {
    setMensagem("");

    if (!nomecompleto || !email || !telefone || !cep || !numero) {
      setMensagem("Informe todos os campos!");
      return;
    }

    const db = firebase.firestore();
    const usuarios = db.collection("usuarios");
    const idUsuario = currentUser.uid;

    usuarios
      .doc(idUsuario)
      .update({
        nomecompleto: nomecompleto,
        email: email,
        telefone: telefone,
        cep: cep,
        numero: numero,
      })
      .then(() => {
        setSucesso("S");
      })
      .catch((error) => {
        setSucesso("N");
        setMensagem("Erro ao atualizar dados: " + error.message);
      });
  }

  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="d-flex align-items-center text-center form-container">
        <form className="form-signin">
          <h1 className="h3 mb-3 fw-normal">Atualize seus Dados</h1>

          <div className="form-floating">
            <span>Nome completo:</span>
            <input
              value={nomecompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Nome Completo"
            />
          </div>

          <div className="form-floating">
            <span>E-mail:</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="E-mail"
            />
          </div>
          <div className="form-floating">
            <span>CEP:</span>
            <input
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="E-mail"
            />
          </div>
          <div className="form-floating">
            <span>Numero:</span>
            <input
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="E-mail"
            />
          </div>
          <div className="form-floating">
            <span>Telefone:</span>
            <input
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="E-mail"
            />
          </div>

          <button
            onClick={atualizarDados}
            className="w-100 btn btn-lg btn-primary submit"
            type="button"
          >
            Atualizar Dados
          </button>

          {mensagem.length > 0 ? (
            <div className="alert alert-danger mt-2" role="alert">
              {mensagem}
            </div>
          ) : null}
          {sucesso === "S" ? <Redirect to="/app/meu-perfil" /> : null}

          <div className="login-links mt-5">
            <Link to="/app/meu-perfil" className="mx-3">
              Voltar para o perfil
            </Link>
          </div>

          <p className="mt-5 mb-3 text-muted">
            &copy; Desenvolvido por Equipe BooleanTech
          </p>
        </form>
      </div>
    </>
  );
}

export default AlterarDados;
