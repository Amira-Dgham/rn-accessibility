import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Switches: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>Switches</Text>
    </View>
  );
};

export default Switches;

const styles = StyleSheet.create({});
