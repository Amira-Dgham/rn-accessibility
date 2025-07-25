import { useTheme } from '@/hooks/useTheme';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { ThemedText } from './ThemedText';

interface HeaderProps {
  title: string;
  subtitle?: string;
  containerStyle?: ViewStyle;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, containerStyle }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.header, containerStyle]}>
      <ThemedText variant="h2">{title}</ThemedText>
      {subtitle && (
        <ThemedText variant="body" color={colors.gray} style={{ textAlign: 'center' }}>
          {subtitle}
        </ThemedText>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    margin: 20
  },
});
