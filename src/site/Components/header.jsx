import React from 'react';

function Menu() {
    return <nav className="navbar fixed-top navbar-expand-md bg-body-tertiary">

        <div className="container">


            <a className="navbar-brand" href="/">
                <img src="imagens/logotipo.png" alt="Bootstrap" height="80" />
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#banner">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#servicos">Serviços</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Galeria</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#avaliacoes">Avaliações</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                </ul>
            </div>

        </div>

    </nav>;
}

export default Menu;