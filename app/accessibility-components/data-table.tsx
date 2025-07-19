import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DataTable: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>data-table</Text>
    </View>
  );
};

export default DataTable;

const styles = StyleSheet.create({});
