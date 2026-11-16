import {IconName} from '../../assets/icons';

export type Product = {
  id: string;
  name: string;
  price: number; // VND
  stock: number;
  icon: IconName; // icon theo nhóm hàng
};
