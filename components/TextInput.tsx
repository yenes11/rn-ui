import {
  StyleSheet,
  Text,
  View,
  TextInput as Input,
  TouchableOpacity,
} from 'react-native';
import React, { useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from './useColorScheme';
import Colors from '@/constants/Colors';

const TextInput = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme.theme ?? 'light';
  return (
    <TouchableOpacity style={styles.container}>
      <Input
        placeholder="Name"
        placeholderTextColor={Colors[theme].input.placeholder}
        style={[
          {
            backgroundColor: Colors[theme].input.background,
            color: Colors[theme].input.text,
            borderColor: Colors[theme].input.border,
          },
          styles.input,
        ]}
      />
      <Ionicons
        style={{
          position: 'absolute',
          left: 12,
        }}
        name="accessibility"
        size={20}
        color={Colors[theme].input.text}
      />
    </TouchableOpacity>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
  },
  input: {
    borderRadius: 8,
    fontSize: 20,
    paddingVertical: 8,
    paddingLeft: 44,
    paddingHorizontal: 8,
    width: '100%',
    borderWidth: 1,
  },
});
