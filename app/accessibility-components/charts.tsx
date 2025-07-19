import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const charts: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>charts</Text>
    </View>
  );
};

export default charts;

const styles = StyleSheet.create({});
