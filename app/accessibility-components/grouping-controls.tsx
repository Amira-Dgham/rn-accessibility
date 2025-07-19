import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GroupingControls: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>GroupingControls</Text>
    </View>
  );
};

export default GroupingControls;

const styles = StyleSheet.create({});
