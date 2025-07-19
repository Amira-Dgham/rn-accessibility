import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Buttons: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>buttons</Text>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({});
