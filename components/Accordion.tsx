import { useTheme } from '@/hooks/useTheme';
import { ChevronDown, ChevronUp } from 'lucide-react-native';
import React, { useState } from 'react';
import { StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { ThemedText } from './ThemedText';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  expanded?: boolean;
  onToggle?: (expanded: boolean) => void;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  contentStyle?: ViewStyle;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  expanded: expandedProp,
  onToggle,
  style,
  titleStyle,
  contentStyle,
}) => {
  const [internalExpanded, setInternalExpanded] = useState(false);
  const expanded = expandedProp !== undefined ? expandedProp : internalExpanded;
  const { colors } = useTheme();

  const handleToggle = () => {
    if (onToggle) {
      onToggle(!expanded);
    } else {
      setInternalExpanded((prev) => !prev);
    }
  };

  return (
    <View
      style={[
        styles.container,
        { borderColor: colors.background, backgroundColor: colors.background },
        style,
      ]}
    >
      <TouchableOpacity
        onPress={handleToggle}
        style={[styles.header, { backgroundColor: colors.purpleBackground }]}
      >
        <ThemedText
          variant="bodyMedium"
          style={[styles.title, { color: colors.purpleText }, ...(titleStyle ? [titleStyle] : [])]}
        >
          {title}
        </ThemedText>
        {expanded ? (
          <ChevronUp color={colors.purple} size={20} />
        ) : (
          <ChevronDown color={colors.purple} size={20} />
        )}
      </TouchableOpacity>
      {expanded && (
        <View style={[styles.content, { backgroundColor: colors.background }, contentStyle]}>
          {children}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
});

export default Accordion;
