import React, { createContext, useReducer } from "react";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import productsData from "./data";
import { productType } from "./data";

export const CartContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: { productsData, amount: 4, total: 0 }, dispatch: () => null });

type State = {
  productsData: productType[];
  amount: number;
  total: number;
};

type Action = {
  type: string;
  payload: number;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increase": {
      return {
        ...state,
        amount: state.amount + 1,
        total: state.total + action.payload,
      };
    }
    case "decrease": {
      return {
        ...state,
        amount: state.amount - 1,
        total: state.total - action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    productsData: productsData,
    amount: 4,
    total: 0,
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      <main>
        <Navbar />
        <ProductList />
      </main>
    </CartContext.Provider>
  );
}

export default App;
