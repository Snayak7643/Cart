import React, { useContext } from "react";
import CartContext from "../Contexts/CartContext";
import { clear } from "../Reducers/actions";

const Button = () => {
  const { dispatch } = useContext(CartContext);
  return (
    <button
      className="btn clear-btn"
      onClick={() => {
        dispatch(clear());
      }}
    >
      Clear All
    </button>
  );
};

export default Button;
