import {useAsync} from '../../../shared/hooks/useAsync';
import {fetchCustomers} from '../services/customersService';

export function useCustomers() {
  return useAsync(fetchCustomers, []);
}
