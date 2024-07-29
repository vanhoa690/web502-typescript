export type Product = {
  id: string;
  title: string;
  image: string;
  desc: string;
  price: number;
  category: string;
  isShowProduct: boolean;
};

export type ProductInputs = Omit<Product, "id">;
