export const addOpcao = (opcao) => ({
  type: "ADD_OPCAO",
  payload: opcao,
});

export const addSubopcao = (subopcao) => ({
  type: "ADD_SUBOPCAO",
  payload: { subopcao },
});

export const addQuantidade = (quantidade) => ({
  type: "ADD_QUANTIDADE",
  payload: { quantidade },
});