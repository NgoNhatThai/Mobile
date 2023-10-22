import { StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";
import {useState} from "react";
function Screen_03({navigation, route}){
    const {path, name, price}= route.params
    return(
        <View style={styles.container}>
            <View style={styles.imgWrapper}>
                <Image style={styles.bikeImg} source={path}/>
            </View>
            <View style={styles.mainInfor}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.discountText}>15% OFF I 350$</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
            <View style={styles.decWarrper}>
                <Text style={styles.decTitle}>Description</Text>
                <Text style={styles.decText}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
            </View>
            <View style={styles.btnWarrper}>
                <Image style={styles.img} source={require('../assets/heart.png')}/>
                <TouchableOpacity style={styles.btn} onPress={()=>{
                    navigation.navigate('Shop')
                }}>
                    <Text style={styles.btnText}>Add to Card</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Screen_03;
const styles= StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column'
    },
    imgWrapper: {
        width: 359,
        height: 350,
        backgroundColor: 'rgba(233, 65, 65, 0.1)',
        marginTop: 10,
        alignItems: 'center'
    },
    mainInfor: {
        width: '90%',
        height: 80,
        marginTop: 15,
        position: 'relative'
    },
    nameText: {
        fontFamily: 'Voltaire',
        fontSize: 35,
        fontWeight: 400,
        lineHeight: 26,
        letterSpacing: 0,
        textAlign: 'left',
        position: 'absolute',
        left: 10,
        top: 10
    },
    discountText: {
        fontFamily: 'Voltaire',
        color: 'rgba(0, 0, 0, 0.59)',
        fontSize: 25,
        fontWeight: 400,
        lineHeight: 26,
        letterSpacing: 0,
        textAlign: 'left',
        position: 'absolute',
        left: 10,
        top: 50
    },
    price: {
        fontFamily: 'Voltaire',
        fontSize: 25,
        fontWeight: 400,
        lineHeight: 26,
        letterSpacing: 0,
        textAlign: 'center',
        position: 'absolute',
        left: 230,
        top: 50
    },
    decWarrper: {
        marginTop: 15,
        width: '90%',
        height: 150
    },
    decTitle: {
        fontFamily: 'Voltaire',
        fontSize: 25,
        fontWeight: 400,
        lineHeight: 26,
        letterSpacing: 0,
        textAlign: 'left',
    },
    decText: {
        color: 'rgba(0, 0, 0, 0.57)',
        fontFamily: 'Voltaire',
        fontSize: 22,
        fontWeight: 400,
        lineHeight: 26,
        letterSpacing: 0,
        textAlign: 'left',
    },
    btnWarrper: {
        width: '85%',
        height: 50,
        marginTop: 15,
        position: 'relative'
    },
    btn: {
        width: 250,
        height: 50,
        borderRadius: 20,
        backgroundColor: 'rgba(233, 65, 65, 1)',
        justifyContent: 'center',
        position: 'absolute',
        top: 5,
        left: 70
    },
    btnText: {
        fontFamily: 'VT323',
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 26,
        letterSpacing: 0,
        textAlign: 'center',
        color: 'rgba(254, 254, 254, 1)'
    },
    img: {
        width: 35,
        height: 35,
        position: 'absolute',
        left: 7,
        top: 10
    },
    bikeImg: {
        width: 300,
        height: 330
    }
})