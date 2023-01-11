import { State } from "../type";

export const increaseAmount = (state: State, price: number) => {
  return { ...state, amount: state.amount + 1, total: state.total + price };
};

export const decreaseAmount = (state: State, amount: number, price: number) => {
  return {
    ...state,
    amount: state.amount - amount,
    total: Math.round(state.total - amount * price),
  };
};

export const remove = (state: State, id: number) => {
  return {
    ...state,
    productsData: state.productsData.filter((product) => {
      return product.id !== id;
    }),
  };
};

export const set_initial = (state: State, amount: number, total: number) => {
  return { ...state, amount, total };
};
