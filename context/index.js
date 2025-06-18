import { useReducer, createContext } from "react";
import { modal } from "./reducers/modal";

// create context
const Context = createContext({});

// combine reducer function
const combineReducers =
  (...reducers) =>
  (state, action) => {
    for (let i = 0; i < reducers.length; i++)
      state = reducers[i](state, action);
    return state;
  };

// context provider
const ModalProvider = ({ children }) => {
  const initialState = {
    isOpen: false,
  };
  const [state, dispatch] = useReducer(combineReducers(modal), initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, ModalProvider };
