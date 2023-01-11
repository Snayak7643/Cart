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
  switch (action.type) {
    case "increase": {
      return {
        ...state,
        amount: state.amount + action.payload.amount,
        total: state.total + action.payload.price,
      };
    }
    case "decrease": {
      console.log(action.payload);
      return {
        ...state,
        amount: state.amount - action.payload.amount,
        total: Math.round(
          state.total - action.payload.amount * action.payload.price
        ),
      };
    }
    case "remove": {
      return {
        ...state,
        productsData: state.productsData.filter((product) => {
          return product.id !== action.payload.id;
        }),
      };
    }
    case "clear": {
      return {
        productsData: [],
        amount: 0,
        total: 0,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
