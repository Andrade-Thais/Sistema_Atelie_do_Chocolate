import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../Auth/Context/auth";
import { NotAuthorized } from "../../Errors/NotAuthorized/NotAuthorized";

const SecureRoute = ({ allowedUserType, ...rest }) => {
  const { logado, userID } = useContext(AuthContext);
  const adminUserID = "xlSBLZr64BODo1EkiD78aZQvQL72";

  if (logado) {
    if (allowedUserType === "admin" && userID === adminUserID) {
      return <Route {...rest} />;
    } else if (allowedUserType === "cliente" && userID !== adminUserID) {
      return <Route {...rest} />;
    }
  }

  return <NotAuthorized />;
};

export { SecureRoute };
