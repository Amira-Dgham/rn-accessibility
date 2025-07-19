import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RadioButton: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>RadioButton</Text>
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({});
