import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useColorScheme } from './useColorScheme';
import Colors from '@/constants/Colors';

const Chip = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme.theme ?? 'light';
  return (
    <View
      style={[
        {
          backgroundColor: Colors[theme].input.background,
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderRadius: 99,
        },
      ]}
    >
      <Text style={[{ color: Colors[theme].input.text, fontWeight: '600' }]}>
        Chip
      </Text>
    </View>
  );
};

export default Chip;

const styles = StyleSheet.create({});
