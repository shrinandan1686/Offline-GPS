import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useLocation } from './src/hooks/useLocation';
import { Speedometer } from './src/components/Speedometer';
import { Altimeter } from './src/components/Altimeter';
import { Coordinates } from './src/components/Coordinates';

export default function App() {
  const { location, errorMsg, isLoading } = useLocation();
  const [speedUnit, setSpeedUnit] = useState('km/h');
  const [altUnit, setAltUnit] = useState('m');

  const toggleSpeedUnit = () => {
    setSpeedUnit((prev) => (prev === 'km/h' ? 'mph' : 'km/h'));
  };

  const toggleAltUnit = () => {
    setAltUnit((prev) => (prev === 'm' ? 'ft' : 'm'));
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00ffcc" />
        <Text style={styles.loadingText}>Acquiring GPS Signal...</Text>
      </View>
    );
  }

  if (errorMsg) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>⚠️</Text>
        <Text style={styles.errorText}>{errorMsg}</Text>
        <Text style={styles.hintText}>Please enable location permissions and go outside for a clear signal.</Text>
      </View>
    );
  }

  const { coords, timestamp } = location || {};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <Text style={styles.appName}>OFFLINE GPS</Text>
          <View style={styles.signalIndicator}>
            <View style={[styles.dot, { backgroundColor: coords?.accuracy < 20 ? '#00ffcc' : '#ffaa00' }]} />
            <Text style={styles.signalText}>{coords?.accuracy < 20 ? 'STRONG' : 'WEAK'}</Text>
          </View>
        </View>

        <Speedometer
          speed={coords?.speed}
          unit={speedUnit}
          onToggleUnit={toggleSpeedUnit}
        />

        <View style={styles.row}>
          <Altimeter
            altitude={coords?.altitude}
            unit={altUnit}
            onToggleUnit={toggleAltUnit}
          />
          {/* Placeholder for Compass or other metric could go here, for now centering Altimeter involves styling tweaks if single */}
        </View>

        <Coordinates
          latitude={coords?.latitude}
          longitude={coords?.longitude}
          accuracy={coords?.accuracy}
        />

        <Text style={styles.footer}>
          Last Update: {timestamp ? new Date(timestamp).toLocaleTimeString() : '--:--:--'}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorContainer: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  headerContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  appName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 2,
  },
  signalIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  signalText: {
    color: '#888',
    fontSize: 10,
    fontWeight: 'bold',
  },
  loadingText: {
    color: '#888',
    marginTop: 15,
    letterSpacing: 1,
  },
  errorText: {
    color: '#ff4444',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  hintText: {
    color: '#666',
    textAlign: 'center',
  },
  row: {
    width: '90%',
    alignItems: 'center', // Center the single Altimeter for now, or use row if multiple
    justifyContent: 'center',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 'auto',
    marginBottom: 20,
    color: '#333',
    fontSize: 12,
  },
});
