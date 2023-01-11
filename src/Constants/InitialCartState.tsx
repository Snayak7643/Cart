import productsData from "../data";
import { State } from "../Reducers/reducer";

export const initialCartState: State = {
  productsData,
  amount: 4,
  total: 2599.96,
};
