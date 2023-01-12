import ACTIONS from "../Constants/actionNames";
import { productType } from "../type";

export const increaseAmount = (id: number) => {
  return { type: ACTIONS.INCREASE, payload: { id } };
};

export const decreaseAmount = (id: number, quantity: number) => {
  return { type: ACTIONS.DECREASE, payload: { id, quantity } };
};

export const remove = (id: number, quantity: number) => {
  return { type: ACTIONS.REMOVE, payload: { id, quantity } };
};

export const set_initial = (productsData: productType[]) => {
  return {
    type: ACTIONS.SET_INITIAL,
    payload: { productsData },
  };
};

export const clear = () => {
  return { type: ACTIONS.CLEAR, payload: {} };
};
