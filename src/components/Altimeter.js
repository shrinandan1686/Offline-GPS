import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { convertAltitude } from '../utils/conversions';

export const Altimeter = ({ altitude, unit, onToggleUnit }) => {
    const displayAltitude = convertAltitude(altitude, unit);

    return (
        <View style={styles.card}>
            <Text style={styles.label}>ALTITUDE</Text>
            <TouchableOpacity onPress={onToggleUnit} style={styles.touchable}>
                <Text style={styles.value}>{displayAltitude}</Text>
                <Text style={styles.unit}>{unit}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1e1e1e',
        width: '45%',
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#333',
    },
    label: {
        color: '#888',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
        letterSpacing: 1,
    },
    touchable: {
        alignItems: 'center',
    },
    value: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        fontVariant: ['tabular-nums'],
    },
    unit: {
        color: '#555',
        fontSize: 14,
    },
});
