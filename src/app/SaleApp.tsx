import React from 'react';
import ErrorBoundary from '../shared/components/ErrorBoundary';
import MiniNavigator from './navigation/MiniNavigator';

/** Component gốc của mini app Bán hàng: bọc ErrorBoundary rồi vào điều hướng nội bộ. */
export default function SaleApp() {
  return (
    <ErrorBoundary>
      <MiniNavigator />
    </ErrorBoundary>
  );
}
