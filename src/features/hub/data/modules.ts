import {FeatureItem} from '../../../shared/components/FeatureGrid';
import {ModuleKey} from '../types';

/** Danh sách chức năng hiển thị trên màn hình trung tâm, theo đúng thứ tự. */
export const MODULES: FeatureItem<ModuleKey>[] = [
  {key: 'orders', label: 'Đơn hàng', icon: 'receipt-outline'},
  {key: 'products', label: 'Sản phẩm', icon: 'cube-outline'},
  {key: 'customers', label: 'Khách hàng', icon: 'people-outline'},
  {key: 'report', label: 'Báo cáo', icon: 'bar-chart-outline'},
];
