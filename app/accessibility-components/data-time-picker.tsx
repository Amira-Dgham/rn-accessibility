import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DateTimePicker: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>data-time-picker</Text>
    </View>
  );
};

export default DateTimePicker;

const styles = StyleSheet.create({});
