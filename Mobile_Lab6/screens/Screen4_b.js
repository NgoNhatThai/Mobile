import{StyleSheet, View, Text, Image, SafeAreaView,FlatList, TouchableOpacity, TextInput} from "react-native"
const DATA = [
    {
        pathImg: require('../assets/giacchuyen 1.png'),
        pName:'Cáp chuyển từ Cổng USB sang PS2...' ,
        price:'69.900 đ'
    },
    {
        pathImg:require('../assets/daynguon 1.png'),
        pName:'Cáp chuyển từ Cổng USB sang PS2...',
        price:'69.900 đ'
    },
    {
        pathImg:require('../assets/dauchuyendoipsps2 1.png'),
        Name:'Cáp chuyển từ Cổng USB sang PS2...',
        price:'69.900 đ'
    },
    {
        pathImg:require('../assets/dauchuyendoi 1.png'),
        pName:'Cáp chuyển từ Cổng USB sang PS2...',
        price:'69.900 đ'
    },
    {
        pathImg:require('../assets/carbusbtops2 1.png'),
        pName:'Cáp chuyển từ Cổng USB sang PS2...',
        price:'69.900 đ'
    },
    {
        pathImg:require('../assets/daucam 1.png'),
        pName:'Cáp chuyển từ Cổng USB sang PS2...',
        price:'69.900 đ'
    }
];
const Item = ({pathImg, pName, price}) => (
    <View style={styles.productWrapper}>
        <Image style={styles.productImg} source={pathImg} />
        <Text style={styles.productName}>{pName}</Text>
        <Image style={styles.rate} source={require('../assets/rate.png')} />
        <View style={styles.priceWrapper}>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.discount}>-39% </Text>
        </View>
    </View>
  );
function Screen4_b(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.imageArrow} source={require('../assets/arrow.png')} />
                <TextInput style={styles.textInput} value="Dây cáp usb"/>
                <Image style={styles.imageFindIcon} source={require('../assets/find_icon.png')}/>
                <Image style={styles.imageCart} source={require('../assets/cart.png')}/>
                <Image style={styles.imageCirle} source={require('../assets/Ellipse 4.png')}/>
                <Image style={styles.imageMore} source={require('../assets/Group_2.png')}/>
            </View>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => 
                        <Item 
                            pathImg={item.pathImg} 
                            pName={item.pName}
                            price={item.price}
                        />}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
            </SafeAreaView>
        </View>
    )
}
export default Screen4_b;
const styles= StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#e5e5e5'
    },
    header: {
        width: '100%',
        height: 52,
        backgroundColor: 'rgba(27, 169, 255, 1)',
        flexDirection: 'row',
        //alignItems: 'center'
    },
    imageArrow: {
        width: 24,
        height: 24,
        marginLeft: 10,
        marginTop: 13
    },
    textInput: {
        width: 195,
        height: 35,
        alignItems:'center',
        backgroundColor: 'white',
        borderWidth: 1,
        marginTop: 9,
        paddingLeft: 30,
        marginLeft: 10,
        position: 'relative'
    },
    imageFindIcon: {
        width: 21,
        height: 21,
        position: 'absolute',
        left: 50,
        top: 14
    },
    imageCart: {
        width: 27,
        height: 27,
        marginLeft: 30,
        marginTop: 12,
        position: 'relative'
    },
    imageCirle: {
        width: 12,
        height: 12,
        position: 'relative',
        top: 3
    },
    imageMore: {
        width: 18,
        height: 4.36,
        marginLeft: 30,
        marginTop: 19
    },
    productWrapper:{
        width: '50%',
        padding: 20,
        display: 'flex',
    },
    productImg: {
        width: 155,
        height: 90,
        margin: 5,
    },
    productName: {
        fontWeight: 400,
        fontSize: 12,
        margin: 5,
    },
    rate: {
        width: 150,
        height: 15,
        margin: 5,
    },
    priceWrapper: {
        display: 'flex',
        flexDirection: 'row',
        margin: 5,
    },
    price: {
        fontSize: 12,
        fontWeight: 700,
    },
    discount: {
        color: '#969DAA',
        fontSize: 12,
        fontWeight: 400,
    }

})