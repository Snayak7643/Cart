import { createContext } from "react";
import { initialCartState } from "../Constants/InitialCartState";
import { State, Action } from "../type";

// Syntax :- createContext<{value1 : Type; value2 : Type}>({value1 : initialValue1, ...})
const CartContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialCartState,
  dispatch: () => null,
});

export default CartContext;
