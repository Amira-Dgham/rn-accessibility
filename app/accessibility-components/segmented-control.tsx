import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SegmentedControl: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>segmented-control</Text>
    </View>
  );
};

export default SegmentedControl;

const styles = StyleSheet.create({});
