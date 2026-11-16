import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import SaleApp from '../src';

/**
 * Khung chạy riêng mini app Bán hàng (chỉ dùng khi dev, không nằm trong gói build).
 * Chạy: `pnpm start:module` trong thư mục package này, rồi mở app trên máy ảo.
 * Khung này thay cho host: cấp SafeAreaProvider và thanh trạng thái, rồi render mini app.
 */
export default function Harness() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}} edges={['top']}>
        <SaleApp />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
