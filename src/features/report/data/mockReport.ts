import {WeeklyReport} from '../types';

/** Dữ liệu mẫu, chỉ dùng khi config.useMock = true. Doanh thu theo ngày (VND). */
export const MOCK_REPORT: WeeklyReport = {
  days: [
    {label: 'T2', value: 18500000},
    {label: 'T3', value: 24300000},
    {label: 'T4', value: 12800000},
    {label: 'T5', value: 31200000},
    {label: 'T6', value: 27600000},
    {label: 'T7', value: 41800000},
    {label: 'CN', value: 35400000},
  ],
  orders: 64,
  topProducts: [
    {name: 'iPhone 15 128GB', sold: 14},
    {name: 'Tivi Samsung 55 inch 4K', sold: 11},
    {name: 'Nồi chiên không dầu 6L', sold: 9},
  ],
};
