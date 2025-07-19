import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Lists: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>Lists</Text>
    </View>
  );
};

export default Lists;

const styles = StyleSheet.create({});
