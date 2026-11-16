import {Order} from '../types';

/** Dữ liệu mẫu, chỉ dùng khi config.useMock = true. */
export const MOCK_ORDERS: Order[] = [
  {
    id: 'DH0123',
    customer: 'Nguyễn Văn An',
    time: '10:42',
    items: [
      {name: 'Tivi Samsung 55 inch', quantity: 1, price: 14990000},
      {name: 'Giá treo tường', quantity: 1, price: 1000000},
    ],
  },
  {
    id: 'DH0122',
    customer: 'Trần Thị Bình',
    time: '09:55',
    items: [{name: 'Nồi chiên không dầu 6L', quantity: 1, price: 3490000}],
  },
  {
    id: 'DH0121',
    customer: 'Lê Hoàng Cường',
    time: '09:12',
    items: [
      {name: 'Tai nghe không dây', quantity: 2, price: 2490000},
      {name: 'Sạc dự phòng 20.000mAh', quantity: 1, price: 3770000},
    ],
  },
];
