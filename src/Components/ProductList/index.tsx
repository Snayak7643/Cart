import React, { useContext } from "react";
import CartContext from "../../Contexts/CartContext";
import Product from "./components/Product";
import { clear } from "../../Reducers/actions";

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
            Total: <span>${state.totalPrice}</span>
          </h4>
        </div>
        {/* Clear-All Button */}
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(clear());
          }}
        >
          Clear All
        </button>
      </footer>
    </section>
  );
};

export default ProductList;
