import {View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Button} from "react-native";

function Screen3(){
    return(
        <View style={styles.boudary}>
            <View style={styles.container}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>PASSWORD GENERATOR</Text>
                </View>
                <TextInput style={styles.passCreate} />
                <View  style={styles.inputWrapper}>
                <View style={styles.input}>
                     <Text style={styles.inputText}>Password length</Text>
                     <TextInput style={styles.text1} />
                </View>
                <View style={styles.input}>
                    <Text style={styles.inputText}>Include lower case letters</Text>
                     <TouchableOpacity style={styles.select}>

                     </TouchableOpacity>
                </View>
                <View style={styles.input}>
                    <Text style={styles.inputText}>Include upcase letters</Text>
                    <TouchableOpacity style={styles.select}>

                     </TouchableOpacity>
                </View>
                <View style={styles.input}>
                    <Text style={styles.inputText}>Include number</Text>
                    <TouchableOpacity style={styles.select}>

                    </TouchableOpacity>
                </View>
                <View style={styles.input}>
                    <Text style={styles.inputText}>nclude special symbol</Text>
                    <TouchableOpacity style={styles.select}>

                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
            </TouchableOpacity>
            </View>
            
        </View>
    )
}
export default Screen3;
const styles= StyleSheet.create({
    boudary: {
        width: '100%',
        backgroundColor: 'radial-gradient: rgba(59, 59, 152, 1), rgba(196, 196, 196, 0)',
        alignItems: 'center'
    },
    container: {
        width: 340,
        height: 615,
        top: 20,
        borderRadius: 15,
        backgroundColor: 'rgba(35, 35, 91, 1)',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 25,
        fontWeight: 700,
        lineHeight: 29,
        letterSpacing: 0,
        textAlign: 'center',
        color: 'white'
    }, 
    titleWrapper: {
        width: 181,
        height: 64,
        top: 35
    },
    passCreate: {
        width: 297,
        height: 55,
        top: 160,
        left: 32,
        backgroundColor: 'rgba(21, 21, 55, 1)',
        marginTop: 50
    },
    inputWrapper: {
        marginTop: 40,
        flexDirection: 'column'
    },
    input: {
        width: 305,
        height: 40,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text1: {
        width: 100,
        height: 35,
        marginLeft: 15,
        backgroundColor: 'white'
    },
    inputText: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 20,
        textAlign: 'left'
    },
    select: {
        width: 25,
        height: 25,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 1)'
    },
    button: {
        width: 293,
        height: 50,
        marginTop: 30,
        backgroundColor: 'rgba(59, 59, 152, 1)',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: "Roboto",
        fontSize: 20,
        fontWeight: 700,
        color: 'white',
        textAlign: 'center'
    }
})