import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, FlatList} from "react-native"
function Screen_03({navigation, route}){
    //console.log(route.params);
    const {nameAPI, idAPI, todosAPI} = route.params
    const [name, setName]= useState(nameAPI)
    const [todo, setTodo]= useState()
    const [nameList, setNameList] = useState([])
    var todos;
    var newId;
     return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backBtn} onPress={()=>{
                    fetch('https://654108cc45bedb25bfc31cd9.mockapi.io/todoList')
                    .then(response => response.json())
                    .then((json)=>{
                        setNameList(json);
                    },[])
                    nameList.forEach(item => {
                        if(item.name==name){
                            newId= item.id;
                        }
                    });
                    navigation.navigate('Screen_02', {nameAPI: nameAPI, todosAPI: todos , idAPI: newId})
                }}>
                    <Image style={styles.backImg} source={require('../assets/Icon Button 11.png')}/>
                </TouchableOpacity>
                <Image style={styles.accImg} source={require('../assets/Avt.png')}/>
                <TextInput style={styles.name} value={name}/>
                <Text style={styles.title}>Have agrate day a head</Text>
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.text}>ADD YOUR JOB</Text>
            </View>
            <TextInput style={styles.input} placeholder="Input your job"onChangeText={setTodo}/>
            <Image style={styles.inputIcon} source={require('../assets/input_icon.png')}/>
            <TouchableOpacity style={styles.finishBtn} onPress={()=>{
                const newTodo = {
                    id: "5",
                    title: todo
                };  
                console.log(newTodo);  
                todos= todosAPI.concat(newTodo)
                todosAPI.concat(newTodo)
                const newData ={
                    id: idAPI,
                    name: nameAPI,
                    todos: todos
                }
                console.log(newData);
                const url= 'https://654108cc45bedb25bfc31cd9.mockapi.io/todoList';  
                const urlDelete= 'https://654108cc45bedb25bfc31cd9.mockapi.io/todoList/'+idAPI;
                console.log(urlDelete);
                //Deleta old data:
                fetch(urlDelete, {
                    method: 'DELETE',
                    }).then(res => {
                    if (res.ok) {
                        return res.json();
                    }
                    }).then(task => {
                        console.log("deleted!");
                    }).catch(error => {
                        console.log("delete error");
                })         
                // Post new data:               
                fetch(url, {
                    method: 'POST',
                    headers: {'content-type':'application/json'},
                    body: JSON.stringify(newData)
                    }).then(res => {
                    if (res.ok) {
                        return res.json();
                    }
                    }).then(task => {
                        console.log("Ok");
                    }).catch(error => {
                        console.log("Error");
                    })
            }}>
                <Text style={styles.btnText}>FINISH</Text>
            </TouchableOpacity>
            <Image style={styles.img} source={require('../assets/img_header.png')}/>
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
    textWrapper: {
        width: '90%',
        height: 100,
        marginTop: 40,
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Epilogue',
        fontSize: 32,
        fontWeight: 700,
        textAlign: 'center'
    },
    input: {
        width: 334,
        height: 44,
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'rgba(144, 149, 160, 1)',
        paddingLeft: 45
    },
    inputIcon: {
        width: 24,
        height: 24,
        position: 'absolute',
        left: 30,
        top: 235
    },
    finishBtn: {
        width: 190,
        height: 44,
        marginTop: 30,
        borderRadius: 12,
        backgroundColor: 'rgba(0, 189, 214, 1)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontFamily: 'Inter',
        fontSize: 26,
        fontWeight: 400,
        textAlign: 'center',
        color: 'white'
    },
    img: {
        width: 190,
        height: 170,
        marginTop: 60
    }
})