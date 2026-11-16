import React from 'react';
import {StyleSheet, View} from 'react-native';
import {OrderDetailScreen, SalesScreen} from '../../features/sales';
import ScreenHeader from '../../shared/components/ScreenHeader';
import {useStack} from '../../shared/navigation/useStack';
import {colors} from '../../shared/theme';

/** Danh sách màn hình của mini app. Thêm màn mới: thêm vào Route, TITLES và nhánh render bên dưới. */
type Route = {name: 'sales'} | {name: 'orderDetail'; orderId: string};

const TITLES: Record<Route['name'], string> = {
  sales: 'Bán hàng',
  orderDetail: 'Chi tiết đơn hàng',
};

export default function MiniNavigator() {
  const {current, push, pop, canGoBack} = useStack<Route>({name: 'sales'});

  return (
    <View style={styles.container}>
      <ScreenHeader title={TITLES[current.name]} onBack={canGoBack ? pop : undefined} />
      {current.name === 'sales' ? (
        <SalesScreen onOpenOrder={orderId => push({name: 'orderDetail', orderId})} />
      ) : (
        <OrderDetailScreen orderId={current.orderId} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({container: {flex: 1, backgroundColor: colors.background}});
