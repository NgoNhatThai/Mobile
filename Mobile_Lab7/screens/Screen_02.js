import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, FlatList} from "react-native"
import {useState} from "react"
const Item =({id, title}) => (
    <View style={styles.wrapper}>
        <TextInput style={styles.component} value={title}/>
        <Image style={styles.checkIcon} source={require('../assets/check_icon.png')}/>
        <Image style={styles.noteIcon} source={require('../assets/note_icon.png')}/> 
    </View>  
)
function Screen_02({navigation, route}){
    const {nameAPI, todosAPI, idAPI}= route.params
    // const dataName= nameAPI.params
    // const todos= todosAPI
    console.log(nameAPI);
    console.log(todosAPI);
    const [name, setName] = useState(nameAPI)
    const [DATA, setData] = useState(todosAPI);
   return(
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.backBtn}>
                <Image style={styles.backImg} source={require('../assets/Icon Button 11.png')}/>
            </TouchableOpacity>
            <Image style={styles.accImg} source={require('../assets/Avt.png')}/>
            <TextInput style={styles.name} value={name}/>
            <Text style={styles.title}>Have agrate day a head</Text>
        </View>
        <View style={styles.findWrapper}>
            <TextInput style={styles.text} placeholder="Search"/>
            <TouchableOpacity style={styles.btnSearch}>
                <Image style={styles.searchIcon} source={require('../assets/Find_Icon.png')}/>
            </TouchableOpacity>
        </View>
        <SafeAreaView>
            <FlatList 
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={({item})=><Item id={item.id} title={item.title}/>}
            />
        </SafeAreaView>
        <TouchableOpacity style={styles.addBtn} onPress={()=>{
            navigation.navigate('Screen_03', {nameAPI: nameAPI, idAPI: idAPI})
        }}>
            <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
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
        height: 90,
        marginTop: 30
    },
    text: {
        paddingLeft: 45,
        width: 334,
        height: 44,
        borderColor: 'rgba(144, 149, 160, 1)',
        borderRadius: 4,
        borderWidth: 1,
        position: 'relative'
    },
    btnSearch: {
        width: 35,
        height: 35,
        position: 'absolute',
        top: 5,
        left: 10
    },
    searchIcon: {
        width: 30,
        height: 30
    },
    wrapper: {
        width: '90%',
        height: 40,
        alignItems: 'center',
        marginTop: 20
    },
    component: {
        width: 334,
        height: 48,
        paddingLeft: 60,
        backgroundColor: 'rgba(222, 225, 230, 0.47)',
        borderRadius: 24,
        position: 'relative'
    },
    noteIcon: {
        width: 24,
        height: 24,
        position: 'absolute',
        right: 5,
        top: 5
    },
    checkIcon: {
        width: 24,
        height: 24,
        position: 'absolute',
        left: 5,
        top: 5
    },
    addBtn: {
        width: 69,
        height: 69,
        marginTop: 40,
        backgroundColor: 'rgba(0, 189, 214, 1)',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addText: {
        fontSize: 30,
        color: 'white'
    }
})