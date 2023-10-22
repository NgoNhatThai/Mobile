import { startTransition } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";

function Screen_01({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Text style={styles.headerText}>
                    A premium online store for sporter and their stylish choice
                </Text>
            </View>
            <View style={styles.imgWrapper}>
                <Image style={styles.imgHeader} source={require('../assets/finarello.png')}/>
            </View>
            <View style={styles.shopNameWrapper}>
                <Text style={styles.shopNameText}>POWER BIKE SHOP</Text>
            </View>
            <TouchableOpacity style={styles.btnGetStarted} onPress ={()=>{
                navigation.navigate('Shop')
            }}>
                <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Screen_01;
const styles= StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center'
    },
    headerWrapper: {
        width: 351,
        height: 87,
        marginTop: 60
    },
    headerText: {
        fontFamily: 'VT323',
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 26,
        letterSpacing: 0,
        textAlign: 'center'
    },
    imgWrapper: {
        width: 359,
        height: 360,
        alignItems: 'center',
        backgroundColor: 'rgba(233, 65, 65, 0.1)',
        borderRadius: 40,
        position: 'relative'
    },
    imgHeader: {
        width: 292,
        height: 270,
        position: 'absolute',
        top: 40,
        left: 30
    },
    shopNameWrapper: {
        width: 180,
        height: 60,
        marginTop: 20
    },
    shopNameText: {
        fontFamily: 'Ubuntu',
        fontSize: 26,
        fontWeight: 900,
        lineHeight: 26,
        letterSpacing: 0,
        textAlign: 'center'
    },
    btnGetStarted: {
        width: 360,
        height: 60,
        borderRadius: 20,
        backgroundColor: 'rgba(233, 65, 65, 1)',
        justifyContent: 'center'
    },
    btnText: {
        fontFamily: 'VT323',
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 26,
        letterSpacing: 0,
        textAlign: 'center',
        color: 'rgba(254, 254, 254, 1)'
    }
})