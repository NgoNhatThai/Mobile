import {StyleSheet, View, Image, Text, TouchableOpacity} from "react-native"
import {useState} from "react"
function Screen_02({navigation}){
    const [link, setLinkImg] = useState(require('../assets/vs_blue.png'));

    const changeToSilver= ()=>{
        setLinkImg(require('../assets/vs_silver.png'));
        // console.log(link);
    };
    const changeToRed= ()=>{
        setLinkImg(require('../assets/vs_red.png'));
    };
    const changeToBlack= ()=>{
        setLinkImg(require('../assets/vs_black.png'));
    };
    const changeToBlue= ()=>{
        setLinkImg(require('../assets/vs_blue.png'));
    };
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.img} source={link} />
                <Text style={styles.headerText}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.bodyText}>Chọn một màu bên dưới:</Text>
                <View style={styles.blockWrapper}>
                    <TouchableOpacity style={styles.block1} onPress={changeToSilver}>
                    
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block2} onPress={changeToRed}>
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block3} onPress={changeToBlack}>
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block4} onPress={changeToBlue}>
                        
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.buttonDone} 
                    onPress={
                        () => {
                            // console.log(link);
                            navigation.navigate('Home', {linkImg: link})
                        }
                    }
                >
                    <Text style={styles.buttonDoneText}>XONG</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Screen_02;
const styles= StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column'
    },
    header: {
        width: '100%',
        height: '100',
        flexDirection: 'row'
    },
    img: {
        width: 112,
        height: 132
    },
    headerText: {
        width: 164,
        height: 36,
        top: 20,
        left: 20,
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 15,
        lineHeight: 17.58,
        textAlign: 'left'
    },
    body: {
        backgroundColor: 'rgba(196, 196, 196, 1)',
        width: '100%',
        height: 590,
        marginTop: 15
    },
    bodyText: {
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 18,
        lineHeight: 17.58,
        paddingLeft: 10,
        paddingTop: 10
    },
    blockWrapper: {
        width: '100%',
        height: 380,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    block1: {
        width: 85,
        height: 80,
        backgroundColor: 'rgba(197, 241, 251, 1)',
        marginTop: 10
    },
    block2: {
        width: 85,
        height: 80,
        backgroundColor: 'rgba(243, 13, 13, 1)',
        marginTop: 10
    },
    block3: {
        width: 85,
        height: 80,
        backgroundColor: 'rgba(0, 0, 0, 1)',
        marginTop: 10
    },
    block4: {
        width: 85,
        height: 80,
        backgroundColor: 'rgba(35, 72, 150, 1)',
        marginTop: 10
    },
    buttonDone: {
        width: 332,
        height: 44,
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: 'rgba(25, 82, 226, 0.58)',
        borderColor: 'rgba(202, 21, 54, 1)',
        marginTop: 10,
        marginLeft: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonDoneText: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 18,
        lineHeight: 18,
        textAlign: 'center',
        color: 'white'
    }
})