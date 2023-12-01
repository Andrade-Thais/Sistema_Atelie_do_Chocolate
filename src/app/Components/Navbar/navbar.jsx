import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { AuthContext } from "../../Auth/Context/auth";
import logo from "./atelieIMG.png";

function Navbar() {
  const { logado, handleLogout, userType, adminUserID, userID } =
    useContext(AuthContext);

  return (
    <header className="menu">
      <nav className="navbar navbar-expand-xl rosa">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logotipo" className="logotipo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {userType === "admin" && userID === adminUserID && logado && (
                <>
                  <li className="nav-item">
                    <Link to="/app/admin/home" className="nav-link">
                      Página Inicial
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/app/admin/gerenciamento-clientes"
                      className="nav-link"
                    >
                      Gerenciamento de Clientes
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/app/admin/gerenciamento-pedidos"
                      className="nav-link"
                    >
                      Gerenciar Pedidos
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/app/ajuda" className="nav-link">
                      Ajuda
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" onClick={handleLogout} className="nav-link">
                      Sair
                    </Link>
                  </li>
                </>
              )}
              {userType === "cliente" && logado && (
                <>
                  <li className="nav-item">
                    <Link to="/app/meu-perfil" className="nav-link">
                      Meu Perfil
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/app/novo-pedido" className="nav-link">
                      Novo Pedido
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/app/acompanhar-pedidos" className="nav-link">
                      Acompanhar pedidos
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/app/avaliar-pedidos" className="nav-link">
                      Avalie seu pedido!
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/app/ajuda" className="nav-link">
                      Ajuda
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" onClick={handleLogout} className="nav-link">
                      Sair
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className="rosa-escuro"></div>
    </header>
  );
}

export default Navbar;
