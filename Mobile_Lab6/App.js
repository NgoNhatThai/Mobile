import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen4_a from './screens/Screen4_a';
import Screen4_b from './screens/Screen4_b';
export default function App() {
  return (
    //<Screen4_a />
    <Screen4_b />
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
