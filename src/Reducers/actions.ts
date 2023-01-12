import ACTIONS from "../Constants/actionNames";
import { productType } from "../type";

export const increaseAmount = (id: number) => {
  return { type: ACTIONS.INCREASE, payload: { id } };
};

export const decreaseAmount = (id: number) => {
  return { type: ACTIONS.DECREASE, payload: { id } };
};

export const remove = (id: number) => {
  return { type: ACTIONS.REMOVE, payload: { id } };
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
