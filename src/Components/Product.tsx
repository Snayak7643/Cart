import React, { useState, useContext } from "react";
import { CartContext } from "../App";

type PropType = {
  title: string;
  img: string;
  price: number;
};

const Product: React.FunctionComponent<PropType> = ({ title, img, price }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { dispatch } = useContext(CartContext);

  return (
    <article className="cart-item">
      <img src={img} alt="Phone" />
      <div>
        <h4>{title}</h4>
        <button className="remove-btn">Remove</button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => {
            setQuantity(quantity + 1);
            dispatch({ type: "increase", payload: price });
          }}
        >
          +
        </button>
        <p className="amount">{quantity}</p>
        <button
          className="amount-btn"
          onClick={() => {
            setQuantity(quantity - 1);
            dispatch({ type: "decrease", payload: price });
          }}
        >
          -
        </button>
      </div>
    </article>
  );
};

export default Product;
