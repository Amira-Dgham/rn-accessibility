import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Language: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>Language</Text>
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({});
