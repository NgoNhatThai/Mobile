import{StyleSheet, View, Text, Image, SafeAreaView,FlatList, TouchableOpacity} from "react-native"
const DATA = [
    {
      id: 1,
      pathImg: require('../assets/ca_nau_lau.png'),
      prdName: 'Ca nấu lẩu, nấu mì mini...',
      sName: 'Devang',
    },
    {
        id: 2,
      pathImg: require('../assets/ga_bo_toi.png'),
      prdName: '1KG KHÔ GÀ BƠ TỎI...',
      sName: 'LTD Food',
    },
    {
        id: 3,
      pathImg: require('../assets/xa_can_cau.png'),
      prdName: 'Xe cần cẩu đa năng',
      sName: 'Thế giới đồ chơi',
    },
    {
        id: 4,
      pathImg: require('../assets/do_choi_dang_mo_hinh.png'),
      prdName: 'Đồ chơi dạng mô hình',
      sName: 'Thế giới đồ chơi',
    },
    {
        id: 5,
      pathImg: require('../assets/lanh_dao_gian_don.png'),
      prdName: 'Lãnh đạo giản đơn',
      sName: 'Minh Long Book',
    },
    {
        id: 6,
      pathImg: require('../assets/hieu_long_con_tre.png'),
      prdName: 'Hiểu lòng con trẻ',
      sName: 'Minh Long Book',
    },
    {
        id: 7,
        pathImg: require('../assets/Trump 1.png'),
        prdName: 'Dolnal Trump the Smart',
        sName: 'Minh Long Book',
    },
  ];


const Item = ({id, pathImg, prdName, sName}) => (
    <View style={styles.productWrapper}>
            <Image style={styles.productImg} source={pathImg} />
            <View style={styles.productDetail}>
                <Text style={styles.productName}>{prdName}</Text>
                <View style={styles.shopWrapper}>
                    <Text style={styles.shopTitle}>Shop:</Text>
                    <Text style={styles.shopName}>{sName}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.chatBtn}>
                <Text style={styles.chatTxt}>Chat</Text>
            </TouchableOpacity>
    </View>
  );
function Screen4_a(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.imageArrow} source={require('../assets/arrow.png')} />
                <Text style={styles.headerText}>Chat</Text>
                <Image style={styles.imageArrow} source={require('../assets/cart.png')}/>
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.text}>
                    Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
                </Text>
            </View>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => 
                        <Item 
                            pathImg={item.pathImg} 
                            prdName={item.prdName}
                            sName={item.sName}
                        />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
    )
}
export default Screen4_a;
const styles= StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#e5e5e5'
    },
    header: {
        width: '100%',
        height: 42,
        backgroundColor: 'rgba(27, 169, 255, 1)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageArrow: {
        width: 24,
        height: 24,
        paddingHorizontal: 10
    },
    headerText: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 15
    },
    text: {
        fontSize: 16,
        fontFamily: 'Roboto'
    },
    textWrapper: {
        width: '80%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    productWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 20,
        backgroundColor: '#fff',
        borderColor: '#c4c4c4',
        borderWidth: 1 ,
    },
    productImg: {
        width: 74,
        height: 74,
    },
    productDetail: {
        display: 'flex',
        justifyContent: 'flex-start',
        height: '100%',
    },
    productName: {

    },
    shopWrapper: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
    },
    shopTitle: {
        color: '#7D5B5B',
    },
    shopName: {
        marginLeft: 10,
    },
    chatBtn: {
        width: 88,
        height: 38,
        backgroundColor: '#F31111',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chatTxt: {
        color: '#fff'
    }
})