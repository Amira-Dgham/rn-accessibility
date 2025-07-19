import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const videos: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>videos</Text>
    </View>
  );
};

export default videos;

const styles = StyleSheet.create({});
