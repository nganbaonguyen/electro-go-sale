import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Chip, {ChipTone} from '../../../shared/components/Chip';
import {colors, radius, spacing, typography} from '../../../shared/theme';
import {formatCurrency} from '../../../shared/utils/formatCurrency';
import {Customer, CustomerTier} from '../types';

const TIER: Record<CustomerTier, {label: string; tone: ChipTone}> = {
  gold: {label: 'Vàng', tone: 'warning'},
  silver: {label: 'Bạc', tone: 'info'},
  regular: {label: 'Thường', tone: 'neutral'},
};

type Props = {customer: Customer};

export default function CustomerRow({customer}: Props) {
  const {label, tone} = TIER[customer.tier];
  const initial = customer.name.trim().split(' ').pop()?.charAt(0).toUpperCase() ?? '?';
  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.initial}>{initial}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{customer.name}</Text>
        <Text style={styles.phone}>{customer.phone}</Text>
        <Chip label={`Hạng ${label}`} tone={tone} />
      </View>
      <View style={styles.spentBox}>
        <Text style={styles.spentLabel}>Đã mua</Text>
        <Text style={styles.spent}>{formatCurrency(customer.totalSpent)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.iconTile,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initial: {...typography.title, color: colors.primaryLight},
  info: {flex: 1, marginHorizontal: spacing.md, gap: 2},
  name: {...typography.body, color: colors.textPrimary, fontWeight: '700'},
  phone: {...typography.caption, color: colors.textSecondary, marginBottom: 2},
  spentBox: {alignItems: 'flex-end'},
  spentLabel: {...typography.caption, color: colors.textSecondary},
  spent: {...typography.body, color: colors.primaryLight, fontWeight: '700'},
});
