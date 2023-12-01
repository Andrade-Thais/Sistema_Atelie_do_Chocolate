import React from "react";

function Servicos() {
  return (
    <section id="servicos">
      <div className="container">
        <div className="row text-center">
          <div className="titulo">
            <h1 style={{ fontSize: "10vw" }}>Serviços</h1>
            <p>Confira os valores de cada serviço.</p>
          </div>
        </div>

        <div className="row text-center box-servicos">
          <div className="col-lg-4 box-servico">
            <div className="card">
              <div className="card-header servicos__header">
                <h1>Doces e Salgados</h1>
              </div>
              <div className="card-body">
                <h2>À partir de R$90,00.</h2>
                <p>Bolo - R$75,00 (à partir)</p>
                <p>Docinhos - R$ 80,00 (à partir)</p>
                <p>Salgados diversos - R$ 70,00 (à partir)</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 box-servico">
            <div className="card">
              <div className="card-header servicos__header">
                <h1>Carrinhos Gourmet</h1>
              </div>
              <div className="card-body">
                <p>
                  Carrinho Gourmet de Algodão Doce e Pipoca Salgada - R$
                  100,00/hora (à partir)
                </p>
                <p>
                  Carrinho Gourmet de Crepe Suíço - R$ 10,00/ por convidado (à
                  partir)
                </p>
                <p>
                  Carrinho Gourmet de Cascata de Chocolate - R$15,00/ por
                  convidado (à partir)
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 box-servico">
            <div className="card">
              <div className="card-header servicos__header">
                <h1>Serviços de Buffet Completo</h1>
              </div>
              <div className="card-body">
                <p>
                  Serviços disponível somente sob consulta. Entre em contato
                  para mais informações
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicos;
