import { View, Image, Text, StyleSheet, Button, TouchableOpacity, TextInput } from "react-native";

function Screen1_d(){
    return(
        <View style= {styles.container}>
            <Text style={styles.loginText}>LOGIN</Text>
            <View style={styles.inputWrapper}>
                <TextInput style= {styles.input} placeholder='Email'/>
                <TextInput style= {[styles.input, styles.inputPass]} placeholder='Password'/>
                <Image style={[styles.eyeImg, {position: 'relative'}]} source={require('../assets/eye.png')}/>
            </View>
            <TouchableOpacity style= {styles.login}>
                <Text style={styles.buttonLoginText}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={styles.text1}>When you agree to terms and conditions</Text>
            <Text style={styles.text2}>For got your password?</Text>
            <Text style={styles.text1}>Or login with</Text>
            <View style={styles.btnWrapper}>
                <TouchableOpacity style={[styles.btnSocial, {backgroundColor: '#4267B2'}]}>
                    <Image style={styles.btnImage1} source={require('../assets/facebook.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnSocial, {backgroundColor: '#0058d9'}]}>
                    <Image style={styles.btnImage2} source={require('../assets/zalo.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnSocial, styles.btnBorder]}>
                    <Image style={styles.btnImage2} source={require('../assets/google.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Screen1_d;
const styles= StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'rgba(49, 170, 82, 0.19)',
        alignItems: 'center'
    },
    loginText: {
        fontFamily: 'Roboto',
        fontWeight: 600,
        fontSize: 30,
        textAlign: 'center',
        marginTop: 50
    },
    inputWrapper: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 50
    }, 
    input: {
        width: 330,
        height: 54,
        marginTop: 20,
        display: 'flex',
        backgroundColor: 'rgba(196, 196, 196, 0.3)',
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'Roboto',
        paddingLeft: 20,
    },
    eyeImg: {
        position: 'absolute',
        width: 38,
        height: 36,
        right: -140,
        top: -45,
    },
    login: {
        display: 'flex',
        width: 330,
        height: 50,
        backgroundColor: 'rgba(229, 57, 53, 1)',
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
    text1: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 16,
        letterSpacing: 0,
        textAlign: 'center',
        marginTop: 20
    },
    text2: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 16,
        letterSpacing: 0,
        textAlign: 'center',
        color: 'rgba(93, 37, 250, 1)',
        marginTop: 20
    },
    btnWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,
    },
    btnImage1: {
        width: 35,
        height: 35,
    },
    btnImage2: {
        width: 25,
        height: 25,
    },
    btnSocial: {
        width: 85,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnBorder: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#0058d9',
    }
})