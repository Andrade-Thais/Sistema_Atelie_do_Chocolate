import { usePedidoContext } from "../Context/ChatContext";

const UseCustomHistory = () => {
  const {
    opcoesPrimarias,
    subopcoes,
    quantidades,
    selectedOpcaoId,
    setSelectedOpcaoId,
    selectedSubopcoes,
    setSelectedSubopcoes,
  } = usePedidoContext();

  const voltar = () => {
    if (subopcoes) {
      setSelectedOpcaoId(0);
      setSelectedSubopcoes([]);
      console.log(selectedSubopcoes);
      return opcoesPrimarias;
    } else if (quantidades) {
    }
  };

  return { voltar };
};

export default UseCustomHistory;
