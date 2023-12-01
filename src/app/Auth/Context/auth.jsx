import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";

const AuthContext = React.createContext({});

function AuthProvider(props) {
  const storedLogado = localStorage.getItem("logado");

  const adminUserID = "xlSBLZr64BODo1EkiD78aZQvQL72"; //Substituir, caso necessário.

  const [logado, setLogado] = useState(storedLogado === "S" ? true : false);
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const userId = user.uid;
        setUserID(userId);
        setLogado(true);
        localStorage.setItem("logado", "S");
        localStorage.setItem("userID", userId);
      } else {
        setUserID(null);
        setLogado(false);
        localStorage.setItem("logado", "N");
        localStorage.removeItem("userID");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      setUserID(null);
      setLogado(false);
      localStorage.setItem("logado", "N");
      localStorage.removeItem("userID");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  const userType = userID === adminUserID ? "admin" : "cliente";

  return (
    <AuthContext.Provider
      value={{ logado, setLogado, userType, userID, adminUserID, handleLogout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
