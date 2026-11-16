import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, spacing, typography} from '../../../shared/theme';
import {DailyRevenue} from '../types';

const CHART_HEIGHT = 140;

type Props = {data: DailyRevenue[]};

/** Biểu đồ cột doanh thu 7 ngày, vẽ bằng View (không cần thư viện). Cột cao nhất tô cam. */
export default function BarChart({data}: Props) {
  const max = Math.max(...data.map(d => d.value), 1);
  return (
    <View style={styles.chart}>
      {data.map(d => {
        const isMax = d.value === max;
        return (
          <View key={d.label} style={styles.column}>
            <Text style={styles.value}>{Math.round(d.value / 1000000)}tr</Text>
            <View style={styles.barArea}>
              <View
                style={[
                  styles.bar,
                  {height: Math.max(6, (d.value / max) * CHART_HEIGHT)},
                  isMax ? styles.barMax : styles.barNormal,
                ]}
              />
            </View>
            <Text style={styles.label}>{d.label}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  chart: {flexDirection: 'row', alignItems: 'flex-end', gap: spacing.sm},
  column: {flex: 1, alignItems: 'center'},
  value: {fontSize: 10, color: colors.textSecondary, marginBottom: spacing.xs},
  barArea: {height: CHART_HEIGHT, justifyContent: 'flex-end', alignSelf: 'stretch'},
  bar: {borderRadius: 6, alignSelf: 'stretch'},
  barNormal: {backgroundColor: colors.primaryLight},
  barMax: {backgroundColor: colors.accent},
  label: {...typography.caption, color: colors.textSecondary, marginTop: spacing.sm, fontWeight: '600'},
});
