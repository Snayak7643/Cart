import productsData from "../data";
import { State } from "../type";

export const initialCartState: State = {
  productsData,
  amount: 0,
  total: 0,
};
