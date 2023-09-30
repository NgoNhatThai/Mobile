import { View, Image, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

function Screen1_a() {
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
            <View>
                <Text style={styles.root}>HOW WE WORK</Text>
            </View>
        </View>
    )
}
export default Screen1_a;
const styles = StyleSheet.create({
            wrapper: {
                // backgroundImage: 'linear-gradient(circle, rgba(206,251,247,0.8885679271708683) 73%, rgba(101,187,232,1) 100%)',
                // backgroundImage: 'linear-gradient(rgba(199,244,246,1) 0%, rgba(209,244,246,1) 80%, rgba(0,204,249,1) 100%)',
                width: '100%',
                backgroundImage: 'linear-gradient(rgba(199, 244, 246, 1),  rgba(209, 244, 246, 1), rgba(229, 244, 245, 1) ,rgba(0, 204, 249, 1))',
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
            },
            root: {
                fontWeight: 700,
                fontSize: '20px',
                textAlign: 'center',
            }
        }
        )