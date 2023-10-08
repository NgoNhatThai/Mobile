import {View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Button} from "react-native";
import { useState } from "react";
const data = [
    {
        username: 'user1',
        password: '123',
    },
    {
        username: 'user2',
        password: '111',
    },
    {
        username: 'user3',
        password: '222',
    },
    {
        username: 'user4',
        password: '333',
    },
]
function Screen1(){
    var [userInput, setUser]= useState('');
    var [passInput, setPass]= useState('');
    const checkLogin = () => {
        let check= false;
        data.forEach(
            d => {
                if(d.username==userInput && d.password==passInput){
                    check= true;
                }
            }
        )
        if(check==true){
            alert("Login successful!")
        } else {
            alert("UserName or Password is incorrect!")
        }
    };
    
    return(
        <View style= {styles.container}>
            <View>
                <Text style={styles.loginText}>LOGIN</Text>
            </View>
            <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholder="Name" onChangeText={setUser} value={userInput} />
                <TextInput style={styles.input} placeholder="Password " onChangeText={setPass} value={passInput}/>
                <Image style={[styles.inputImg, styles.inputImg1]} source={require('../assets/user.png')} />
                <Image style={[styles.inputImg, styles.inputImg2]} source={require('../assets/lock1.png')} />
                <Image style={[styles.inputImg, styles.inputImg3]} source={require('../assets/eye.png')} />
            </View>
            <View style= {{alignItems:'center'}}>
                <TouchableOpacity style= {styles.login} onPress={checkLogin}>
                    <Text style={styles.buttonLoginText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>CREATE ACCOUNT</Text>
        </View>
    )
}
export default Screen1;
const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundImage: 'linear-gradient(rgba(251, 203, 0, 1), rgba(191, 154, 0, 1))',
    },
    loginText: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 35,
        textAlign: 'left',
        marginTop: 50,
        marginLeft: 20
    },
    inputWrapper: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 50,
        position: 'relative',
    },
    input: {
        backgroundColor: 'rgba(196, 196, 196, 0.3)',
        marginTop: 20,
        width: 330,
        height: 54,
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'Roboto',
        paddingLeft: 55,
        whiteBorder: 1,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 1)'
    },
    inputImg: {
        width: 32,
        height: 32,
        position: 'absolute',
    },
    inputImg1: {
        left: 40,
        top: 30,
    },
    inputImg2: {
        left: 40,
        top: 105,
    },
    inputImg3: {
        right: 50,
        bottom: 10,
    },
    login: {
        display: 'flex',
        width: 330,
        height: 50,
        backgroundColor: 'rgba(6, 0, 0, 1)',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 80
    },
    buttonLoginText: {
        color: 'rgba(255, 255, 255, 1)',
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 23,
        letterSpacing: 0,
        textAlign: 'center'
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: 25,
        fontWeight: 600,
        lineHeight: 16,
        letterSpacing: 0,
        textAlign: 'center',
        marginTop: 50
    },
})