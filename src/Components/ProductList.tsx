import React, { useContext } from "react";
import { CartContext } from "../App";
import Product from "./Product";

const ProductList = () => {
  const { state, dispatch } = useContext(CartContext);

  if (state.productsData.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
        </header>
        <p className="empty-cart">No more Items</p>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {state.productsData.map((product) => {
          const { id, title, img, price } = product;
          return (
            <Product key={id} id={id} title={title} img={img} price={price} />
          );
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total: <span>${state.total}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch({
              type: "clear",
              payload: { id: 0, price: 0, amount: 0 },
            });
          }}
        >
          Clear All
        </button>
      </footer>
    </section>
  );
};

export default ProductList;
