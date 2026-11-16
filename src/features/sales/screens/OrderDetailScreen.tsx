import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import StateView from '../../../shared/components/StateView';
import {colors, radius, spacing, typography} from '../../../shared/theme';
import {formatCurrency} from '../../../shared/utils/formatCurrency';
import {useOrder} from '../hooks/useOrder';
import {orderTotal} from '../utils';

type Props = {orderId: string};

export default function OrderDetailScreen({orderId}: Props) {
  const order = useOrder(orderId);

  if (order.status !== 'ready' || !order.data) {
    return (
      <StateView
        status={order.status === 'error' ? 'error' : 'loading'}
        message={order.error}
        onRetry={order.reload}
      />
    );
  }

  const o = order.data;
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.customer}>{o.customer}</Text>
      <Text style={styles.meta}>
        {o.id} · {o.time}
      </Text>

      <View style={styles.card}>
        {o.items.map((item, i) => (
          <View key={`${item.name}-${i}`} style={[styles.row, i > 0 && styles.rowBorder]}>
            <View style={styles.left}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.meta}>
                {item.quantity} x {formatCurrency(item.price)}
              </Text>
            </View>
            <Text style={styles.itemTotal}>{formatCurrency(item.price * item.quantity)}</Text>
          </View>
        ))}
      </View>

      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Tổng cộng</Text>
        <Text style={styles.totalValue}>{formatCurrency(orderTotal(o))}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {padding: spacing.xl},
  customer: {...typography.headline, color: colors.textPrimary},
  meta: {...typography.caption, color: colors.textSecondary, marginTop: 2},
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
    marginTop: spacing.lg,
  },
  row: {flexDirection: 'row', alignItems: 'center', paddingVertical: spacing.md},
  rowBorder: {borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: colors.divider},
  left: {flex: 1},
  itemName: {...typography.body, color: colors.textPrimary, fontWeight: '600'},
  itemTotal: {...typography.body, color: colors.textPrimary, fontWeight: '600'},
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.xl,
    padding: spacing.lg,
    borderRadius: radius.lg,
    backgroundColor: colors.primary,
  },
  totalLabel: {...typography.body, color: 'rgba(255,255,255,0.78)'},
  totalValue: {...typography.title, color: colors.textOnPrimary},
});
