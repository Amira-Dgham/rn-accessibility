import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const EscapeAction: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>EscapeAction</Text>
    </View>
  );
};

export default EscapeAction;

const styles = StyleSheet.create({});
