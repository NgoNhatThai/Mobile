import {View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Button} from "react-native";

function Screen4(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.inforBook}>
                    <Image style={styles.bookImg} source={require('../assets/book.png')}/>
                    <View style={styles.infor}>
                        <Text style={styles.textInHeader}>Nguyên hàm tích phân và ứng dụng</Text>
                        <Text style={[styles.textInHeader,{'marginTop':'15'}]}>Cung cấp bởi Tiki Trading</Text>
                        <Text style={styles.price}>141.800 đ</Text>
                        <Text style={[styles.textInHeader,{'marginTop':'15'}]}>̶1̶̶4̶̶0̶̶.̶̶0̶̶0̶̶0̶ </Text>
                        <View style={[styles.selectQuantity,{'marginTop':'15'}]}>
                            <View style={styles.viewSelectQuantity}>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantity}>1</Text>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={[{'color':'blue'}, styles.text]}>Mua sau</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.discountHaving}>
                    <Text style={styles.text}>Mã giảm giá đã lưu</Text>
                    <Text style={[{'color':'blue'}, styles.text]}>Xem tại đây</Text>
                </View>
                <View style={styles.buttonDiscountWrapper}>
                    <TouchableOpacity style={styles.buttonDiscount}>
                        <Image style={styles.yellowBlock} source={require('../assets/yellow_block.png')}/>
                        <Text style={[{'marginLeft':'10'},{'fontFamily':'Roboto'}, {'fontWeight':'700'}, {'fontSize':'18'}]}>   Mã giảm giá</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonUseDiscount}>
                        <Text style={[{'fontFamily':'Roboto'}, {'fontWeight':'700'}, {'fontSize':'22'},{'color':'white'}]}>Áp dụng</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.textInputDiscountWrapper}>
                <Text style={styles.text}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                <Text style={[styles.text, {'marginLeft':'10'},{'color':'blue'}]}>Nhập tại đây?</Text>
            </View>
            <View style={styles.tamTinhWrapper}>
                <Text style={[{'fontFamily':'Roboto'}, {'fontWeight':'700'}, {'fontSize':'30'}]}>Tạm tính</Text>
                <Text style={[{'fontFamily':'Roboto'}, {'fontWeight':'700'}, {'fontSize':'27'}, {'color':'red'}]}>141.000 d</Text>
            </View>
            <View style={styles.rooter}>
                <View style={styles.thanhTienWrapper}>
                    <Text style={[{'fontFamily':'Roboto'}, {'fontWeight':'700'}, {'fontSize':'30'},{'color':'light-gray'}]}>Thành tiền</Text>
                    <Text style={[{'fontFamily':'Roboto'}, {'fontWeight':'700'}, {'fontSize':'27'}, {'color':'red'}]}>141.000 d</Text>
                </View>
                <TouchableOpacity style={styles.buttonDone}>
                    <Text style={styles.buttonDoneText}>TIẾN HÀNH ĐẶT HÀNG</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Screen4;
const styles= StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'gray',
        flexDirection: 'column'
    },
    header: {
        width: '100%',
        height: 283,
        backgroundColor: 'white'
    },
    bookImg: {
        width: 104,
        height: 127
    },
    inforBook: {
        margin: 9,
        flexDirection: 'row'
    },
    infor: {
        flexDirection: 'column',
        marginLeft: 10
    },
    textInHeader: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 20,
        textAlign: 'left'
    },
    price: {
        color: 'red',
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 20,
        textAlign: 'left',
        marginTop: 10
    },
    selectQuantity: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    buttonDes: {
        width: 15,
        height: 15,
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 2,
        backgroundColor: 'gray'
    },
    buttonIns: {
        width: 15,
        height: 15,
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 2,
        backgroundColor: 'gray'
    },
    viewSelectQuantity: {
        flexDirection: 'row',
        width: 30
    },
    button: {
        backgroundColor: 'lightgray',
        // paddingHorizontal: 20,
        // paddingVertical: 10,
        // borderRadius: 5,
        width: 15,
        height: 15,
        alignItems: 'center',
        justifyContent: 'center'
      },
      buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      quantity: {
        marginHorizontal: 10,
        fontSize: 18,
      },
      discountHaving: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 190
      },
      text: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: 700,
      },
      buttonDiscountWrapper: {
        height: 80,
        width: 360,
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      buttonDiscount: {
        width: 208,
        height: 45,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 2,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
      },
      yellowBlock: {
        width: 32,
        height: 16
      },
      buttonUseDiscount: {
        width: 99,
        height: 45,
        backgroundColor: 'rgba(10, 94, 183, 1)',
        alignItems: 'center',
        justifyContent: 'center'
      },
      textInputDiscountWrapper: {
        width: '100%',
        height: 51,
        backgroundColor: 'white',
        marginTop: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      tamTinhWrapper: {
        width: '100%',
        height: 51,
        backgroundColor: 'white',
        marginTop: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
      },
      rooter: {
        width: '100%',
        height: 120,
        backgroundColor: 'white',
        marginBottom: 0,
        marginTop: 120,
        alignItems: 'center'
      },
      thanhTienWrapper: {
        flexDirection: 'row',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 15
      },
      buttonDone: {
        width: 331,
        height: 45,
        backgroundColor: 'rgba(229, 57, 53, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
      },
      buttonDoneText: {
        fontFamily: 'Roboto',
        fontSize: 25,
        fontWeight: 700,
        color: 'white'
      }
})