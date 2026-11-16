import {Product} from '../types';

/** Dữ liệu mẫu, chỉ dùng khi config.useMock = true. */
export const MOCK_PRODUCTS: Product[] = [
  {id: 'p1', name: 'Tivi Samsung 55 inch 4K', price: 14990000, stock: 12, icon: 'tv-outline'},
  {id: 'p2', name: 'iPhone 15 128GB', price: 19990000, stock: 4, icon: 'phone-portrait-outline'},
  {id: 'p3', name: 'Tai nghe không dây Sony', price: 2490000, stock: 0, icon: 'headset-outline'},
  {id: 'p4', name: 'Nồi chiên không dầu 6L', price: 3490000, stock: 25, icon: 'home-outline'},
  {id: 'p5', name: 'Điện thoại Samsung A55', price: 9990000, stock: 3, icon: 'phone-portrait-outline'},
  {id: 'p6', name: 'Loa Bluetooth JBL', price: 1790000, stock: 18, icon: 'headset-outline'},
  {id: 'p7', name: 'Máy lọc không khí', price: 5290000, stock: 7, icon: 'home-outline'},
  {id: 'p8', name: 'Tivi LG OLED 48 inch', price: 22990000, stock: 2, icon: 'tv-outline'},
];
