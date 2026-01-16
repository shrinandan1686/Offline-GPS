import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { convertSpeed } from '../utils/conversions';

export const Speedometer = ({ speed, unit, onToggleUnit }) => {
    const displaySpeed = convertSpeed(speed, unit);

    return (
        <View style={styles.card}>
            <Text style={styles.label}>SPEED</Text>
            <TouchableOpacity onPress={onToggleUnit} style={styles.touchable}>
                <Text style={styles.speedValue}>{displaySpeed}</Text>
                <Text style={styles.unit}>{unit}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1e1e1e',
        width: '90%',
        padding: 30,
        borderRadius: 20,
        alignItems: 'center',
        marginVertical: 15,
        borderWidth: 1,
        borderColor: '#333',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 8,
    },
    label: {
        color: '#888',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
        letterSpacing: 2,
    },
    touchable: {
        alignItems: 'center',
    },
    speedValue: {
        color: '#00ffcc',
        fontSize: 90,
        fontWeight: 'bold',
        fontVariant: ['tabular-nums'],
        textShadowColor: 'rgba(0, 255, 204, 0.3)',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
    },
    unit: {
        color: '#555',
        fontSize: 20,
        marginTop: -5,
    },
});
