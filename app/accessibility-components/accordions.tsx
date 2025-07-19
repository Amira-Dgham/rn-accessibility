import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Accordions: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>Accordions</Text>
    </View>
  );
};

export default Accordions;

const styles = StyleSheet.create({});
