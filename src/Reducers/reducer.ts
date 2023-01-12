import { State, Action } from "../type";
import ACTIONS from "../Constants/actionNames";

const reducer = (state: State, action: Action) => {
  //desctructuring the payload
  const { id, quantity, price } = action.payload;

  switch (action.type) {
    //initial Fetch
    case ACTIONS.SET_INITIAL: {
      let sum = 0;

      state.productsData.forEach((product) => {
        sum = sum + product.price;
      });

      return {
        ...state,
        totalQuantity: state.productsData.length,
        totalPrice: sum,
      };
    }

    //Increase quantity
    case ACTIONS.INCREASE: {
      return {
        ...state,
        totalQuantity: state.totalQuantity + 1,
        totalPrice: Math.round((state.totalPrice + price) * 100) / 100,
      };
    }

    //Decrease quantity
    case ACTIONS.DECREASE: {
      return {
        ...state,
        totalQuantity: state.totalQuantity - quantity,
        totalPrice:
          Math.round((state.totalPrice - quantity * price) * 100) / 100,
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
      return {
        productsData: [],
        totalQuantity: 0,
        totalPrice: 0,
      };
    }

    //Default
    default: {
      return state;
    }
  }
};

export { reducer };
