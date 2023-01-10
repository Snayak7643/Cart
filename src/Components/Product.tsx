import React, { useState, useContext } from "react";
import { CartContext } from "../App";

type PropType = {
  id: number;
  title: string;
  img: string;
  price: number;
};

const Product: React.FunctionComponent<PropType> = ({
  id,
  title,
  img,
  price,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { dispatch } = useContext(CartContext);

  return (
    <article className="cart-item">
      <img src={img} alt="Phone" />
      <div>
        <h4>{title}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch({
              type: "decrease",
              payload: { id, amount: quantity, price },
            });
            dispatch({
              type: "remove",
              payload: { id, amount: quantity, price },
            });
          }}
        >
          Remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => {
            setQuantity(quantity + 1);
            dispatch({ type: "increase", payload: { id, amount: 1, price } });
          }}
        >
          +
        </button>
        <p className="amount">{quantity}</p>
        <button
          className="amount-btn"
          onClick={() => {
            setQuantity(quantity - 1);
            dispatch({ type: "decrease", payload: { id, amount: 1, price } });
          }}
        >
          -
        </button>
      </div>
    </article>
  );
};

export default Product;
