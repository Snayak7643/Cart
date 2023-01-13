import React, { useContext } from "react";
import CartContext from "../Contexts/CartContext";
import Button from "./Button";

const Total = () => {
  const { state } = useContext(CartContext);
  if (state.productsData.length === 0) {
    return <></>;
  }
  return (
    <footer>
      <hr />
      <div className="cart-total">
        <h4>
          Total: <span>${state.totalPrice}</span>
        </h4>
      </div>
      {/* Clear-All Button */}
      <Button />
    </footer>
  );
};

export default Total;
