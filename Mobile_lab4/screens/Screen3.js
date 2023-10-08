import {View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Button, CheckBox} from "react-native";
import {useState} from "react"
function Screen3(){
    const [lengthPass, setLengthPass] = useState(0);
    const [lowerCase, setIsLowerCase] = useState(false);
    const [upperCase, setIsUpperCase] = useState(false);
    const [number, setIsNumber] = useState(false);
    const [specialSymbol, setIsSpecialSymbol] = useState(false);
    const [pass, setGeneratePass] = useState('');
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numericChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    const generatePass= () => {
        let passCreate=''
        if(lengthPass < 4){
            alert("Password's length is too short!")
        }
        if(lowerCase){
            const randomIndex = Math.floor(Math.random() * lowercaseChars.length);
            const randomLowercaseChar = lowercaseChars.charAt(randomIndex);
            passCreate+=randomLowercaseChar;
            //console.log(passCreate);
        }
        if(upperCase){
            const randomIndex = Math.floor(Math.random() * uppercaseChars.length);
            const randomUppercaseChar = uppercaseChars.charAt(randomIndex);
            passCreate+=randomUppercaseChar;
            //console.log(passCreate);
        }
        if(number){
            const randomIndex = Math.floor(Math.random() * numericChars.length);
            const randomNumber = numericChars.charAt(randomIndex);
            passCreate+=randomNumber;
           // console.log(passCreate);
        }
        if(specialSymbol){
            const randomIndex = Math.floor(Math.random() * specialChars.length);
            const randomSpecialcaseChar = specialChars.charAt(randomIndex);
            passCreate+=randomSpecialcaseChar;
            //console.log(passCreate);
        }
        if(passCreate.length<lengthPass){
            let n= lengthPass-passCreate.length;
            for(let i=0; i<n; i++){
                const randomIndex = Math.floor(Math.random() * lowercaseChars.length);
                const randomLowercaseChar = lowercaseChars.charAt(randomIndex);
                passCreate+=randomLowercaseChar;
            }
        }
        console.log(passCreate);
        function shuffleString(inputString) {
            const charArray = inputString.split(''); // Chuyển chuỗi thành mảng các ký tự
            for (let i = charArray.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1)); // Chọn một chỉ số ngẫu nhiên từ 0 đến i
              [charArray[i], charArray[j]] = [charArray[j], charArray[i]]; // Swap ký tự tại vị trí i và j
            }
            const shuffledString = charArray.join(''); // Chuyển mảng thành chuỗi
            return shuffledString;
        }
        const result= shuffleString(passCreate);
        setGeneratePass(result);
    }
    return(
        <View style={styles.boudary}>
            <View style={styles.container}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>PASSWORD GENERATOR</Text>
                </View>
                <TextInput style={styles.passCreate} value={pass}/>
                <View  style={styles.inputWrapper}>
                <View style={styles.input}>
                     <Text style={styles.inputText}>Password length</Text>
                     <TextInput style={styles.text1} onChangeText={setLengthPass} value={lengthPass} />
                </View>
                <View style={styles.input}>
                    <Text style={styles.inputText}>Include lower case letters</Text>
                    <CheckBox style={styles.select} onValueChange={setIsLowerCase} value= {lowerCase} />
                </View>
                <View style={styles.input}>
                    <Text style={styles.inputText}>Include upcase letters</Text>
                    <CheckBox style={styles.select} onValueChange={setIsUpperCase} value={upperCase}/>
                </View>
                <View style={styles.input}>
                    <Text style={styles.inputText}>Include number</Text>
                    <CheckBox style={styles.select} onValueChange={setIsNumber} value={number} />
                </View>
                <View style={styles.input}>
                    <Text style={styles.inputText}>Include special symbol</Text>
                    <CheckBox style={styles.select} onValueChange={setIsSpecialSymbol} value={specialSymbol}/>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={generatePass}>
                <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
            </TouchableOpacity>
            </View>
            
        </View>
    )
}
export default Screen3;
const styles= StyleSheet.create({
    boudary: {
        width: '100%',
        backgroundColor: 'radial-gradient: rgba(59, 59, 152, 1), rgba(196, 196, 196, 0)',
        alignItems: 'center'
    },
    container: {
        width: 340,
        height: 615,
        top: 20,
        borderRadius: 15,
        backgroundColor: 'rgba(35, 35, 91, 1)',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 25,
        fontWeight: 700,
        lineHeight: 29,
        letterSpacing: 0,
        textAlign: 'center',
        color: 'white'
    }, 
    titleWrapper: {
        width: 181,
        height: 64,
        top: 35
    },
    passCreate: {
        width: 297,
        height: 55,
        top: 160,
        left: 32,
        backgroundColor: 'rgba(21, 21, 55, 1)',
        marginTop: 50,
        color: 'white',
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: 700,
        textAlign: 'center'
    },
    inputWrapper: {
        marginTop: 40,
        flexDirection: 'column'
    },
    input: {
        width: 305,
        height: 40,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text1: {
        width: 100,
        height: 35,
        marginLeft: 15,
        backgroundColor: 'white'
    },
    inputText: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 20,
        textAlign: 'left'
    },
    select: {
        width: 25,
        height: 25,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 1)'
    },
    button: {
        width: 293,
        height: 50,
        marginTop: 30,
        backgroundColor: 'rgba(59, 59, 152, 1)',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: "Roboto",
        fontSize: 20,
        fontWeight: 700,
        color: 'white',
        textAlign: 'center'
    }
})