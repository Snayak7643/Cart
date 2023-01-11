import React, { useReducer } from "react";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import { reducer } from "./Reducers/reducer";
import CartContext from "./Contexts/CartContext";
import { initialCartState } from "./Constants/InitialCartState";

function App() {
  const [state, dispatch] = useReducer(reducer, initialCartState);

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
