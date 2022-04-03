import React, { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  userName: string;
  nombre: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  userName: "",
  nombre: "",
};

type AuthAction = { type: "logout" };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        nombre: "",
        userName: "",
      };

    default:
      return state;
  }
};

export const Login = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  if (state.validando) {
    return (
      <>
        <h3>Login</h3>

        <div className="alert alert-info">Validando ...</div>
      </>
    );
  }

  

  return (
    <>
      <h3>Login</h3>

      <div className="alert alert-danger">No atenticado </div>
      <div className="alert alert-success">Autenticado</div>
      <button className="btn btn-primary">Login</button>
      <button className="btn btn-danger">Logout</button>
    </>
  );
};
