import {View, Button, Image, TouchableOpacity, Text, TextInput, StyleSheet} from "react-native"
import {useState} from "react"
import Screen_02 from "./Screen_02"
function Screen_01({navigation, route}){
    const [price, setPrice] = useState('1.790.000 d')
    //console.log(route.params);
    const linkImgHeader= route.params;
    // console.log(linkImgHeader);

    return(
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image style={styles.imageBlue} source={linkImgHeader == undefined ? require('../assets/vs_blue.png') : linkImgHeader.linkImg} />
            </View>
            <View style={styles.inForWrapper}>
                <View style={styles.infor}>
                    <Text style={styles.inforText}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                </View>
                <View style={styles.infor}>
                    <View style={styles.starWrapper}>
                        <Image style={styles.star} source={require('../assets/star.png')}/>
                        <Image style={styles.star} source={require('../assets/star.png')}/>
                        <Image style={styles.star} source={require('../assets/star.png')}/>
                        <Image style={styles.star} source={require('../assets/star.png')}/>
                        <Image style={styles.star} source={require('../assets/star.png')}/>
                    </View>
                    <View style={styles.textRatingViewWrapper}>
                        <Text style={styles.textRatingView}>(Xem 828 đánh giá)</Text>
                    </View>
                </View>
                <View style={styles.infor}>
                    <TextInput style={styles.textPrice} value={price}/>
                    <Text style={styles.textTempPrice}>1̶.̶7̶9̶0̶.̶0̶0̶0̶ d</Text>
                </View>
                <View style={styles.infor}>
                    <Text style={styles.text1}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    <Image style={styles.image1} source={require('../assets/Group 1.png')}/>
                </View>
            </View>
            <TouchableOpacity style={styles.buttonSelectColor}
            onPress ={()=>{
                navigation.navigate('SelectColor')
            }}>
                    <Text style={styles.textButtonSelectColor}>4 MÀU-CHỌN MÀU</Text>
                    <Image style={styles.imageVector} source={require('../assets/Vector.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonBuy}>
                <Text style={styles.buttonBuyText}>CHỌN MUA</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Screen_01;
const styles= StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column'
    },
    imageWrapper: {
        width: '100%',
        height: 361,
        top: -2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageBlue: {
        width: 301,
        height: 361,
    },
    inForWrapper: {
        width: '80%',
        height: 120,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    infor: {
        width: 300,
        flexDirection: 'row',
        //justifyContent: 'space-between'
    },
    inforText: {
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: 400,
        lineHeight: 18,
        letterSpacing: 0,
        textAlign: 'left'
    },
    starWrapper: {
        width: 140,
        height: 18,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    star: {
        width: 23,
        height: 25
    },
    textRatingView: {
        fontFamily: 'Roboto',
        fontSize: 15,
        lineHeight: 17.58,
        marginLeft: 40
    },
    textPrice: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 18,
        lineHeight: 18,
    },
    textTempPrice: {
        fontFamily: 'Roboto',
        fontSize: 13,
        lineHeight: 17.58,
        marginLeft: -35
    },
    text1: {
        fontFamily: 'Roboto',
        fontSize: 13,
        fontWeight: 700,
        lineHeight: 17.58,
        color: 'rgba(250, 0, 0, 1)'
    },
    image1: {
        width: 20,
        height: 20,
        left: 20
    },
    textButtonSelectColor: {
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 15,
        lineHeight: 18,
        textAlign: 'center',
        left: 100
    },
    imageVector: {
        width: 11.5,
        height: 14,
        marginLeft: 80,
        left: 80
    },
    buttonSelectColor: {
        width: 332,
        height: 34,
        borderRadius: 10,
        borderWidth: 2,
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonBuy: {
        width: 332,
        height: 44,
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: 'rgba(202, 21, 54, 1)',
        borderColor: 'white',
        marginTop: 48,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonBuyText: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 18,
        lineHeight: 18,
        textAlign: 'center',
        color: 'white'
    }

    
})