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

type LoginPayload = {
  username: string;
  nombre: string;
};

type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        nombre: "",
        userName: "",
      };
    case "login":
      return {
        validando: false,
        token: "ABC123",
        nombre: action.payload.nombre,
        userName: action.payload.username,
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

  const login = () => {
    dispatch({
      type: "login",
      payload: { nombre: "Alfonso", username: "cbryanalfonso" },
    });
  };

  const logout = ()=>{
    dispatch({
      type: "logout",
    })
  }

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

      {state.token ? (
        <div className="alert alert-success">
          Autenticado como {state.nombre}{" "}
        </div>
      ) : (
        <div className="alert alert-danger">No atenticado </div>
      )}

      {state.token ? (
        <button className="btn btn-danger"
          onClick={logout}
        >Logout</button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </>
  );
};
