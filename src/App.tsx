import React, { useReducer, useEffect } from "react";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import { reducer } from "./Reducers/reducer";
import CartContext from "./Contexts/CartContext";
import { initialCartState } from "./Constants/InitialCartState";
import productsData from "./data";
import ACTIONS from "./Constants/actions";

function App() {
  //The reducer
  const [state, dispatch] = useReducer(reducer, initialCartState);

  //useEffect is added for if we fetching data from Api
  useEffect(() => {
    let total = 0;
    const calculateTotal = () => {
      productsData.forEach((product) => {
        total = total + product.price;
      });
    };
    calculateTotal();
    dispatch({
      type: ACTIONS.SET_INITIAL,
      payload: { id: 0, amount: 4, price: total },
    });
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
