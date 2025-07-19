import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Alerts: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>Alerts</Text>
    </View>
  );
};

export default Alerts;

const styles = StyleSheet.create({});
