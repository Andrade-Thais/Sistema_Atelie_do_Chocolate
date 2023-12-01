import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import "./login.css";
import { AuthContext } from "../../Auth/Context/auth";
import firebase from "../../Config/firebase";
import "firebase/auth";
import { Menu } from "../../../site/Components/menu";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [sucesso, setSucesso] = useState("");
  const { setLogado, userType, adminUserID, userID } = useContext(AuthContext);

  function LoginUsuario() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(function(firebaseUser) {
        localStorage.setItem("logado", "S");
        setLogado(true);
        setSucesso("S");
      })
      .catch(function(error) {
        localStorage.setItem("logado", "N");
        setLogado(false);
        setSucesso("N");
      });
  }

  function alterarEmail(event) {
    setEmail(event.target.value);
  }

  function alterarSenha(event) {
    setSenha(event.target.value);
  }

  return (
    <>
      <Menu />
      <div className="d-flex align-items-center text-center form-container">
        <form className="form-signin">
          <h1 className="h3 mb-3 fw-normal">Login</h1>
          <p>Faça seu login e aproveite nosso catálogo!</p>
          <hr />
          <div className="form-floating">
            <span>E-mail:</span>
            <input
              onChange={alterarEmail}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="E-mail"
            />
          </div>

          <div className="form-floating">
            <span>Senha:</span>
            <input
              onChange={alterarSenha}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Senha"
            />
          </div>

          <button
            onClick={LoginUsuario}
            className="w-100 btn btn-lg btn-primary submit"
            type="button"
          >
            Acessar
          </button>

          {sucesso === "N" ? (
            <div className="alert alert-danger mt-2" role="alert">
              E-mail ou senha inválida.
            </div>
          ) : null}
          {sucesso === "S" && userID === "xlSBLZr64BODo1EkiD78aZQvQL72" ? (
            <Redirect to="/" />
          ) : null}
          {sucesso === "S" && userID !== adminUserID ? (
            <Redirect to="/" />
          ) : null}

          <div className="login-links mt-5">
            <Link to="/app/resetsenha" className="mx-3">
              Esqueci minha senha
            </Link>
            <Link to="/app/novaconta" className="mx-3">
              Criar uma conta
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

export default Login;
