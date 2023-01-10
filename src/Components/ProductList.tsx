import React, { useContext } from "react";
import { CartContext } from "../App";
import Product from "./Product";

const ProductList = () => {
  const { state } = useContext(CartContext);

  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {state.productsData.map((product) => {
          const { title, img, price } = product;
          return <Product title={title} img={img} price={price} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total: <span>${state.total}</span>
          </h4>
        </div>
        <button className="btn clear-btn">Clear All</button>
      </footer>
    </section>
  );
};

export default ProductList;
