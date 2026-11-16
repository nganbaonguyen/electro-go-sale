import {config} from '../../../config/env';
import {http} from '../../../services/api/httpClient';
import {delay} from '../../../shared/utils/delay';
import {MOCK_REPORT} from '../data/mockReport';
import {WeeklyReport} from '../types';

export async function fetchWeeklyReport(): Promise<WeeklyReport> {
  return config.useMock ? delay(MOCK_REPORT) : http.get<WeeklyReport>('/reports/weekly');
}
