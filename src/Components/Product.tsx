import React, { useState } from "react";

const Product = () => {
  const [quantity, setQuantity] = useState<number>(1);

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
          }}
        >
          +
        </button>
        <p className="amount">{quantity}</p>
        <button
          className="amount-btn"
          onClick={() => {
            setQuantity(quantity - 1);
          }}
        >
          -
        </button>
      </div>
    </article>
  );
};

export default Product;
