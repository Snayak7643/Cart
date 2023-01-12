export type productType = {
  id: number;
  title: string;
  price: number;
  img: string;
  quantity: number;
};

export type State = {
  productsData: productType[];
  totalQuantity: number;
  totalPrice: number;
};

export type Action = {
  type: string;
  payload: {
    id: number;
    quantity: number;
    price: number;
  };
};
