import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, radius, spacing, typography} from '../../../shared/theme';
import {formatCurrency} from '../utils/formatCurrency';

type Props = {total: number; orderCount: number};

export default function RevenueCard({total, orderCount}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.caption}>Doanh thu hôm nay</Text>
      <Text style={styles.total}>{formatCurrency(total)}</Text>
      <Text style={styles.caption}>{orderCount} đơn hàng</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    padding: spacing.xl,
  },
  caption: {...typography.body, color: 'rgba(255,255,255,0.78)'},
  total: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.textOnPrimary,
    marginVertical: spacing.sm,
  },
});
