import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const checkboxes: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>checkboxs</Text>
    </View>
  );
};

export default checkboxes;

const styles = StyleSheet.create({});
