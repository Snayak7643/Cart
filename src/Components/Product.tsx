import React, { useState, useContext } from "react";
import CartContext from "../Contexts/CartContext";
import { FcCollapse, FcExpand } from "react-icons/fc";
import { productType } from "../type";
import ACTIONS from "../Constants/actions";

type PropType = {
  product: productType;
};

const Product: React.FunctionComponent<PropType> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { dispatch } = useContext(CartContext);
  const { id, img, title, price } = product;

  //Remove the product if quantity tends to 0
  if (quantity === 0) {
    dispatch({ type: ACTIONS.REMOVE, payload: { id, amount: 0, price: 0 } });
  }

  return (
    <article className="cart-item">
      <img src={img} alt="Phone" />
      <div>
        <h4>{title}</h4>

        {/* Remove Button */}
        <button
          className="remove-btn"
          onClick={() => {
            dispatch({
              type: ACTIONS.DECREASE,
              payload: { id, amount: quantity, price },
            });
            dispatch({
              type: ACTIONS.REMOVE,
              payload: { id, amount: quantity, price },
            });
          }}
        >
          Remove
        </button>
      </div>
      <div>
        {/* Increase Button */}
        <button
          className="amount-btn"
          onClick={() => {
            setQuantity(quantity + 1);
            dispatch({
              type: ACTIONS.INCREASE,
              payload: { id, amount: 1, price },
            });
          }}
        >
          <FcCollapse />
        </button>
        <p className="amount">{quantity}</p>

        {/* Decrease Button */}
        <button
          className="amount-btn"
          onClick={() => {
            setQuantity(quantity - 1);
            dispatch({
              type: ACTIONS.DECREASE,
              payload: { id, amount: 1, price },
            });
          }}
        >
          <FcExpand />
        </button>
      </div>
    </article>
  );
};

export default Product;
