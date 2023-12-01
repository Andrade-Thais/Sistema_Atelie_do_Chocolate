const initialState = {
  pedido: {
    opcoes: [],
    subopcoes: [],
    quantidades: [],
  },
  opcoes: {},
  subopcoes: {},
  quantidades: {},
  observacoes: {},
};

const pedidoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_OPCAO":
      return {
        ...state,
        pedido: {
          ...state.pedido,
          opcoes: [...state.pedido.opcoes, action.payload],
        },
        opcoes: {
          ...state.opcoes,
          ...action.payload,
        },
      };
    case "ADD_SUBOPCAO":
      return {
        ...state,
        pedido: {
          ...state.pedido,
          subopcoes: [...state.pedido.subopcoes, action.payload.subopcao],
        },
        subopcoes: {
          ...state.subopcoes,
          ...action.payload.subopcao,
        },
      };
    case "ADD_QUANTIDADE":
      return {
        ...state,
        pedido: {
          ...state.pedido,
          quantidades: [...state.pedido.quantidades, action.payload.quantidade],
        },
        quantidades: {
          ...state.quantidades,
          ...action.payload.quantidade,
        },
      };
    default:
      return state;
  }
};

export default pedidoReducer;
