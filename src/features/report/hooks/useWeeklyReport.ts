import {useAsync} from '../../../shared/hooks/useAsync';
import {fetchWeeklyReport} from '../services/reportService';

export function useWeeklyReport() {
  return useAsync(fetchWeeklyReport, []);
}
