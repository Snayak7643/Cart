import React, { useContext } from "react";
import CartContext from "../../../Contexts/CartContext";
import { FcCollapse, FcExpand } from "react-icons/fc";
import { productType } from "../../../type";
import {
  increaseAmount,
  decreaseAmount,
  remove,
} from "../../../Reducers/actions";

type PropType = {
  product: productType;
};

const Product: React.FunctionComponent<PropType> = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  const { id, img, title } = product;

  //Remove the product if quantity tends to 0

  return (
    <article className="cart-item">
      <img src={img} alt="Phone" />
      <div>
        <h4>{title}</h4>

        {/* Remove Button */}
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(remove(id));
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
            dispatch(increaseAmount(id));
          }}
        >
          <FcCollapse />
        </button>
        <p className="amount">{product.quantity}</p>

        {/* Decrease Button */}
        <button
          className="amount-btn"
          onClick={() => {
            if (product.quantity === 1) {
              return dispatch(remove(id));
            }
            dispatch(decreaseAmount(id));
          }}
        >
          <FcExpand />
        </button>
      </div>
    </article>
  );
};

export default Product;
