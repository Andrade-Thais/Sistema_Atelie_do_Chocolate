import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar/navbar";
import ListaClientes from "../ListaCliente/listacliente";
import "./home.css";
import firebase from "../../../Config/firebase";
import "firebase/firestore";
import SweetAlert from "react-bootstrap-sweetalert";

function Home() {
  const [clientes, setClientes] = useState([]);
  const [busca, setBusca] = useState("");
  const [texto, setTexto] = useState("");
  const [excluido, setExcluido] = useState("");
  const [confirmacao, setConfirmacao] = useState(false);
  const [confirmacaoId, setConfirmacaoId] = useState("");

  function deleteUser(id) {
    firebase
      .firestore()
      .collection("usuarios")
      .doc(id)
      .delete()
      .then(() => {
        setExcluido(id);
        setConfirmacao(false);
      });
  }

  function confirmDeleteUser(id) {
    setConfirmacaoId(id);
    setConfirmacao(true);
  }

  useEffect(() => {
    const listaCli = [];

    const unsubscribe = firebase
      .firestore()
      .collection("usuarios")
      .where("nomecompleto", ">=", busca)
      .where("nomecompleto", "<=", busca + "\uf8ff")
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          listaCli.push({
            id: doc.id,
            nome: doc.data().nomecompleto,
            email: doc.data().email,
            telefone: doc.data().telefone,
            cep: doc.data().cep,
            numero: doc.data().numero,
          });
        });
        setClientes(listaCli);
      });

    return () => {
      // Para de ouvir as alterações ao desmontar o componente
      unsubscribe();
    };
  }, [busca, excluido]);

  return (
    <div>
      <Navbar />
      <div className="container-fluid cont">
        <h1 className="titulo">CRUD de Clientes - Ateliê do Chocolate</h1>
        <p className="center description">
          Um CRUD é como um "organizador" de informações em um aplicativo ou
          sistema. Ele permite criar, ler, atualizar e apagar dados. É como uma
          agenda onde você pode adicionar novos contatos (Criar), ver
          informações de contatos existentes (Ler), editar os detalhes de um
          contato (Atualizar) ou remover um contato (Apagar). O CRUD ajuda a
          gerenciar informações de maneira fácil e eficaz.
        </p>
        <div className="row links-container">
          <div className="col-4 link__button">
            <Link
              to="/app/admin/novo-pedido-admin"
              className="btn btn-primary submit"
            >
              <i className="fas fa-plus"></i>Novo Pedido
            </Link>
          </div>
          <div className="col-4 link__button">
            <Link
              to="/app/admin/novocliente"
              className="btn btn-primary submit"
              type="button"
            >
              <i className="fas fa-plus"></i>Novo Cliente
            </Link>
          </div>

          <div className="col-8">
            <div className="input-group mb-3 pesquisar">
              <input
                onChange={(e) => setTexto(e.target.value)}
                type="text"
                className="form-control search pesquisar__input"
                placeholder="Pesquisar..."
                aria-describedby="button-addon2"
              />
              <button
                onClick={(e) => setBusca(texto)}
                className="btn btn-primary submit pesquisar__button"
                type="button submit"
                id="button-addon2"
              >
                <i className="fas fa-search"></i> Pesquisar
              </button>
            </div>
          </div>
        </div>

        <ListaClientes
          arrayClientes={clientes}
          clickDelete={confirmDeleteUser}
        />

        {confirmacao ? (
          <SweetAlert
            warning
            showCancel
            showCloseButton
            confirmBtnText="Sim"
            confirmBtnBsStyle="danger"
            cancelBtnText="Não"
            cancelBtnBsStyle="light"
            title="Exclusão"
            onConfirm={() => deleteUser(confirmacaoId)}
            onCancel={() => setConfirmacao(false)}
            reverseButtons={true}
          >
            Deseja excluir o cliente selecionado?
          </SweetAlert>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
