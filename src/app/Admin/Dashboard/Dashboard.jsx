import React, { useState } from "react";
import Navbar from "../../Components/Navbar/navbar";
import GraficoPedidos from "../../Components/Dashboard/Chart/GraficoPedidos";
import Tabela from "../../Components/Dashboard/Tabela/tabela";
import { CustomIframe } from "../../Components/Iframes/Iframes";
import "./styles.css";

export const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <h1 className="title">Ateliê do Chocolate - Página Inicial</h1>
      <div className="container">
        <div style={{ marginTop: "5%" }}>
          <div className="row text-center container col-3 col-md-6 col-sm-12">
            <div
              className="col-3 col-md-6 col-sm-12 intro-cards"
              style={{ justifyContent: "space-evenly" }}
            >
              <div className="col-sm-2 mb-2">
                <div className="card status">
                  <div className="card-body">
                    <h5 className="card-title">20</h5>
                    <p className="card-text">Pedidos em aberto</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-2 mb-2">
                <div className="card status">
                  <div className="card-body">
                    <h5 className="card-title">27</h5>
                    <p className="card-text">Pedidos Finalizados</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-2 mb-2">
                <div className="card status">
                  <div className="card-body">
                    <h5 className="card-title">2</h5>
                    <p className="card-text">Pedidos em Andamento</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-2 mb-2">
                <div className="card status">
                  <div className="card-body">
                    <h5 className="card-title">0</h5>
                    <p className="card-text">Pedidos Cancelados</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 g-2">
              <div className="col">
                <div className="card card-frame h-100">
                  <CustomIframe title="Gráfico de Pedidos" className="iframe">
                    <GraficoPedidos className="graficos" />
                  </CustomIframe>
                  <div className="card-header">
                    <h5 className="card-title">Pedidos nos Últimos 30 dias</h5>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card card-frame h-100">
                  <div>
                    <CustomIframe title="Gráfico de Vendas" className="iframe">
                      <Tabela className="graficos" />
                    </CustomIframe>
                  </div>
                  <div className="card-header">
                    <h5 className="card-title">Gráfico de vendas</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-md-1 g-1">
              <div
                className="card card-frame text-center px-0"
                style={{ marginTop: "5%", position: "relative", left: "auto" }}
              >
                <div className="card-header" style={{ margin: "0" }}>
                  Chats
                </div>
                <div className="card-body">
                  <h5 className="card-title">Últimos pedidos</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
