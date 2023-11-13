import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import store from './redux/store';
import { useState } from 'react';
import { Provider } from 'react-redux';
import Component_01 from './screens/component_01';


export default function App() {
  const [count, setCount] = useState(0)
  return (
    <Provider store={store}>
      <Component_01 />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  component: {
    width: '90%',
    height: 130,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 2,
    borderColor: 'black',
    paddingTop: 30
  },
  btn: {
    width: 80,
    height: 80,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: 'black',
    alignItems:'center'
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 30,
    textAlign: 'center'
  },
  countText: {
    fontFamily: 'Inter',
    fontSize: 30,
    textAlign: 'center',
    color: 'blue'
  }
});
