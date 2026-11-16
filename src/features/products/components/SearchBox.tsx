import React from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import {Ionicons} from '@react-native-vector-icons/ionicons/static';
import {colors, radius, spacing, typography} from '../../../shared/theme';

type Props = {value: string; onChangeText: (text: string) => void; placeholder?: string};

/** Ô tìm kiếm có icon kính lúp và nút xóa nhanh. */
export default function SearchBox({value, onChangeText, placeholder}: Props) {
  return (
    <View style={styles.box}>
      <Ionicons name="search-outline" size={18} color={colors.textSecondary} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textSecondary}
        style={styles.input}
        autoCorrect={false}
        returnKeyType="search"
      />
      {value.length > 0 ? (
        <Pressable onPress={() => onChangeText('')} hitSlop={10} accessibilityLabel="Xóa tìm kiếm">
          <Ionicons name="close-circle" size={18} color={colors.textSecondary} />
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    height: 44,
    borderRadius: radius.pill,
    backgroundColor: colors.surface,
  },
  input: {flex: 1, ...typography.body, color: colors.textPrimary, paddingVertical: 0},
});
