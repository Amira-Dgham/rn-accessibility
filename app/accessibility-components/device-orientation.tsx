import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DeviceOrientation: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>device-orientation</Text>
    </View>
  );
};

export default DeviceOrientation;

const styles = StyleSheet.create({});
