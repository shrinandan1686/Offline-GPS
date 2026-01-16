import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';

export const Coordinates = ({ latitude, longitude, accuracy }) => {
    const lat = latitude?.toFixed(6) ?? '---';
    const lon = longitude?.toFixed(6) ?? '---';
    const acc = accuracy?.toFixed(1) ?? '--';

    const copyToClipboard = async () => {
        if (latitude && longitude) {
            await Clipboard.setStringAsync(`${lat}, ${lon}`);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={copyToClipboard} style={styles.card}>
                <Text style={styles.label}>COORDINATES</Text>
                <Text style={styles.coordsValue}>{lat}</Text>
                <Text style={styles.coordsValue}>{lon}</Text>
                <Text style={styles.hint}>(Tap to copy)</Text>
            </TouchableOpacity>

            <View style={styles.accuracyCard}>
                <Text style={styles.label}>ACCURACY</Text>
                <Text style={styles.accuracyValue}>±{acc}m</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    card: {
        backgroundColor: '#1e1e1e',
        width: '58%',
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#333',
    },
    accuracyCard: {
        backgroundColor: '#1e1e1e',
        width: '38%',
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#333',
    },
    label: {
        color: '#888',
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 8,
        letterSpacing: 1,
    },
    coordsValue: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        fontVariant: ['tabular-nums'],
        textAlign: 'center',
    },
    accuracyValue: {
        color: '#aaa',
        fontSize: 16,
        fontWeight: 'bold',
    },
    hint: {
        color: '#444',
        fontSize: 10,
        marginTop: 5,
    },
});
