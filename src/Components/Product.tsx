import React, { useState, useContext } from "react";
import { CartContext } from "../App";

const Product = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const { dispatch } = useContext(CartContext);

  return (
    <article className="cart-item">
      <img src="" alt="Phone" />
      <div>
        <h4>Title</h4>
        <button className="remove-btn">Remove</button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => {
            setQuantity(quantity + 1);
            dispatch({ type: "increase", payload: 0 });
          }}
        >
          +
        </button>
        <p className="amount">{quantity}</p>
        <button
          className="amount-btn"
          onClick={() => {
            setQuantity(quantity - 1);
            dispatch({ type: "decrease", payload: 0 });
          }}
        >
          -
        </button>
      </div>
    </article>
  );
};

export default Product;
