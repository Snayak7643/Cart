import React, { useContext } from "react";
import CartContext from "../Contexts/CartContext";
import Product from "./Product";

const ProductList = () => {
  const { state, dispatch } = useContext(CartContext);

  //If the Cart is Empty

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

  //If the Cart Has Items
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      {/* Rendering Products */}
      <div>
        {state.productsData.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
      {/* Total Section */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total: <span>${state.total}</span>
          </h4>
        </div>
        {/* Clear-All Button */}
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
