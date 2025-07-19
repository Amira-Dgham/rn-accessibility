import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ReduceMotion: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>ReduceMotion</Text>
    </View>
  );
};

export default ReduceMotion;

const styles = StyleSheet.create({});
