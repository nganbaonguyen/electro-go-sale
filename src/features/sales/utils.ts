import {Order} from './types';

export const orderTotal = (order: Order): number =>
  order.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
