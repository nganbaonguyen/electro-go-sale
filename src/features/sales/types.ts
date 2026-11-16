export type OrderItem = {
  name: string;
  quantity: number;
  price: number; // VND / sản phẩm
};

export type Order = {
  id: string;
  customer: string;
  time: string; // HH:mm
  items: OrderItem[];
};
