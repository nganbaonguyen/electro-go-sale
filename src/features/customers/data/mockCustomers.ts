import {Customer} from '../types';

/** Dữ liệu mẫu, chỉ dùng khi config.useMock = true. */
export const MOCK_CUSTOMERS: Customer[] = [
  {id: 'c1', name: 'Nguyễn Văn An', phone: '0901 234 567', tier: 'gold', totalSpent: 58900000},
  {id: 'c2', name: 'Trần Thị Bình', phone: '0912 345 678', tier: 'silver', totalSpent: 21400000},
  {id: 'c3', name: 'Lê Hoàng Cường', phone: '0987 654 321', tier: 'gold', totalSpent: 47250000},
  {id: 'c4', name: 'Phạm Minh Dũng', phone: '0933 111 222', tier: 'regular', totalSpent: 3490000},
  {id: 'c5', name: 'Võ Thu Hà', phone: '0977 888 999', tier: 'silver', totalSpent: 16800000},
  {id: 'c6', name: 'Đặng Quốc Huy', phone: '0922 333 444', tier: 'regular', totalSpent: 1790000},
];
