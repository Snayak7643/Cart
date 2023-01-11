import { createContext } from "react";
import { State, Action } from "../Reducers/reducer";
import productsData from "../data";

const CartContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: { productsData, amount: 4, total: 2599.96 },
  dispatch: () => null,
});

export default CartContext;
