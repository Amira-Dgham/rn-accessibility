import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Sliders: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>Sliders</Text>
    </View>
  );
};

export default Sliders;

const styles = StyleSheet.create({});
