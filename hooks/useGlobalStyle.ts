// src/styles/globalStyles.ts
import { useTheme } from '@/hooks/useTheme';
import { StyleSheet } from 'react-native';

export function useGlobalStyles() {
    const { colors } = useTheme();

    return StyleSheet.create({
        container: {
            flex: 1,
        },
        card: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: 16,
            marginHorizontal: 16,
            borderRadius: 12,
            backgroundColor: colors.background,
            shadowColor: colors.text,
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 2,
        },
    });
}