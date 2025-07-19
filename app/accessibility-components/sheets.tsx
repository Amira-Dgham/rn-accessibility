import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Sheets: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>Sheets</Text>
    </View>
  );
};

export default Sheets;

const styles = StyleSheet.create({});
