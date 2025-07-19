import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PopOvers: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>PopOvers</Text>
    </View>
  );
};

export default PopOvers;

const styles = StyleSheet.create({});
