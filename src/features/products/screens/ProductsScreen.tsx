import React, {useMemo, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import StateView from '../../../shared/components/StateView';
import {colors, spacing, typography} from '../../../shared/theme';
import ProductCard from '../components/ProductCard';
import SearchBox from '../components/SearchBox';
import {useProducts} from '../hooks/useProducts';
import {Product} from '../types';

export default function ProductsScreen() {
  const products = useProducts();
  const [query, setQuery] = useState('');

  const filtered = useMemo<Product[]>(() => {
    const q = query.trim().toLowerCase();
    return (products.data ?? []).filter(p => p.name.toLowerCase().includes(q));
  }, [products.data, query]);

  if (products.status !== 'ready' || !products.data) {
    return (
      <StateView
        status={products.status === 'error' ? 'error' : 'loading'}
        message={products.error}
        onRetry={products.reload}
      />
    );
  }

  // Chia thành từng hàng 2 sản phẩm
  const rows: Product[][] = [];
  for (let i = 0; i < filtered.length; i += 2) {
    rows.push(filtered.slice(i, i + 2));
  }

  return (
    <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
      <SearchBox value={query} onChangeText={setQuery} placeholder="Tìm sản phẩm..." />
      <Text style={styles.count}>{filtered.length} sản phẩm</Text>

      {rows.length === 0 ? (
        <Text style={styles.empty}>Không tìm thấy sản phẩm phù hợp</Text>
      ) : (
        rows.map((row, i) => (
          <View key={i} style={styles.row}>
            {row.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
            {row.length === 1 ? <View style={styles.filler} /> : null}
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {padding: spacing.xl},
  count: {...typography.caption, color: colors.textSecondary, marginVertical: spacing.md},
  row: {flexDirection: 'row', gap: spacing.md, marginBottom: spacing.md},
  filler: {flex: 1},
  empty: {...typography.body, color: colors.textSecondary, textAlign: 'center', marginTop: spacing.xxl},
});
