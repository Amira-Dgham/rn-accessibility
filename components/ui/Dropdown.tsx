import { useTheme } from '@/hooks/useTheme';
import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface DropdownProps {
  selectedValue: string;
  onValueChange: (value: string) => void;
  items: { label: string; value: string }[];
  style?: object;
}

const Item: any = Picker.Item;

const Dropdown: React.FC<DropdownProps> = ({ selectedValue, onValueChange, items, style }) => {
  const { colors } = useTheme();

  const dynamicStyles = {
    picker: {
      height: 50,
      width: '100%',
      borderColor: colors.gray,
      borderWidth: 1,
      borderRadius: 5,
      color: colors.text,
    },
  };

  return (
    <View style={styles.dropdownContainer}>
      <Picker
        mode="dropdown"
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={[dynamicStyles.picker, style]}
      >
        {items.map((item) => (
          <Item
            key={item.value}
            label={item.label}
            value={item.value}
            accessibilityLabel={item.label}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    marginTop: 20,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dropdown;
