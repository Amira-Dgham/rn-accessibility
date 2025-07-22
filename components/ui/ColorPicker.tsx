import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReanimatedColorPicker, { BrightnessSlider, HueSlider, Panel1, Preview, SaturationSlider } from 'reanimated-color-picker';

interface ColorPickerProps {
    value: string;
    onChange: (color: string) => void;
    label?: string;
    accessibilityLabel?: string;
    // Optionally provide a color to check contrast against (e.g., for text vs background)
    contrastWithColor?: string;
}

// Simple contrast ratio checker (WCAG)
function getContrastRatio(hex1: string, hex2: string): number {
    function luminance(hex: string) {
        let c = hex.substring(1); // strip #
        let rgb = parseInt(c, 16);
        let r = (rgb >> 16) & 0xff;
        let g = (rgb >> 8) & 0xff;
        let b = rgb & 0xff;
        [r, g, b] = [r, g, b].map((v) => {
            v /= 255;
            return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }
    const l1 = luminance(hex1);
    const l2 = luminance(hex2);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ value, onChange, label, accessibilityLabel, contrastWithColor }) => {
    // Handler for color change
    const handleColorChange = ({ hex }: { hex: string }) => {
        onChange(hex);
    };

    // Calculate contrast ratio if both colors provided
    let contrastRatio: number | null = null;
    if (contrastWithColor) {
        try {
            contrastRatio = getContrastRatio(value, contrastWithColor);
        } catch { }
    }

    return (
        <View style={styles.container} accessible accessibilityLabel={accessibilityLabel || label} accessibilityRole="adjustable">
            {label && <Text style={styles.label}>{label}</Text>}
            <ReanimatedColorPicker
                value={value}
                onChangeJS={handleColorChange}
                style={styles.picker}
                sliderThickness={18}
                thumbSize={24}
                boundedThumb
            >
                <Panel1 style={styles.panel} />
                <HueSlider style={styles.slider} />
                <SaturationSlider style={styles.slider} />
                <BrightnessSlider style={styles.slider} />
                <Preview style={styles.preview} />
            </ReanimatedColorPicker>
            {contrastWithColor && contrastRatio !== null && (
                <Text style={styles.contrast}>
                    Contrast Ratio: {contrastRatio.toFixed(2)} {contrastRatio < 4.5 ? '(Low)' : '(Good)'}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 8,
        fontSize: 16,
    },
    picker: {
        width: 260,
        alignItems: 'center',
    },
    panel: {
        width: 220, height: 180, borderRadius: 20

    },
    slider: {
        marginVertical: 8,
        width: 220,
    },
    swatches: {
        marginTop: 8,
    },
    preview: {
        marginTop: 8,
        width: 60,
        height: 30,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    contrast: {
        marginTop: 10,
        fontSize: 14,
        color: '#555',
    },
});

export default ColorPicker;

