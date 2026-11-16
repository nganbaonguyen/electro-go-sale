import {useAsync} from '../../../shared/hooks/useAsync';
import {fetchOrder} from '../services/salesService';

export function useOrder(id: string) {
  return useAsync(() => fetchOrder(id), [id]);
}
