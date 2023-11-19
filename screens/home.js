import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, FlatList } from "react-native"
import initialState from "../redux/initialState";
import save from "../redux/save";
import store from "../redux/store";

const Item =({isDone, note}) => (
    <View style={styles.wrapper}>
        <TextInput style={styles.component} value={note}/>
        <TouchableOpacity style={styles.wrapper1}>
            <Image style={styles.checkIcon} source={`${isDone==true ? require('../assets/check_icon.png') : require('../assets/clock_icon.png')}`}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapper2}>
            <Image style={styles.noteIcon} source={require('../assets/delete_icon.png')}/> 
        </TouchableOpacity>
    </View>  
)
function home({navigation, route}){
    const {id, notes}= route.params
    const [newNote, setNote]= useState('')
    const [data, setData]= useState(initialState)
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <View style={styles.header}>
                <View style={styles.addWrapper}>
                    <TextInput style={styles.input} placeholder='Add new note here ...' onChangeText={setNote}/>
                    <TouchableOpacity style={styles.addBtn} onPress={()=>{
                        const obj= {
                            isDone: false,
                            note: newNote
                        }
                        save.value= obj;
                        store.dispatch(save)
                        setData(store.getState())
                    }}>
                        <Text style={styles.addText}>ADD</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <SafeAreaView>
                <FlatList 
                    data={data}
                    keyExtractor={item => item.note}
                    renderItem={({item})=><Item isDone={item.isDone} note={item.note}/>}
                />
            </SafeAreaView>
        </View>
    )
}
export default home;
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    wrapper: {
        width: 330,
        height: 70,
        alignItems: 'center',
        position: 'relative',
        borderRadius: 30,
        borderColor: 'blue',
        marginTop: 20
    },
    wrapper1: {
        width: 25,
        height: 25,
        position: 'absolute',
        left: 5,
        top: 15
    },
    wrapper2: {
        width: 25,
        height: 25,
        position: 'absolute',
        right: 5,
        top: 15
    },
    checkIcon: {
        width: 24,
        height: 24
    },
    noteIcon: {
        width: 24,
        height: 24
    },
    component: {
        width: 334,
        height: 48,
        paddingLeft: 60,
        backgroundColor: 'rgba(222, 225, 230, 0.47)',
        borderRadius: 24,
    },
    title: {
        fontFamily: 'Epilogue',
        fontSize: 34,
        fontWeight: 700,
        textAlign: 'left',
        color: '#9095A0',
    },
    header: {
        width: '100%',
        height: 150,
        marginTop: 10,
        alignItems: 'center'
    },
    addWrapper: {
        width: '95%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    input: {
        width: 290,
        height: 50,
        marginLeft: 10,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'rgba(144, 149, 160, 1)',
        paddingLeft: 30
    },
    addBtn: {
        width: 60,
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 189, 214, 1)',
        marginLeft: 10,
        marginTop: 5
    },
    addText: {
        fontFamily: 'Epilogue',
        fontSize: 15,
        fontWeight: 500,
        textAlign: 'center',
        marginTop: 10,
        color: 'rgba(255, 255, 255, 1)',
    }
})