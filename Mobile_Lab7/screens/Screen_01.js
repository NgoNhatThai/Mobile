import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from "react-native"
import {useEffect, useState} from "react"

function Screen_01({navigation}) {
    const [nameList, setNameList] = useState([])
    const [name, setName] = useState('')
    useEffect(()=>{
            getListName();
        }, []
    )
    const getListName = ()=>{
        fetch('https://654108cc45bedb25bfc31cd9.mockapi.io/todoList')
        .then(response => response.json())
        .then((json)=>{
            setNameList(json)
        })
    }
    return ( 
        <View style = { styles.container } >
            <View style = { styles.headerWrapper } >

            </View> 
            <View style={styles.textWrapper}>
                <Text style={styles.text}>MANAGE YOUR TASK</Text>
            </View>
            <View style={styles.inputWrapper}>
                <TextInput placeholder="Enter your name" style={styles.input} onChangeText={setName} />
                <Image style={styles.inputImg} source={require('../assets/Frame.png')} />
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>{
                nameList.forEach(item => {
                    if(item.name==name){
                        let todos=item.todos
                        navigation.navigate('Screen_02', {nameAPI: name, todosAPI: todos});
                    }
                });
            }}>
                <Text style={styles.btnText}>GET STARTED -</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Screen_01;
const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column'
    },
    headerWrapper: {
        width: 271,
        height: 271,
        margin: 40,
        borderWidth: 2,
        borderColor: 'black'
    },
    textWrapper: {
        width: 200,
        height: 80,
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Epilogue',
        fontSize: 24,
        fontWeight: 700,
        lineHeight: 36,
        letterSpacing: 0,
        textAlign: 'center',
        color: '#8353E2'
    },
    input: {
        width: 334,
        height: 42,
        borderWidth: 1,
        borderColor: '#9095A0',
        marginTop: 40,
        borderRadius: 12,
        paddingLeft: 40,
        position: 'relative'
    },
    inputImg: {
        width: 20,
        height: 20,
        position: 'absolute',
        left: 10,
        top: 53
    },
    inputWrapper: {
        width: 350,
        height: 100
    },
    btn: {
        width: 190,
        height: 44,
        borderRadius: 12,
        marginTop: 40,
        backgroundColor: '#00BDD6',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 26,
        letterSpacing: 0,
        color: '#FFFFFF'
    }
})