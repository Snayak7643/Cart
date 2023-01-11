import React, { useState, useContext } from "react";
import CartContext from "../Contexts/CartContext";
import { FcCollapse, FcExpand } from "react-icons/fc";
import { productType } from "../data";

type PropType = {
  product: productType;
};

const Product: React.FunctionComponent<PropType> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { dispatch } = useContext(CartContext);

  const { id, img, title, price } = product;

  if (quantity === 0) {
    dispatch({ type: "remove", payload: { id, amount: 0, price: 0 } });
  }

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
          <FcCollapse />
        </button>
        <p className="amount">{quantity}</p>
        <button
          className="amount-btn"
          onClick={() => {
            setQuantity(quantity - 1);
            dispatch({ type: "decrease", payload: { id, amount: 1, price } });
          }}
        >
          <FcExpand />
        </button>
      </div>
    </article>
  );
};

export default Product;
