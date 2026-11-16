import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomersScreen} from '../../features/customers';
import {HubScreen} from '../../features/hub';
import {ProductsScreen} from '../../features/products';
import {ReportScreen} from '../../features/report';
import {OrderDetailScreen, SalesScreen} from '../../features/sales';
import ScreenHeader from '../../shared/components/ScreenHeader';
import {useStack} from '../../shared/navigation/useStack';
import {colors} from '../../shared/theme';
import {MODULES} from '../../features/hub/data/modules';

/**
 * Danh sách màn hình của mini app. Thêm màn mới: thêm vào Route, TITLES và nhánh render bên dưới.
 * Màn gốc là 'hub' (lưới chức năng); các route khác được mở từ hub (tên route trùng ModuleKey).
 */
type Route =
  | {name: 'hub'}
  | {name: 'orders'}
  | {name: 'orderDetail'; orderId: string}
  | {name: 'products'}
  | {name: 'customers'}
  | {name: 'report'};

const TITLES: Record<Route['name'], string> = {
  hub: 'Bán hàng',
  orders: 'Đơn hàng',
  orderDetail: 'Chi tiết đơn hàng',
  products: 'Sản phẩm',
  customers: 'Khách hàng',
  report: 'Báo cáo doanh thu',
};

type Props = {initialRoute?: string};

/** Route mở đầu: nếu host truyền module hợp lệ thì vào thẳng, ngược lại vào hub. */
function resolveInitialRoute(initialRoute?: string): Route {
  const isModule = MODULES.some(m => m.key === initialRoute);
  return isModule ? ({name: initialRoute} as Route) : {name: 'hub'};
}

export default function MiniNavigator({initialRoute}: Props) {
  const {current, push, pop, canGoBack} = useStack<Route>(resolveInitialRoute(initialRoute));

  const renderScreen = () => {
    switch (current.name) {
      case 'hub':
        return <HubScreen onOpen={key => push({name: key})} />;
      case 'orders':
        return <SalesScreen onOpenOrder={orderId => push({name: 'orderDetail', orderId})} />;
      case 'orderDetail':
        return <OrderDetailScreen orderId={current.orderId} />;
      case 'products':
        return <ProductsScreen />;
      case 'customers':
        return <CustomersScreen />;
      case 'report':
        return <ReportScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <ScreenHeader title={TITLES[current.name]} onBack={canGoBack ? pop : undefined} />
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({container: {flex: 1, backgroundColor: colors.background}});
