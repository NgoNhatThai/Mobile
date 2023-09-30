import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstScreen from './screens/FirstScreen';
import Screen1_a from './screens/Screen_1_a';
import Screen1_b from './screens/Screen_1_b';
import Screen1_c from './screens/Screen_1_c';

export default function App() {
    return ( 
        // <FirstScreen />
        // <Screen1_a />
        // <Screen1_b />
        <Screen1_c />
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})