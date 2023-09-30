import { View, Image, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

function Screen1_b(){
    return(
        <View style={styles.containter}>
            <View style={styles.lockWrapper}>
                <Image style= {styles.image} source={require('../assets/lock.png')}/>
            </View>
            <Text style= {styles.passwordType}>PASSWORD</Text>
            <Text style= {styles.description}>Provide your account’s email for which you want to reset your password</Text>
            <View style={styles.emailWrapper}>
                <TouchableOpacity style={styles.btnEmail}>
                    <Image style={styles.mail} source={require('../assets/iconMail.png')}/>
                    <Text style={styles.mailText}>Email</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.nextWrapper}>
                <TouchableOpacity style={styles.btnNext}>NEXT</TouchableOpacity>
            </View>
        </View>
    )
}
export default Screen1_b;
const styles = StyleSheet.create({
    containter: {
        width: '100%',
        backgroundImage: 'linear-gradient(rgba(199, 244, 246, 1),  rgba(209, 244, 246, 1), rgba(229, 244, 245, 1) ,rgba(0, 204, 249, 1))',
    },
    image: {
        marginTop: 100,
        width: 105,
        height: 117
    },
    lockWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    passwordType: {
        width:189,
        height:58,
        left:90,
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: '25px',
        marginTop: '50px',
    },
    description: {
        fontSize: '18px',
        fontFamily: 'Roboto',
        textAlign: 'center',
        fontWeight: 700,
        marginTop: '50px',
    },
    emailWrapper: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 45
    },
    btnEmail: {
        width: '80%',
        height: 50,
        backgroundColor: '#c4c4c4',
        display: 'flex',
        flexDirection: 'row',
    },
    mail: {
        width: 48,
        height: 45
    },
    mailText: {
        fontFamily: 'Roboto', 
        fontWeight: 400,
        fontSize: '15px',
        paddingTop: 16,
    },
    btnNext: {
        width: '80%',
        height: 50,
        backgroundColor: '#E3C000',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700
    },
    nextWrapper: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 45,
    },
    nextText: {
        fontFamily: 'Roboto', 
        fontWeight: 700,
        fontSize: '15px',
        paddingTop: 16,
    }
})