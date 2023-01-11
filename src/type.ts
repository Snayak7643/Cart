export type productType = {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
};

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
