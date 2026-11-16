import {config} from '../../../config/env';
import {http} from '../../../services/api/httpClient';
import {delay} from '../../../shared/utils/delay';
import {MOCK_ORDERS} from '../data/mockOrders';
import {Order} from '../types';

/**
 * Tầng service: nơi duy nhất của feature biết dữ liệu đến từ đâu (mock hay API).
 * Màn hình và hook chỉ gọi các hàm này, không gọi http trực tiếp.
 */
export async function fetchOrders(): Promise<Order[]> {
  return config.useMock ? delay(MOCK_ORDERS) : http.get<Order[]>('/orders');
}

export async function fetchOrder(id: string): Promise<Order> {
  if (config.useMock) {
    const order = MOCK_ORDERS.find(o => o.id === id);
    if (!order) {
      throw new Error('Không tìm thấy đơn hàng');
    }
    return delay(order);
  }
  return http.get<Order>(`/orders/${id}`);
}
