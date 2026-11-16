import {config} from '../../../config/env';
import {http} from '../../../services/api/httpClient';
import {delay} from '../../../shared/utils/delay';
import {MOCK_PRODUCTS} from '../data/mockProducts';
import {Product} from '../types';

export async function fetchProducts(): Promise<Product[]> {
  return config.useMock ? delay(MOCK_PRODUCTS) : http.get<Product[]>('/products');
}
