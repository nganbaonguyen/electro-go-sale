import React from 'react';
import {Alert, Pressable, ScrollView, StyleSheet, Text} from 'react-native';
import {Ionicons} from '@react-native-vector-icons/ionicons/static';
import {icons} from '../../../assets/icons';
import StateView from '../../../shared/components/StateView';
import {colors, radius, spacing, typography} from '../../../shared/theme';
import OrderList from '../components/OrderList';
import RevenueCard from '../components/RevenueCard';
import {useOrders} from '../hooks/useOrders';
import {orderTotal} from '../utils';

type Props = {onOpenOrder: (orderId: string) => void};

export default function SalesScreen({onOpenOrder}: Props) {
  const orders = useOrders();

  if (orders.status !== 'ready' || !orders.data) {
    return (
      <StateView
        status={orders.status === 'error' ? 'error' : 'loading'}
        message={orders.error}
        onRetry={orders.reload}
      />
    );
  }

  const total = orders.data.reduce((sum, o) => sum + orderTotal(o), 0);

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <RevenueCard total={total} orderCount={orders.data.length} />

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Tạo đơn mới"
        onPress={() => Alert.alert('Tạo đơn', 'Tính năng đang được phát triển')}
        style={({pressed}) => [styles.createButton, pressed && styles.pressed]}>
        <Ionicons name={icons.add} size={22} color={colors.textOnPrimary} />
        <Text style={styles.createText}>Tạo đơn mới</Text>
      </Pressable>

      <Text style={styles.section}>Đơn hàng gần đây</Text>
      <OrderList orders={orders.data} onPressOrder={onOpenOrder} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {padding: spacing.xl},
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    marginVertical: spacing.xl,
    paddingVertical: spacing.md + 2,
    borderRadius: radius.md,
    backgroundColor: colors.primaryLight,
  },
  pressed: {opacity: 0.85},
  createText: {...typography.body, color: colors.textOnPrimary, fontWeight: '700'},
  section: {...typography.title, color: colors.textPrimary, marginBottom: spacing.md},
});
