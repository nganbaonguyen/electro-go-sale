import {Order} from '../types';

/** Dữ liệu mẫu. Thay bằng dữ liệu từ API khi có backend. */
export const MOCK_ORDERS: Order[] = [
  {id: 'DH0123', customer: 'Nguyễn Văn An', total: 15990000, time: '10:42'},
  {id: 'DH0122', customer: 'Trần Thị Bình', total: 3490000, time: '09:55'},
  {id: 'DH0121', customer: 'Lê Hoàng Cường', total: 8750000, time: '09:12'},
];
