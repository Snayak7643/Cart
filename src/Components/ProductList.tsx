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
        {state.productsData.map(() => {
          return <Product />;
        })}
      </div>
      <footer>
        <hr />
        <button className="btn clear-btn">Clear All</button>
      </footer>
    </section>
  );
};

export default ProductList;
