import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, radius, spacing, typography} from '../../../shared/theme';

type Props = {label: string; value: string};

export default function KpiCard({label, value}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value} numberOfLines={1} adjustsFontSizeToFit>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {flex: 1, backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.md},
  label: {...typography.caption, color: colors.textSecondary},
  value: {...typography.title, color: colors.textPrimary, marginTop: spacing.xs},
});
