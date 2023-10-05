import {View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Button} from "react-native";

function Screen2(){
    return(
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Image style={styles.imageUSB} source={require('../assets/usb.png')} />
                <Text style={styles.title}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
            </View>
            <Text style={styles.title1}>Cực kỳ hài lòng</Text>
            <View style={styles.starWrapper}>
                <Image style={styles.imageStar} source={require('../assets/star.png')} />
                <Image style={styles.imageStar} source={require('../assets/star.png')} />
                <Image style={styles.imageStar} source={require('../assets/star.png')} />
                <Image style={styles.imageStar} source={require('../assets/star.png')} />
                <Image style={styles.imageStar} source={require('../assets/star.png')} />
            </View>
            <TouchableOpacity style={styles.addImgWrapper}>
                <Image style={styles.imageAdd} source={require('../assets/camera.png')} />
                <Text style={styles.addText}>Thêm hình ảnh</Text>
            </TouchableOpacity>
            <TextInput style={styles.comment} placeholder="Hãy chia sẻ những điều bạn thích về sản phẩm" />
            <TouchableOpacity style={styles.linkWrapper}>
                <Text style={styles.link}>https://meet.google.com/nsj-ojwi-xpp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Gửi</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Screen2;
const styles= StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    headerWrapper: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 15
    },
    imageUSB: {
        width: 70,
        height: 70
    }, 
    title: {
        width: 259,
        height: 21,
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 19,
        letterSpacing: 0,
        textAlign: 'left'
    },
    title1: {
        width: 259,
        height: 21,
        fontFamily: 'Roboto',
        fontSize: 22,
        fontWeight: 700,
        lineHeight: 21.09,
        letterSpacing: 0,
        textAlign: 'center',
        marginTop: 70
    },
    starWrapper: {
        width: 260,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    },
    imageStar: {
        width: 39,
        height: 39,
    },
    addImgWrapper: {
        flexDirection: 'row',
        alignItems: "center",
        width: 293,
        height: 68,
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 5,
        marginTop: 30     
    },
    imageAdd: {
        width: 39,
        height: 32,
        marginLeft: 20
    },
    addText: {
        width: 259,
        height: 21,
        fontFamily: 'Roboto',
        fontSize: 22,
        fontWeight: 700,
        lineHeight: 21.09,
        letterSpacing: 0,
        textAlign: 'center'
    },
    comment: {
        width: 293,
        height: 222,
        borderWidth: 2,
        borderColor: 'gray',
        marginTop: 15,
        borderRadius: 5
    },
    link: {
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 14,
        letterSpacing: 0,
        textAlign: 'center',
        color: 'blue'
    } ,
    linkWrapper: {
        width: 205,
        height: 14,
        marginTop: -20,
        marginRight: -80
    },
    button: {
        width: 293,
        height: 40,
        marginTop: 20,
        backgroundColor: 'rgba(21, 17, 235, 1)',
        borderWidth: 2,
        borderColor: 'rgba(13, 93, 182, 1)',
        borderRadius: 5
    }, 
    buttonText: {
        fontFamily: "Roboto",
        fontSize: 20,
        fontWeight: 700,
        color: 'white',
        textAlign: 'center'
    }
})