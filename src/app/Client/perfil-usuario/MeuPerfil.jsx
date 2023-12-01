import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/navbar";
import firebase from "firebase/app";
import "firebase/firestore";
import { AuthContext } from "../../Auth/Context/auth";
import "./styles.css";
import { Link } from "react-router-dom";

function MeuPerfil() {
  const [userName, setUserName] = useState("");
  const [pedidos, setPedidos] = useState([]);
  const { userID, logado, userType } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    async function LoadUserName() {
      try {
        if (logado && userType === "cliente") {
          const db = firebase.firestore();
          const UsuarioRef = db.collection("usuarios").doc(userID);
          const Usuario = await UsuarioRef.get();
          const username = Usuario.data().nomecompleto;

          setUserName(username);
        } else {
          console.log("Algo deu errado.");
        }
      } catch (error) {
        console.error("Erro ao carregar o nome do usuário:", error);
      }
    }

    async function LoadPedidos() {
      try {
        if (logado && userType === "cliente" && userID) {
          const db = firebase.firestore();
          const usuariosRef = db.collection("usuarios");
          const userRef = usuariosRef.doc(userID);
          const pedidosRef = userRef.collection("pedidos");

          const querySnapshot = await pedidosRef
            .orderBy("numero", "desc")
            .limit(1)
            .get();
          const pedidosData = querySnapshot.docs.map((doc) => {
            const data = doc.data();

            return {
              id: doc.id,
              ...data,

              dataPedido:
                data && data.dataPedido && data.dataPedido.toDate
                  ? data.dataPedido.toDate().toLocaleString()
                  : null,
            };
          });

          setPedidos(pedidosData);
        } else {
          console.log("Algo deu errado.");
        }
      } catch (error) {
        console.error("Erro ao carregar os pedidos:", error);
      }
    }

    LoadUserName();
    LoadPedidos();
  }, [userID, logado, userType]);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  function renderItensQuantidades(itensQuantidades) {
    if (itensQuantidades && itensQuantidades.length > 0) {
      return itensQuantidades.map((item, index) => <p key={index}>{item}</p>);
    } else {
      return <p></p>;
    }
  }
  return (
    <>
      <Navbar />

      <div className="dashboard">
        <div className={`custom-dropdown ${isDropdownOpen ? "open" : ""}`}>
          <div className="dropdown-title" onClick={toggleDropdown}>
            Bem-vindo(a), {userName}!
            <span className={`arrow ${isDropdownOpen ? "up" : "down"}`}></span>
          </div>
          <ul className="dropdown-menu">
            <li>
              <Link to="/app/alterar-dados" className="dropdown-item">
                Alterar minhas informações
              </Link>
            </li>
            <li>
              <Link to="/app/alterar-senha" className="dropdown-item">
                Alterar minha senha
              </Link>
            </li>
            <li>
              <Link to="/app/avaliar-pedidos" className="dropdown-item">
                Avalie seus pedidos!
              </Link>
            </li>
            <li>
              <Link to="/app/novo-pedido" className="dropdown-item">
                Peça aqui nossos deliciosos produtos!
              </Link>
            </li>
            <li>
              <Link to="/app/acompanhar-pedidos" className="dropdown-item">
                Acompanhe seus pedidos!
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="welcome-message">Confira os seus pedidos já realizados!</p>
      <div className="dashboard">
        <section id="pedidos" className="ultimosPedidos">
          <br />
          <h2 className="ultimosPedidos__header">Últimos Pedidos</h2>
          <table className="table ultimosPedidos__body">
            <thead>
              <tr>
                <th>Número do Pedido</th>
                <th>Data do Pedido</th>
                <th>Itens do Pedido</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map((pedido) => (
                <tr key={pedido.id}>
                  <td>{pedido.numero}</td>
                  <td>{pedido.dataPedido}</td>
                  <td>{renderItensQuantidades(pedido.itensQuantidades)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}

export default MeuPerfil;
