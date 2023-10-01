import { View, Image, Text, StyleSheet, Button, TouchableOpacity, TextInput } from "react-native";

function Screen1_e(){
    return(
        <View style= {styles.container}>
            <Text style={styles.loginText}>LOGIN</Text>
            <View style={styles.inputWrapper}>
                <TextInput style= {styles.input} placeholder='Name'/>
                <TextInput style= {styles.input} placeholder='Phone'/>
                <TextInput style= {styles.input} placeholder='Email'/>
                <TextInput style= {styles.input} placeholder='Password'/>
                <TextInput style= {styles.input} placeholder='Birthday'/>
                <Image style={[styles.eyeImg, {position: 'relative'}]} source={require('../assets/eye.png')}/>
            </View>
            <View style={styles.radioWrapper}>
                <View style={styles.circle}></View>`
                <Text style={styles.sex}>Male</Text>
                <View style={styles.circle}></View>
                <Text style={styles.sex}>Female</Text>`
            </View>
            <TouchableOpacity style= {styles.register}>
                <Text style={styles.buttonRegisterText}>REGISTER</Text>
            </TouchableOpacity>
            <Text style= {styles.text}>When you agree to terms and conditions</Text>
        </View>
    )
}
export default Screen1_e;
const styles= StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'rgba(49, 170, 82, 0.19)',
        alignItems: 'center'
    },
    inputWrapper: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 35
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
    loginText: {
        fontFamily: 'Roboto',
        fontWeight: 600,
        fontSize: 30,
        textAlign: 'center',
        marginTop: 50
    },
    eyeImg: {
        position: 'absolute',
        width: 38,
        height: 36,
        right: -140,
        top: -120,
    },
    radioWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: -20,
        marginLeft: -120
    },
    circle: {
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
        width: 20,
        height: 20,
        marginTop: 20,
        marginLeft: 20,
    },
    sex: {
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'Roboto',
        marginTop: 20,
        marginLeft: 10,
    },
    register: {
        display: 'flex',
        width: 330,
        height: 50,
        backgroundColor: 'rgba(229, 57, 53, 1)',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    buttonRegisterText: {
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
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 16,
        letterSpacing: 0,
        textAlign: 'center',
        marginTop: 20
    }
})