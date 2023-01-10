import React, { createContext, useReducer } from "react";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import productsData from "./data";
import { productType } from "./data";

export const CartContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: { productsData, amount: 4, total: 2599.96 },
  dispatch: () => null,
});

type State = {
  productsData: productType[];
  amount: number;
  total: number;
};

type Action = {
  type: string;
  payload: {
    id: number;
    amount: number;
    price: number;
  };
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increase": {
      return {
        ...state,
        amount: state.amount + action.payload.amount,
        total: state.total + action.payload.price,
      };
    }
    case "decrease": {
      console.log(action.payload);
      return {
        ...state,
        amount: state.amount - action.payload.amount,
        total: state.total - action.payload.amount * action.payload.price,
      };
    }
    case "remove": {
      return {
        ...state,
        productsData: state.productsData.filter((product) => {
          return product.id !== action.payload.id;
        }),
      };
    }
    case "clear": {
      return {
        productsData: [],
        amount: 0,
        total: 0,
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
    total: 2599.96,
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
