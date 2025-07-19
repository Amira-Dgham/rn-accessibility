import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LargeContentViewer: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>LargeContentViewer</Text>
    </View>
  );
};

export default LargeContentViewer;

const styles = StyleSheet.create({});
