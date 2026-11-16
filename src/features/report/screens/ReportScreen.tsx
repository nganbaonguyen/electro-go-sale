import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import StateView from '../../../shared/components/StateView';
import {colors, radius, spacing, typography} from '../../../shared/theme';
import {formatCurrency} from '../../../shared/utils/formatCurrency';
import BarChart from '../components/BarChart';
import KpiCard from '../components/KpiCard';
import {useWeeklyReport} from '../hooks/useWeeklyReport';

export default function ReportScreen() {
  const report = useWeeklyReport();

  if (report.status !== 'ready' || !report.data) {
    return (
      <StateView
        status={report.status === 'error' ? 'error' : 'loading'}
        message={report.error}
        onRetry={report.reload}
      />
    );
  }

  const {days, orders, topProducts} = report.data;
  const total = days.reduce((sum, d) => sum + d.value, 0);

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Text style={styles.heroCaption}>Doanh thu 7 ngày qua</Text>
        <Text style={styles.heroValue}>{formatCurrency(total)}</Text>
      </View>

      <View style={styles.kpiRow}>
        <KpiCard label="Số đơn" value={String(orders)} />
        <KpiCard label="Trung bình / ngày" value={formatCurrency(total / days.length)} />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Doanh thu theo ngày</Text>
        <BarChart data={days} />
      </View>

      <Text style={styles.section}>Bán chạy nhất</Text>
      <View style={styles.card}>
        {topProducts.map((p, i) => (
          <View key={p.name} style={[styles.topRow, i > 0 && styles.topRowBorder]}>
            <View style={styles.rank}>
              <Text style={styles.rankText}>{i + 1}</Text>
            </View>
            <Text style={styles.topName} numberOfLines={1}>
              {p.name}
            </Text>
            <Text style={styles.topSold}>{p.sold} đã bán</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {padding: spacing.xl},
  hero: {backgroundColor: colors.primary, borderRadius: radius.lg, padding: spacing.xl},
  heroCaption: {...typography.body, color: 'rgba(255,255,255,0.78)'},
  heroValue: {fontSize: 32, fontWeight: '700', color: colors.textOnPrimary, marginTop: spacing.xs},
  kpiRow: {flexDirection: 'row', gap: spacing.md, marginVertical: spacing.md},
  card: {backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.lg},
  cardTitle: {...typography.body, color: colors.textPrimary, fontWeight: '700', marginBottom: spacing.lg},
  section: {...typography.title, color: colors.textPrimary, marginTop: spacing.xl, marginBottom: spacing.md},
  topRow: {flexDirection: 'row', alignItems: 'center', paddingVertical: spacing.md},
  topRowBorder: {borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: colors.divider},
  rank: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.iconTile,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  rankText: {...typography.caption, color: colors.primaryLight, fontWeight: '700'},
  topName: {flex: 1, ...typography.body, color: colors.textPrimary},
  topSold: {...typography.caption, color: colors.textSecondary, fontWeight: '600'},
});
