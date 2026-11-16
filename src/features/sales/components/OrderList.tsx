import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@react-native-vector-icons/ionicons/static';
import {icons} from '../../../assets/icons';
import {formatCurrency} from '../../../shared/utils/formatCurrency';
import {colors, radius, spacing, typography} from '../../../shared/theme';
import {Order} from '../types';
import {orderTotal} from '../utils';

type Props = {
  orders: Order[];
  onPressOrder: (id: string) => void;
};

export default function OrderList({orders, onPressOrder}: Props) {
  return (
    <View style={styles.card}>
      {orders.map((o, i) => (
        <Pressable
          key={o.id}
          onPress={() => onPressOrder(o.id)}
          accessibilityRole="button"
          accessibilityLabel={`Đơn ${o.id} của ${o.customer}`}
          style={({pressed}) => [styles.row, i > 0 && styles.rowBorder, pressed && styles.pressed]}>
          <View style={styles.left}>
            <Text style={styles.customer}>{o.customer}</Text>
            <Text style={styles.meta}>
              {o.id} · {o.time}
            </Text>
          </View>
          <Text style={styles.total}>{formatCurrency(orderTotal(o))}</Text>
          <Ionicons name={icons.next} size={18} color={colors.textSecondary} />
        </Pressable>
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
  row: {flexDirection: 'row', alignItems: 'center', paddingVertical: spacing.md},
  rowBorder: {borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: colors.divider},
  pressed: {opacity: 0.6},
  left: {flex: 1},
  customer: {...typography.body, color: colors.textPrimary, fontWeight: '600'},
  meta: {...typography.caption, color: colors.textSecondary, marginTop: 2},
  total: {
    ...typography.body,
    color: colors.primaryLight,
    fontWeight: '700',
    marginRight: spacing.xs,
  },
});
