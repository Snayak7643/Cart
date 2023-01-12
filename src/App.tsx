import React, { useReducer, useEffect } from "react";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList/index";
import { reducer } from "./Reducers/reducer";
import CartContext from "./Contexts/CartContext";
import { initialCartState } from "./Constants/InitialCartState";
import productsData from "./data";
import { set_initial } from "./Reducers/actions";

function App() {
  //The reducer
  const [state, dispatch] = useReducer(reducer, initialCartState);

  //useEffect is added for if we fetching data from Api
  useEffect(() => {
    dispatch(set_initial(productsData));
  }, []);

  //The component
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
