import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./resetsenha.css";
import { Menu } from "../../../site/Components/menu";

import firebase from "../../Config/firebase";
import "firebase/auth";

function ResetSenha() {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [sucesso, setSucesso] = useState("");

  function recuperarSenha() {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then((resultado) => {
        setMensagem("");
        if (resultado) {
          setSucesso("Email enviado com sucesso!");
        } else {
          setMensagem("Erro ao enviar e-mail: conta inexistente.");
        }
      })
      .catch((erro) => {
        setSucesso("");
        setMensagem("Erro ao enviar email. Tente novamente mais tarde.");
      });
  }

  return (
    <>
      <Menu />
      <div className="d-flex align-items-center text-center form-container">
        <form className="cont form-signin">
          <h1 className="h3 mb-3 fw-normal">Esqueceu sua senha?</h1>
          <p>Enviaremos um e-mail de recuperação de senha!</p>
          <br />
          <div className="form-floating">
            <span>E-mail cadastrado:</span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="Digite o e-mail cadastrado..."
            />
          </div>

          <button
            onClick={recuperarSenha}
            className="w-100 btn btn-lg btn-primary mt-3 submit"
            type="button"
          >
            Enviar
          </button>

          {mensagem.length > 0 ? (
            <div className="alert alert-danger mt-2" role="alert">
              {mensagem}
            </div>
          ) : null}
          {sucesso.length > 0 ? (
            <div className="alert alert-success mt-2" role="alert">
              {sucesso}
            </div>
          ) : null}

          <div className="login-links mt-5">
            <Link to="/app/novaconta" className="mx-3">
              Criar uma conta.
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

export default ResetSenha;
