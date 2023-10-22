import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, FlatList, Image} from "react-native";
import {useState} from "react";
const DATA = [
    {
        name: 'Pinarello',
        path: require('../assets/bike1.png'),
        price: '$ 1800',
        type: 'mountain',
    },
    {
        name: 'Pina Mountain',
        path: require('../assets/bike2.png'),
        price: '$ 1700',
        type: 'mountain',
    },
    {
        name: 'Pina Bike',
        path: require('../assets/bike3.png'),
        price: '$ 1500',
        type: 'roadbike',
    },
    {
        name: 'Pinarello',
        path: require('../assets/bike4.png'),
        price: '$ 1900',
        type: 'roadbike',
    },
    {
        name: 'Pinarello',
        path: require('../assets/bike3.png'),
        price: '$ 2700',
        type: 'roadbike',
    },
    {
        name: 'Pinarello',
        path: require('../assets/bike1.png'),
        price: '$ 1350',
        type: 'mountain',
    },
]
const Item =({name, path, price, navigation}) => (
    <TouchableOpacity style={styles.bikeWrapper} onPress = {()=>{
            navigation.navigate('DetailProduct', {path: path, name: name, price: price})
         }
    }>
        <Image style={styles.img} source={path} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
    </TouchableOpacity>
)
function Screen_02({navigation}){
    const[select, setSelect]= useState(0);
    const[DATA_filtered, setDate]=useState([]);
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>The world’s Best Bike</Text>
            </View>
            <View style={styles.btnWrapper}>
                <TouchableOpacity style={styles.btn} onPress={()=>{
                    setSelect(0);
                }}>
                    <Text style={[styles.btnText1, {color: `${select==0 ? 'red' : 'rgba(190, 182, 182, 1)'}`}]}>All</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={()=>{
                    setSelect(1);
                    setDate(DATA.filter((DATA) => DATA.type === 'roadbike'))
                }}>
                    <Text style={[styles.btnText2, {color: `${select==1 ? 'red' : 'rgba(190, 182, 182, 1)'}`}]}>Roadbike</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={()=>{
                    setSelect(2);
                    setDate(DATA.filter((DATA) => DATA.type === 'mountain'))
                }}>
                    <Text style={[styles.btnText3, {color: `${select==2 ? 'red' : 'rgba(190, 182, 182, 1)'}`}]}>Mountain</Text>
                </TouchableOpacity>
            </View>
            <SafeAreaView>
                <FlatList 
                    data={select==0 ? DATA : DATA_filtered} 
                    keyExtractor={item => item.price} 
                    renderItem={({item}) => <Item path={item.path} name={item.name} price={item.price} 
                        navigation={navigation} />} 
                    numColumns={2}
                />
            </SafeAreaView>
        </View>
    )
}
export default Screen_02;
const styles= StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    header: {
        width: '90%',
        height: 50,
        marginTop: 20
    },
    headerText: {
        fontFamily: 'Ubuntu',
        fontSize: 26,
        fontWeight: 900,
        lineHeight: 26,
        letterSpacing: 0,
        textAlign: 'left',
        color: 'rgba(233, 65, 65, 1)'
    },
    btnWrapper: {
        width: '90%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn: {
        width: 99,
        height: 32,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'rgba(233, 65, 65, 0.53)',
        justifyContent: 'center'
    },
    btnText1: {
        fontFamily: 'Voltaire',
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: 'center',
    },
    btnText2: {
        fontFamily: 'Voltaire',
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: 'center',
    },
    btnText3: {
        fontFamily: 'Voltaire',
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: 'center',
    },
    bikeWrapper: {
        width: '44%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgba(233, 65, 65, 0.1)',
        marginTop: 20,
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    img: {
        width: 134,
        height: 124,
    },
    name: {
        fontFamily: 'Voltaire',
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.6)'
    },
    price: {
        fontFamily: 'Voltaire',
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.6)'
    }
})