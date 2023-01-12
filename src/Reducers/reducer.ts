import { State, Action, productType } from "../type";
import ACTIONS from "../Constants/actionNames";
import { initialCartState } from "../Constants/InitialCartState";

const reducer = (state: State, action: Action) => {
  //desctructuring the payload
  const { id, quantity, price } = action.payload;

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
        totalQuantity: state.productsData.length,
        totalPrice: sum,
      };
    }

    //Increase quantity
    case ACTIONS.INCREASE: {
      const product = state.productsData.filter((product) => {
        return product.id === id;
      });

      return {
        ...state,
        totalQuantity: state.totalQuantity + product[0].quantity,
        totalPrice:
          Math.round((state.totalPrice + product[0].price) * 100) / 100,
      };
    }

    //Decrease quantity
    case ACTIONS.DECREASE: {
      const product = state.productsData.filter((product) => {
        return product.id === id;
      });

      return {
        ...state,
        totalQuantity: state.totalQuantity - product[0].quantity,
        totalPrice:
          Math.round((state.totalPrice - quantity * product[0].price) * 100) /
          100,
      };
    }

    //Remove a product
    case ACTIONS.REMOVE: {
      return {
        ...state,
        productsData: state.productsData.filter((product) => {
          return product.id !== id;
        }),
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
