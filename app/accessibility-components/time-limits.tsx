import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TimeLimits: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>time-limits</Text>
    </View>
  );
};

export default TimeLimits;

const styles = StyleSheet.create({});
