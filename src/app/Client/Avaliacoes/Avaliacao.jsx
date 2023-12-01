import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "./components/userForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";
import Navbar from "../../Components/Navbar/navbar";
import firebase from "firebase/app";
import "firebase/firestore";

//hooks
import { useForm } from "../PedidoForm/Hooks/UseForm";
import { useState, useEffect } from "react";
import "../PedidoForm/PedidoForm.css";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function Avaliacao() {
  const [userId, setUserId] = useState(null);
  const [pedidos, setPedidos] = useState([]);
  const [selectPedidos, setSelectPedidos] = useState("");
  const [avaliacao, setAvaliacao] = useState("");
  const [nota, setNota] = useState(1);
  const [data, setData] = useState(formTemplate);

  useEffect(() => {
    const fetchPedidos = async () => {
      const db = firebase.firestore();
      const user = firebase.auth().currentUser;

      if (user) {
        setUserId(user.uid);

        const usuariosRef = db.collection("usuarios");
        const userRef = usuariosRef.doc(user.uid);
        const pedidosRef = userRef.collection("pedidos");

        pedidosRef
          .get()
          .then((querySnapshot) => {
            const pedidosData = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));

            const pedidosSemAvaliacao = pedidosData.filter(
              (pedido) => !pedido.avaliacao
            );

            setPedidos(pedidosSemAvaliacao);
          })
          .catch((error) => {
            console.error("erro ao Recuperar Pedido", error);
          });
      }
    };
    fetchPedidos();
  }, []);

  const handleSelecionarPedido = (pedidoId) => {
    const pedido = pedidos.find((p) => p.id === pedidoId);
    console.log("Pedido selecionado:", pedido);
    setSelectPedidos(pedido.itensQuantidades);
  };

  const handleEnviarAvaliacao = () => {
    if (selectPedidos) {
      const pedidosRef = firebase.firestore().collection("pedidos");
      pedidosRef.doc(selectPedidos.id).update({
        avaliacao: {
          avaliacao: avaliacao,
          nota: nota,
        },
      });
    }
  };

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm
      data={data}
      updateFieldHandler={updateFieldHandler}
      pedidos={pedidos}
      onSelectPedido={handleSelecionarPedido}
    />,
    <ReviewForm
      data={data}
      updateFieldHandler={updateFieldHandler}
      selectPedidos={selectPedidos}
      avaliacao={avaliacao}
      nota={nota}
      onAvaliacaoChange={setAvaliacao}
      onNotaChange={setNota}
    />,
    <Thanks
      data={data}
      selectPedidos={selectPedidos}
      avaliacao={avaliacao}
      nota={nota}
    />,
  ];

  const {
    currentStep,
    currentComponent,
    changeStep,
    isLastStep,
    isFirstStep,
  } = useForm(formComponents);

  const handleNextStep = (nextStep, e) => {
    e.preventDefault();
    switch (nextStep) {
      case 1:
        break;
      case 2:
        handleSelecionarPedido();
        break;
      case 3:
        updateFieldHandler("avaliacao", avaliacao);
        updateFieldHandler("nota", nota);
        break;
      default:
        break;
    }
    changeStep(nextStep);
  };
  return (
    <div>
      {" "}
      <Navbar />
      <div className="container-formulario">
        <div className="header">
          <h1 className="title">Deixe sua avaliação</h1>
          <p className="form__instructions">
            Ficamos felizes com sua compra, utilize o formulário abaixo para
            avaliar o produto!
          </p>
        </div>
        <div className="form-containers">
          <Steps currentStep={currentStep} />
          <form
            className="formularios"
            onSubmit={(e) => handleNextStep(currentStep + 1, e)}
          >
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={() => changeStep(currentStep - 1)}
                >
                  <GrFormPrevious />
                  <span>Voltar</span>
                </button>
              )}
              {!isLastStep ? (
                <button type="submit">
                  <span>Avançar</span>
                  <GrFormNext />
                </button>
              ) : (
                <button type="button" onClick={handleEnviarAvaliacao}>
                  <span>Enviar</span>
                  <FiSend />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Avaliacao;
