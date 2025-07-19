import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProgressIndicators: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>ProgressIndicators</Text>
    </View>
  );
};

export default ProgressIndicators;

const styles = StyleSheet.create({});
