import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Pickers: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>Pickers</Text>
    </View>
  );
};

export default Pickers;

const styles = StyleSheet.create({});
