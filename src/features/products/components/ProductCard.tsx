import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@react-native-vector-icons/ionicons/static';
import Chip, {ChipTone} from '../../../shared/components/Chip';
import {colors, radius, spacing, typography} from '../../../shared/theme';
import {formatCurrency} from '../../../shared/utils/formatCurrency';
import {Product} from '../types';

/** Trạng thái tồn kho: hết hàng (0), sắp hết (< 5), còn hàng. */
function stockInfo(stock: number): {label: string; tone: ChipTone} {
  if (stock === 0) {
    return {label: 'Hết hàng', tone: 'danger'};
  }
  if (stock < 5) {
    return {label: `Sắp hết (${stock})`, tone: 'warning'};
  }
  return {label: `Còn ${stock}`, tone: 'success'};
}

type Props = {product: Product};

export default function ProductCard({product}: Props) {
  const {label, tone} = stockInfo(product.stock);
  return (
    <View style={styles.card}>
      <View style={styles.iconBox}>
        <Ionicons name={product.icon} size={34} color={colors.primaryLight} />
      </View>
      <Text style={styles.name} numberOfLines={2}>
        {product.name}
      </Text>
      <Text style={styles.price}>{formatCurrency(product.price)}</Text>
      <Chip label={label} tone={tone} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {flex: 1, backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.md},
  iconBox: {
    height: 88,
    borderRadius: radius.md,
    backgroundColor: colors.iconTile,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  name: {...typography.body, color: colors.textPrimary, fontWeight: '600', minHeight: 40},
  price: {...typography.body, color: colors.primaryLight, fontWeight: '700', marginVertical: spacing.xs},
});
