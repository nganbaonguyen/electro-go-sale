import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import StateView from '../../../shared/components/StateView';
import {colors, spacing, typography} from '../../../shared/theme';
import CustomerRow from '../components/CustomerRow';
import {useCustomers} from '../hooks/useCustomers';

export default function CustomersScreen() {
  const customers = useCustomers();

  if (customers.status !== 'ready' || !customers.data) {
    return (
      <StateView
        status={customers.status === 'error' ? 'error' : 'loading'}
        message={customers.error}
        onRetry={customers.reload}
      />
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.count}>{customers.data.length} khách hàng</Text>
      {customers.data.map(c => (
        <CustomerRow key={c.id} customer={c} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {padding: spacing.xl},
  count: {...typography.body, color: colors.textSecondary, marginBottom: spacing.md},
});
