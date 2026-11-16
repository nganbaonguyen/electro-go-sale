import React from 'react';
import ErrorBoundary from '../shared/components/ErrorBoundary';
import MiniNavigator from './navigation/MiniNavigator';

/**
 * Props host truyền vào. `initialRoute` là màn hình mở thẳng khi người dùng bấm một module
 * ngoài Home của host (trùng ModuleKey); rỗng hoặc không hợp lệ thì mở màn hình trung tâm (hub).
 */
export type MiniAppProps = {initialRoute?: string};

/** Component gốc của mini app Bán hàng: bọc ErrorBoundary rồi vào điều hướng nội bộ. */
export default function SaleApp({initialRoute}: MiniAppProps) {
  return (
    <ErrorBoundary>
      <MiniNavigator initialRoute={initialRoute} />
    </ErrorBoundary>
  );
}
