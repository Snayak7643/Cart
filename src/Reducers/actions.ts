import ACTIONS from "../Constants/actionNames";

export const increaseAmount = (price: number) => {
  return { type: ACTIONS.INCREASE, payload: { id: 0, quantity: 0, price } };
};

export const decreaseAmount = (quantity: number, price: number) => {
  return { type: ACTIONS.DECREASE, payload: { id: 0, quantity, price } };
};

export const remove = (id: number) => {
  return { type: ACTIONS.REMOVE, payload: { id, quantity: 0, price: 0 } };
};

export const set_initial = () => {
  return {
    type: ACTIONS.SET_INITIAL,
    payload: { id: 0, quantity: 0, price: 0 },
  };
};
