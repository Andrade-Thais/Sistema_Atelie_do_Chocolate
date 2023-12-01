import React from 'react';


function Features() {
    return <section id="features">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 features-box">
                <i className="icon fa-solid fa-check-double fa-5x"></i>
                <h3> Fácil de usar</h3>
                <p> Faça seu cadastro</p>
                </div>

                <div className="col-lg-4 features-box">
                <i className="icon fa-solid fa-phone fa-3x"></i>
                    <h3>Venha realizar seu sonho conosco</h3>
                    <p>Entre em contato e faça um orçamento</p>
                </div>

                <div className="col-lg-4 features-box">
                <i className="icon fa-solid fa-heart fa-4x"></i>
                    <h3>Estamos te esperando</h3>
                    <p> Seu Senho, nossa maior realização!</p>
                </div>


            </div>
        </div>

    </section>
}

export default Features