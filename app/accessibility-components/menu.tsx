import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Menu: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>Menu</Text>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({});
