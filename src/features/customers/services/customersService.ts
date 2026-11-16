import {config} from '../../../config/env';
import {http} from '../../../services/api/httpClient';
import {delay} from '../../../shared/utils/delay';
import {MOCK_CUSTOMERS} from '../data/mockCustomers';
import {Customer} from '../types';

export async function fetchCustomers(): Promise<Customer[]> {
  return config.useMock ? delay(MOCK_CUSTOMERS) : http.get<Customer[]>('/customers');
}
