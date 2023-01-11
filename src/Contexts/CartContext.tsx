import { createContext } from "react";
import { initialCartState } from "../Constants/InitialCartState";
import { State, Action } from "../Reducers/reducer";

const CartContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialCartState,
  dispatch: () => null,
});

export default CartContext;
