import React from "react";
import productsData, { productType } from "../data";
import Product from "./Product";

const ProductList = () => {
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {productsData.map((product: productType) => {
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
