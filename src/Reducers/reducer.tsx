import { State, Action } from "../type";
import { increaseAmount, decreaseAmount, remove, set_initial } from "./actions";
import ACTIONS from "../Constants/actionNames";

const reducer = (state: State, action: Action) => {
  //desctructuring the payload
  const { id, amount, price } = action.payload;

  switch (action.type) {
    //initial Fetch
    case ACTIONS.SET_INITIAL: {
      return set_initial(state, amount, price);
    }

    //Increase quantity
    case ACTIONS.INCREASE: {
      return increaseAmount(state, price);
    }

    //Decrease quantity
    case ACTIONS.DECREASE: {
      return decreaseAmount(state, amount, price);
    }

    //Remove a product
    case ACTIONS.REMOVE: {
      return remove(state, id);
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
