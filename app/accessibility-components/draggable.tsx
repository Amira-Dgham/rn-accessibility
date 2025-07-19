import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Draggable: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>Draggable</Text>
    </View>
  );
};

export default Draggable;

const styles = StyleSheet.create({});
