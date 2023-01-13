import { State, Action, productType } from "../type";
import ACTIONS from "../Constants/actionNames";
import { initialCartState } from "../Constants/InitialCartState";

const reducer = (state: State, action: Action) => {
  //desctructuring the payload
  const { id } = action.payload;
  const product = state.productsData.filter((product) => {
    return product.id === id;
  });

  switch (action.type) {
    //initial Fetch
    case ACTIONS.SET_INITIAL: {
      const { productsData } = action.payload;

      let sum = 0;
      productsData.forEach((product: productType) => {
        sum = sum + product.price;
      });

      return {
        ...state,
        productsData,
        totalQuantity: productsData.length,
        totalPrice: sum,
      };
    }

    //Increase quantity
    case ACTIONS.INCREASE: {
      const newProductsData = state.productsData.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      return {
        ...state,
        productsData: newProductsData,
        totalQuantity: state.totalQuantity + 1,
        totalPrice:
          Math.round((state.totalPrice + product[0].price) * 100) / 100,
      };
    }

    //Decrease quantity
    case ACTIONS.DECREASE: {
      const newProductsData = state.productsData.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });

      return {
        ...state,
        productsData: newProductsData,
        totalQuantity: state.totalQuantity - 1,
        totalPrice:
          Math.round((state.totalPrice - product[0].price) * 100) / 100,
      };
    }

    //Remove a product
    case ACTIONS.REMOVE: {
      return {
        ...state,
        productsData: state.productsData.filter((product) => {
          return product.id !== id;
        }),
        totalQuantity: state.totalQuantity - product[0].quantity,
        totalPrice:
          Math.round(
            (state.totalPrice - product[0].quantity * product[0].price) * 100
          ) / 100,
      };
    }

    //Clear
    case ACTIONS.CLEAR: {
      return initialCartState;
    }

    //Default
    default: {
      return state;
    }
  }
};

export { reducer };
