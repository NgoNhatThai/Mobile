import { TouchableOpacity, View, StyleSheet, Text } from "react-native"
import store from "../redux/store";
import inscrement from "../redux/inscrement";
import descrement from "../redux/descrement";
import React from "react";
import { connect } from "react-redux";
// import inscrement from './redux/inscrement';
// import descrement from './redux/descrement';


function Component_01({count}){
    return(
        <View style={styles.container}>
            <View  style={styles.component}>
                <TouchableOpacity style={styles.btn} onPress={()=>{
                    //   store.dispatch(descrement);
                    //   setCount(store.getState().count)
                }}>
                    <Text style={styles.text}>-</Text>
                </TouchableOpacity>
                <Text style={styles.countText}>1</Text>
                <TouchableOpacity style={styles.btn} onPress={()=>{
                    //   store.dispatch(inscrement);
                    //   setCount(store.getState().count)
                }}>
                    <Text style={styles.text}>{count}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
var mapStateToProps= (state) => ({
    count: state.count
})
export default connect(mapStateToProps, null)(Component_01);
const styles= StyleSheet.create({
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
})