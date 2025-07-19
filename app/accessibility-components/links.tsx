import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Links: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>Links</Text>
    </View>
  );
};

export default Links;

const styles = StyleSheet.create({});
