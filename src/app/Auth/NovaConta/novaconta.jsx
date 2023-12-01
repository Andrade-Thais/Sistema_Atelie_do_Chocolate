import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./novaconta.css";
import firebase from "../../Config/firebase";
import { deleteDoc } from "firebase/firestore";
import "firebase/auth";
import { Menu } from "../../../site/Components/menu";
import { generatePedidoNumber } from "../../Utils/UtilFunctions";
import bcrypt from "bcryptjs";

function NovaConta() {
  const [nomecompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState([]);
  const [sucesso, setSucesso] = useState("");

  function cadastrarUsuario() {
    setErros([]);

    if (!nomecompleto || !email || !telefone || !cep || !numero || !senha) {
      setErros(["Informe todos os campos!"]);
      return;
    }

    if (senha.length < 6) {
      setErros(["A senha deve ter pelo menos 6 caracteres"]);
      return;
    }

    const saltRounds = 10;
    bcrypt.hash(senha, saltRounds, (err, hash) => {
      if (err) {
        console.error("Erro ao criar hash da senha:", err);
        return;
      }

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha)
        .then((resultado) => {
          setSucesso("S");

          const db = firebase.firestore();
          const usuarios = db.collection("usuarios");
          const idUsuario = resultado.user.uid;

          usuarios
            .doc(idUsuario)
            .set({
              nomecompleto: nomecompleto,
              email: email,
              telefone: telefone,
              cep: cep,
              numero: numero,
              tipo: "cliente",
            })
            .then(() => {
              const pedidos = usuarios.doc(idUsuario).collection("pedidos");
              pedidos.add({
                cliente: nomecompleto,
                emAberto: false,
                emAndamento: false,
                concluido: false,
                itens: "",
                dataPedido: new Date(),
                numero: 0,
              });
            })
            .catch((error) => {
              setSucesso("N");
              if (error.code === "auth/weak-password") {
                setErros(["A senha deve ter pelo menos 6 caracteres"]);
              } else if (error.code === "auth/email-already-in-use") {
                setErros(["Esse email já está em uso por outra conta"]);
              } else {
                setErros(["Erro ao criar conta: " + error.message]);
              }
            });
        });
    });
  }

  return (
    <>
      <Menu />
      <div className="d-flex align-items-center text-center form-container">
        <form className="form-signin signupForm">
          <h1 className="h3 mb-3 fw-normal">Criar Conta</h1>
          <p>
            Ainda não possui uma conta? Faça seu cadastro e aproveite nosso
            catálogo!
          </p>

          <div className="form-floating">
            <span>Nome completo:</span>
            <input
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
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="E-mail"
            />
          </div>
          <div className="form-floating">
            <span>Celular:</span>
            <input
              onChange={(e) => setTelefone(e.target.value)}
              type="tel"
              className="form-control"
              id="floatingInput"
              placeholder="E-mail"
            />
          </div>
          <div className="form-floating">
            <span>CEP:</span>
            <input
              onChange={(e) => setCep(e.target.value)}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="E-mail"
            />
          </div>
          <div className="form-floating">
            <span>Número:</span>
            <input
              onChange={(e) => setNumero(e.target.value)}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="E-mail"
            />
          </div>
          <div className="form-floating">
            <span>Senha:</span>
            <input
              onChange={(e) => setSenha(e.target.value)}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Senha"
            />
          </div>

          <button
            onClick={cadastrarUsuario}
            className="w-100 btn btn-lg btn-primary submit"
            type="button"
          >
            Criar conta
          </button>

          {erros.length > 0 && (
            <div className="alert alert-danger mt-2" role="alert">
              {erros.map((erro, index) => (
                <p key={index} className="mb-0">
                  {erro}
                </p>
              ))}
            </div>
          )}

          {sucesso === "S" && <Redirect to="/app/meu-perfil" />}

          <div className="login-links mt-5">
            <Link to="/app/login" className="mx-3">
              Já tenho uma conta.
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

export default NovaConta;
