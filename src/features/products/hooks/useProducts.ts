import {useAsync} from '../../../shared/hooks/useAsync';
import {fetchProducts} from '../services/productsService';

export function useProducts() {
  return useAsync(fetchProducts, []);
}
