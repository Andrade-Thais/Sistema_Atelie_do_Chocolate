import React, { useState, createContext, useContext } from "react";
import { AuthContext, AuthProvider } from "../Auth/Context/auth";

// Passo 1: Criando os contextos
const MyContexts = createContext();

// Passo 2: Criando os estados iniciais
const initialState = {
  statusPedido: "",
  avaliacaoPedido: 0,
  pedidosUsuario: [],
  totalPedidosEmAberto: 0,
  totalPedidosEmAndamento: 0,
  totalPedidosConcluidos: 0,
  totalPedidos: 0,
};

export function MyContextsProvider({ children }) {
  const [contextState, setContextState] = useState(initialState);
  return (
    <AuthContext.Provider>
      <MyContexts.Provider value={{ contextState, setContextState }}>
        {children}
      </MyContexts.Provider>
    </AuthContext.Provider>
  );
}

export function useMyContexts() {
  return useContext(MyContexts);
}
