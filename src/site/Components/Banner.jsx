import React, { useContext } from "react";
import perfil from "./assets/Perfil.png";
import { AuthContext } from "../../app/Auth/Context/auth";
import { SecureRoute } from "../../app/Components/SecureRoute/SecureRoute";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Banner() {
  const { logado, userType } = useContext(AuthContext);

  return (
    <section id="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 info">
            <h1 className="title">
              {" "}
              Um novo conceito de festas para realizar seu sonho!
            </h1>
            <h4 className="text">Entre em contato para maiores informações.</h4>
            <div className="button__div">
              {logado && userType === "cliente" ? (
                <SecureRoute allowedUserType="cliente" to="/app/meu-perfil">
                  <Link to="/app/meu-perfil" className="button">
                    Página Inicial
                  </Link>
                </SecureRoute>
              ) : (
                <>
                  <Link to="/app/novaconta" className="button">
                    Criar Conta
                  </Link>
                  <Link to="/app/login" className="button">
                    Fazer Login
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="col-lg-6 img__profile">
            <img src={perfil} alt="ketlyn" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
