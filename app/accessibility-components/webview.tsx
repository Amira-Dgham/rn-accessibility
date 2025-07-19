import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const WebView: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>WebView</Text>
    </View>
  );
};

export default WebView;

const styles = StyleSheet.create({});
