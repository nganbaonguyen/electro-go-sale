import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, radius, spacing, typography} from '../../../shared/theme';
import {Order} from '../types';
import {formatCurrency} from '../utils/formatCurrency';

type Props = {orders: Order[]};

export default function OrderList({orders}: Props) {
  return (
    <View style={styles.card}>
      {orders.map((o, i) => (
        <View key={o.id} style={[styles.row, i > 0 && styles.rowBorder]}>
          <View style={styles.left}>
            <Text style={styles.customer}>{o.customer}</Text>
            <Text style={styles.meta}>
              {o.id} · {o.time}
            </Text>
          </View>
          <Text style={styles.total}>{formatCurrency(o.total)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  rowBorder: {borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: colors.divider},
  left: {flex: 1},
  customer: {...typography.body, color: colors.textPrimary, fontWeight: '600'},
  meta: {...typography.caption, color: colors.textSecondary, marginTop: 2},
  total: {...typography.body, color: colors.primaryLight, fontWeight: '700'},
});
