import { State, Action } from "../type";
import ACTIONS from "../Constants/actionNames";

const reducer = (state: State, action: Action) => {
  //desctructuring the payload
  const { id, amount, price } = action.payload;

  switch (action.type) {
    //initial Fetch
    case ACTIONS.SET_INITIAL: {
      let sum = 0;

      state.productsData.forEach((product) => {
        sum = sum + product.price;
      });

      return { ...state, amount: state.productsData.length, total: sum };
    }

    //Increase quantity
    case ACTIONS.INCREASE: {
      return {
        ...state,
        amount: state.amount + 1,
        total: Math.round((state.total + price) * 100) / 100,
      };
    }

    //Decrease quantity
    case ACTIONS.DECREASE: {
      return {
        ...state,
        amount: state.amount - amount,
        total: Math.round((state.total - amount * price) * 100) / 100,
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
        amount: 0,
        total: 0,
      };
    }

    //Default
    default: {
      return state;
    }
  }
};

export { reducer };
