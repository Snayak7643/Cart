import React, { createContext, useReducer } from "react";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import productsData from "./data";
import { reducer } from "./Reducers/reducer";
import { State, Action } from "./Reducers/reducer";

export const CartContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: { productsData, amount: 4, total: 2599.96 },
  dispatch: () => null,
});

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
