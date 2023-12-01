//Ícones
import { CiUser, CiFaceSmile } from "react-icons/ci";
import { MdFastfood } from "react-icons/md";
import { PiListNumbersThin } from "react-icons/pi";
import { FaCheckDouble } from "react-icons/fa";
//Styles
import "../PedidoForm.css";
const Steps = ({ currentStep }) => {
  const getStepClass = (stepNumber) => {
    const baseClass = "step";
    const activeClass = "active";
    const currentClass = "current";
    const hiddenClass = "hidden";

    const classes = [baseClass];

    if (currentStep === stepNumber) {
      classes.push(activeClass, currentClass);
    } else if (currentStep >= stepNumber) {
      classes.push(activeClass, hiddenClass);
    } else {
      classes.push(hiddenClass);
    }

    return classes.join(" ");
  };

  return (
    <div className="steps">
      <div className={getStepClass(0)}>
        <CiUser />
        <p>Identificação</p>
      </div>
      <div className={getStepClass(1)}>
        <MdFastfood />
        <p>Opções</p>
      </div>
      <div className={getStepClass(2)}>
        <MdFastfood />
        <p>Itens</p>
      </div>
      <div className={getStepClass(3)}>
        <PiListNumbersThin />
        <p>Quantidades</p>
      </div>
      <div className={getStepClass(4)}>
        <FaCheckDouble />
        <p>Confirmar Pedido</p>
      </div>
      <div className={getStepClass(5)}>
        <CiFaceSmile />
        <p>Agradecimento</p>
        <div className={currentStep === 6 ? "current" : "hidden"}></div>
      </div>
    </div>
  );
};

export default Steps;
