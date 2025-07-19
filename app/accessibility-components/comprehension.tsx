import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Comprehension: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>comprehension</Text>
    </View>
  );
};

export default Comprehension;

const styles = StyleSheet.create({});
