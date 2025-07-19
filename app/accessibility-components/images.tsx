import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Images: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>Images</Text>
    </View>
  );
};

export default Images;

const styles = StyleSheet.create({});
