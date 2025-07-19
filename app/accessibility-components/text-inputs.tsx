import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TextInputs: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>text-inputs</Text>
    </View>
  );
};

export default TextInputs;

const styles = StyleSheet.create({});
