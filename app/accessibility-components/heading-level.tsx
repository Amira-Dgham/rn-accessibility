import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeadingLevel: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>HeadingLevel</Text>
    </View>
  );
};

export default HeadingLevel;

const styles = StyleSheet.create({});
