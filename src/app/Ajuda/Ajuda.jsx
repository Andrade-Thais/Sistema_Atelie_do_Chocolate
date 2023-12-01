import React, { useState, useEffect, useContext } from "react";
import Navbar from "../Components/Navbar/navbar";
import "./ajuda.css";
import firebase from "firebase/app";
import "firebase/firestore";
import SweetAlert from "react-bootstrap-sweetalert";
import "firebase/auth";
import { AuthContext } from "../Auth/Context/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Ajuda() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const history = useHistory();
  const db = firebase.firestore();
  const ajudaRef = db.collection("ajuda");
  const { userID } = useContext(AuthContext);

  const sendMessage = async () => {
    const user = firebase.auth().currentUser;
    if (!user) {
      throw new Error("User not found");
    }

    try {
      const messageSent = await ajudaRef.add({
        idUsuario: userID,
        nome: nome,
        email: email,
        mensagem: mensagem,
      });

      setMessageSent(true);
      return messageSent;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  };

  const handleShowModal = () => {
    setShowConfirmationPopup(true);
  };

  const hideSuccessAlert = () => {
    setShowConfirmationPopup(false);
    history.go(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendMessage();
      handleShowModal();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      <Navbar />
      <h1 className="heading">Ajuda</h1>
      <main>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "50px" }}>
            <h3>1. Prencha seus dados de cadastro</h3>
            <label>Nome completo:</label>
            <input
              className="ajuda__input"
              placeholder="Digite seu nome completo..."
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <label>Email Cadastrado na plataforma:</label>
            <input
              className="ajuda__input"
              placeholder="Digite seu e-mail..."
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <h3>2. Digite sua mensagem (até 8000 caracteres)</h3>
            <textarea
              className="ajuda__textarea"
              placeholder="Digite sua mensagem da forma mais detalhada possível..."
              maxLength="8000"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            ></textarea>
          </div>

          <div style={{ margin: "10px" }}>
            <button className="submit" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </main>
      {messageSent && (
        <SweetAlert
          success
          title="Mensagem enviada!"
          onConfirm={hideSuccessAlert}
        >
          Mensagem enviada com sucesso. O prazo de resposta é de 5 dias úteis!
        </SweetAlert>
      )}
    </>
  );
}

export default Ajuda;
