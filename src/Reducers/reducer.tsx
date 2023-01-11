import { productType } from "../data";

export type State = {
  productsData: productType[];
  amount: number;
  total: number;
};

export type Action = {
  type: string;
  payload: {
    id: number;
    amount: number;
    price: number;
  };
};

const reducer = (state: State, action: Action) => {
  //desctructuring the payload
  const { id, amount, price } = action.payload;

  //the cases for which function to run
  switch (action.type) {
    //initial Fetch
    case "set_initial": {
      return { ...state, amount: amount, total: price };
    }

    //Increase quantity
    case "increase": {
      return {
        ...state,
        amount: state.amount + amount,
        total: state.total + price,
      };
    }

    //Decrease quantity
    case "decrease": {
      return {
        ...state,
        amount: state.amount - amount,
        total: Math.round(state.total - amount * price),
      };
    }

    //Remove a product
    case "remove": {
      return {
        ...state,
        productsData: state.productsData.filter((product) => {
          return product.id !== id;
        }),
      };
    }

    //Clear
    case "clear": {
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
