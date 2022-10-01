import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Calculatekilos from './decoV1.0/screens/Calculatekilos';

export default function App() {
  return (
    <View style={styles.container}>
      <Calculatekilos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
