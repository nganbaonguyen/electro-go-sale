import React from 'react';
import {Alert, Pressable, ScrollView, StyleSheet, Text} from 'react-native';
import {Ionicons} from '@react-native-vector-icons/ionicons/static';
import {colors, radius, spacing, typography} from '../../../shared/theme';
import OrderList from '../components/OrderList';
import RevenueCard from '../components/RevenueCard';
import {MOCK_ORDERS} from '../data/mockOrders';

export default function SalesScreen() {
  const total = MOCK_ORDERS.reduce((sum, o) => sum + o.total, 0);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Bán hàng</Text>

      <RevenueCard total={total} orderCount={MOCK_ORDERS.length} />

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Tạo đơn mới"
        onPress={() => Alert.alert('Tạo đơn', 'Tính năng đang được phát triển')}
        style={({pressed}) => [styles.createButton, pressed && styles.pressed]}>
        <Ionicons name="add-circle-outline" size={22} color={colors.textOnPrimary} />
        <Text style={styles.createText}>Tạo đơn mới</Text>
      </Pressable>

      <Text style={styles.section}>Đơn hàng gần đây</Text>
      <OrderList orders={MOCK_ORDERS} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.background},
  content: {padding: spacing.xl},
  title: {...typography.headline, color: colors.textPrimary, marginBottom: spacing.lg},
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
