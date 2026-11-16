import {useAsync} from '../../../shared/hooks/useAsync';
import {fetchOrders} from '../services/salesService';

export function useOrders() {
  return useAsync(fetchOrders, []);
}
