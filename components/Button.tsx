import {
  StyleSheet,
  type TextStyle,
  type ViewStyle,
  type StyleProp,
} from 'react-native';
import React, { ReactNode } from 'react';
import { RectButton, type RectButtonProps } from 'react-native-gesture-handler';
import { Text } from './Themed';
import { useColorScheme } from './useColorScheme';
import Colors from '@/constants/Colors';

interface ButtonProps extends RectButtonProps {
  label: string;
  icon?: ReactNode;
  color?: 'primary' | 'secondary';
  rest?: any[];
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const Button = ({
  label,
  icon,
  color = 'primary',
  style,
  labelStyle,
  ...rest
}: ButtonProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme.theme ?? 'light';
  return (
    <RectButton
      style={[
        { backgroundColor: Colors[theme].button[color].background },
        styles.button,
        style,
      ]}
      {...rest}
    >
      <Text
        style={[
          { color: Colors[theme].button[color].label },
          styles.label,
          labelStyle,
        ]}
      >
        {label}
      </Text>
    </RectButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  label: {
    fontWeight: '500',
    fontSize: 18,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
