import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../app/Auth/Context/auth";

const Menu = () => {
  const { logado, userType, handleLogout } = useContext(AuthContext);
  const history = useHistory();

  function renderLink() {
    if (logado) {
      if (userType === "admin") {
        return (
          <Link to="/app/admin/home" className="nav-link">
            Área do Administrador
          </Link>
        );
      } else {
        return (
          <Link to="/app/meu-perfil" className="nav-link">
            Área do Cliente
          </Link>
        );
      }
    } else {
      return (
        <Link to="/app/login" className="nav-link">
          Login
        </Link>
      );
    }
  }

  const handleLogoutClick = () => {
    handleLogout();
    history.push("/");
  };
  return (
    <header className="menu">
      <nav className="navbar navbar-expand-xl rosa">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="../assets/atelieIMG.png"
              alt="Logotipo"
              className="logotipo"
            />
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
              <li className="nav-item">
                <a className="nav-link" href="#servicos">
                  Serviços oferecidos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#avaliacoes">
                  Avaliações
                </a>
              </li>
              <li className="nav-item">{renderLink()}</li>
              {logado && (
                <li className="nav-item">
                  <button className="nav-link" onClick={handleLogoutClick}>
                    Sair
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className="rosa-escuro"></div>
    </header>
  );
};

export { Menu };
