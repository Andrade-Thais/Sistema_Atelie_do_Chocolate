import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import Navbar from "../../Components/Navbar/navbar";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

const AlterarSenha = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [sucesso, setSucesso] = useState("");

  const handleChangePassword = (e) => {
    e.preventDefault();
    setMensagem("");
    if (oldPassword === newPassword) {
      setMensagem("Informe uma senha diferente");
      return;
    }
    const user = firebase.auth().currentUser;
    const credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      oldPassword
    );

    user
      .reauthenticateWithCredential(credential)
      .then(() => {
        return user.updatePassword(newPassword);
      })
      .then(() => {
        setSucesso("S");
        setOldPassword("");
        setNewPassword("");
      })
      .catch((error) => {
        console.error(error);
        setSucesso("N");
      });
  };

  return (
    <>
      <Navbar />
      <div className="d-flex align-items-center text-center form-container">
        <form className="form-signin" style={{ marginTop: 7.5 + "rem" }}>
          <h1 className="h3 mb-3 fw-normal">Aterar Senha</h1>
          <p>Deseja alterar sua senha? Digite sua senha atual e atualize-a.</p>
          <div className="form-floating">
            <input
              type="password"
              placeholder="Senha Atual"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-floating">
            <input
              type="password"
              placeholder="Nova Senha"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <button
            onClick={handleChangePassword}
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
};

export default AlterarSenha;
