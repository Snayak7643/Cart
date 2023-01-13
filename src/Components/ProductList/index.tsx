import React, { useContext } from "react";
import CartContext from "../../Contexts/CartContext";
import Product from "./components/Product";

const ProductList = () => {
  const { state } = useContext(CartContext);

  //If the Cart is Empty

  if (state.productsData.length === 0) {
    return <p className="empty-cart">No more Items</p>;
  }

  //If the Cart Has Items
  return (
    <>
      {/* Rendering Products */}
      <div>
        {state.productsData.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
      {/* Total Section */}
    </>
  );
};

export default ProductList;
