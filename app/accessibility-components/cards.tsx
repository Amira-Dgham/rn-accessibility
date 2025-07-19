import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Cards: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>cards</Text>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({});
