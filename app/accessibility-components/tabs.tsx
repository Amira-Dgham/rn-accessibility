import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Tabs: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>Tabs</Text>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
