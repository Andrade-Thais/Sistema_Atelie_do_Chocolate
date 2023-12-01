import React from "react";
import usuario from "./assets/Usuario.png";

function Avaliacoes() {
  return (
    <section id="avaliacoes">
      <div className="container">
        <h1 style={{ fontSize: "7.5vw" }}>Confira nossas avaliações!</h1>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
              <h5>
                "Muito obrigada pelo trabalho e dedicação de vocês em um dia tão
                especial como foi o aniversário de 1 ano do meu filho amado. A
                equipe é maravilhosa, extremamente profissionais, atenciosas e
                educadas. Serviram muito bem meus convidados."
              </h5>
              <img src={usuario} alt="ícone de usuário" />
              <em> Sueli Silva - São Paulo</em>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <h5>
                {" "}
                "Quero deixar registrada a minha imensa satisfação em ter
                comemorado o aniversário do meu filho com o trabalho de vocês!
                Impressionante a dedicação e o carinho com tudo. Eu amei tudo
                que foi feito. Todos amaram! Se eu tiver oportunidade, com
                certeza eu vou indicar! É nítido o amor que você trabalha, cada
                comida feita com carinho e dedicação. Tudo servido com amor,
                velocidade e de forma organizada."
              </h5>
              <img src={usuario} alt="ícone de usuário" />
              <em> Barbara Borges - São Paulo</em>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <h5>
                "Vocês arrasam. Obrigada por fazer meu sonho se tornar realidade
                mais uma vez!"
              </h5>
              <img src={usuario} alt="ícone de usuário" />
              <em> Ana Paula Soares - São Paulo</em>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Avaliacoes;
