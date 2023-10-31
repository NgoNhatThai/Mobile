import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from "react-native"

function Screen_02(){
   return(
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.backBtn}>
                <Image style={styles.backImg} source={require('../assets/Icon Button 11.png')}/>
            </TouchableOpacity>
            <Image style={styles.accImg} source={require('../assets/Avt.png')}/>
            <TextInput style={styles.name} value="Nhat Thai"/>
            <Text style={styles.title}>Have agrate day a head</Text>
        </View>
        <View style={styles.findWrapper}>
            <TextInput style={styles.text} placeholder="Search"/>
            <TouchableOpacity style={styles.btnSearch}>
                <Image style={styles.searchIcon} source={require('../assets/Find_Icon.png')}/>
            </TouchableOpacity>
        </View>
    </View>
   )
}
export default Screen_02;
const styles= StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column'
    },
    header: {
        width: '90%',
        height: 55,
        position: 'relative'
    },
    backBtn: {
        width: 36,
        height: 36,
        position: 'absolute',
        left: 10
    },
    backImg: {
        width: 35,
        height: 35
    },
    accImg: {
        width: 50,
        height: 50,
        position: 'absolute',
        left: 150,
        top: 10
    },
    name: {
        fontFamily: 'Epilogue',
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 30,
        letterSpacing: 0,
        textAlign: 'center',
        position: 'absolute',
        left: 140,
        top: 5
    },
    title: {
        fontFamily: 'Epilogue',
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 22,
        letterSpacing: 0,
        textAlign: 'center',
        color: '#9095A0',
        position: 'absolute',
        left: 205,
        top: 40
    },
    findWrapper: {
        width: 340,
        height: 50,
        marginTop: 30
    },
    text: {
        paddingLeft: 40
    },
    btnSearch: {
        width: 35,
        height: 35
    },
    searchIcon: {
        width: 30,
        height: 30
    }
})