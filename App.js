import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstScreen from './screens/FirstScreen';
import Screen1_a from './screens/Screen_1_a';
import Screen1_b from './screens/Screen_1_b';
import Screen1_c from './screens/Screen_1_c';
import Screen1_d from './screens/Screen_1_d';
import Screen1_e from './screens/Screen_1_e';
import Screen2_a from './screens/Screen_2_a';
import XMEye from './screens/XMEye';
export default function App() {
    return ( 
        // <FirstScreen />
        // <Screen1_a />
        // <Screen1_b />
        // <Screen1_c />
        // <Screen1_d />
        // <Screen1_e />
        // <Screen2_a />
        <XMEye />
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