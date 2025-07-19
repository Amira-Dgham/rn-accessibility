import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const gesturesAlternatives: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>gestures-alternatives</Text>
    </View>
  );
};

export default gesturesAlternatives;

const styles = StyleSheet.create({});
