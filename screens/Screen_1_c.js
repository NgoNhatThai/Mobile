import { View, Image, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

function Screen1_c(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CODE</Text>
            <Text style={styles.description}>VERIFICATION</Text>
            <Text style={styles.enterText}>Enter ontime password sent on <br/>++849092605798</Text>
            <View style={styles.blockWrapper}>
                <View style={styles.block}></View>
                <View style={styles.block}></View>
                <View style={styles.block}></View>
                <View style={styles.block}></View>
                <View style={styles.block}></View>
                <View style={styles.block}></View>
            </View>
            <View style={styles.vertifyWrapper}>
                <TouchableOpacity style={styles.btnVertify}>VERTIFY CODE</TouchableOpacity>
            </View>
        </View>
    )
}
export default Screen1_c;
const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundImage: 'linear-gradient(rgba(199, 244, 246, 1),  rgba(209, 244, 246, 1), rgba(229, 244, 245, 1) ,rgba(0, 204, 249, 1))',
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 60,
        fontWeight: 700,
        lineHeight: 70,
        letterSpacing: 0,
        textAlign: 'center',
        marginTop: 80
    },
    description: {
        fontFamily: 'Roboto',
        fontSize: 22,
        fontWeight: 700,
        lineHeight: 70,
        letterSpacing: 0,
        textAlign: 'center',
        marginTop: 10
    },
    enterText: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 70,
        letterSpacing: 0,
        textAlign: 'center',
        marginTop: 40
    },
    blockWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 50,
    },
    block: {
        width: 50,
        height: 50,
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: 1,
    },
    vertifyWrapper: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    vertifyText: {
        fontFamily: 'Roboto', 
        fontWeight: 700,
        fontSize: '15px',
        paddingTop: 16,
    },
    btnVertify: {
        width: '80%',
        height: 50,
        backgroundColor: '#E3C000',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700
    }
})
