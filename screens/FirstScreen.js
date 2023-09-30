import { View, Image, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

function FirstScreen() {
    return ( 
        <View style={styles.wrapper}>
            <View style={styles.circleWrapper}>
                <Image style={styles.circle} source={require('../assets/Ellipse 8cricle.png')}/>
            </View>
            <Text style={styles.title}>
                GROW YOUR BUSINESS
            </Text>
            <Text style={styles.description}>
                We will help you to grow your business using online server
            </Text>
            <Text style={styles.btnWrapper}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>SIGN UP</Text>
                </TouchableOpacity>
            </Text>
        </View>
    )
}
export default FirstScreen;
const styles = StyleSheet.create({
            wrapper: {
                backgroundColor: '#00CCF9',
                width: '100%',
            },
            circleWrapper: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
            },
            circle: {
                marginTop: '80px',
                width:140,
                height:140
            },
            title: {
                width:189,
                height:58,
                left:90,
                textAlign: 'center',
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: '25px',
                marginTop: '50px',
            },
            description: {
                fontSize: '18px',
                fontFamily: 'Roboto',
                textAlign: 'center',
                fontWeight: 700,
                marginTop: '50px',
            },
            btnWrapper: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: '50px',
            },
            btn: {
                backgroundColor: '#E3C000',
                color: '#000',
                width: '40%',
                padding: '10px',
                borderRadius: 15,
            },
            btnText: {
                fontWeight: 700,
                fontSize: '22px',
                textAlign: 'center',
            }
        }
        )