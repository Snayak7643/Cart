import React, { useReducer, useEffect } from "react";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import { reducer } from "./Reducers/reducer";
import CartContext from "./Contexts/CartContext";
import { initialCartState } from "./Constants/InitialCartState";
import productsData from "./data";

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
      type: "set_initial",
      payload: { id: 0, amount: 4, price: total },
    });
    console.log(total);
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
