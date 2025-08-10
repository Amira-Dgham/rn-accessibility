import { ThemedText, ThemedView } from './ThemedText';

import React from 'react';
import { StyleSheet } from 'react-native';

export interface AlertProps {
  title: string;
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  accessibilityLevel?: 'A' | 'AA' | 'AAA';
}

export const Alert: React.FC<AlertProps> = ({
  title,
  message,
  type = 'info',
  accessibilityLevel = 'A',
}) => {
  const getAlertStyle = () => {
    switch (type) {
      case 'success':
        return styles.success;
      case 'warning':
        return styles.warning;
      case 'error':
        return styles.error;
      default:
        return styles.info;
    }
  };

  return (
    <ThemedView style={[styles.container, getAlertStyle()]}>
      <ThemedText style={styles.title}>{title}</ThemedText>
      <ThemedText style={styles.message}>{message}</ThemedText>
      <ThemedText style={styles.level}>Level: {accessibilityLevel}</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  message: {
    fontSize: 14,
    marginBottom: 8,
  },
  level: {
    fontSize: 12,
    fontStyle: 'italic',
    opacity: 0.7,
  },
  info: {
    backgroundColor: '#E3F2FD',
    borderLeftWidth: 4,
    borderLeftColor: '#1976D2',
  },
  success: {
    backgroundColor: '#E8F5E8',
    borderLeftWidth: 4,
    borderLeftColor: '#388E3C',
  },
  warning: {
    backgroundColor: '#FFF3E0',
    borderLeftWidth: 4,
    borderLeftColor: '#F57C00',
  },
  error: {
    backgroundColor: '#FFEBEE',
    borderLeftWidth: 4,
    borderLeftColor: '#D32F2F',
  },
});
