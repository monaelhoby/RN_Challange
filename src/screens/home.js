import React from 'react'
import { 
    StyleSheet, 
    View,
    Text,
    Image,
    Dimensions ,
    TouchableOpacity,
    ScrollView
} from 'react-native';


import Card from '../shared/card'
import Input from '../shared/input'

const cardItems = [
    {
        icon : require('../images/products/1.png'),
        name : "الخيل"
    },
    {
        icon : require('../images/products/2.png'),
        name : "الإبل"
    },
    {
        icon : require('../images/products/3.png'),
        name : "الأبقار"
    },
    {
        icon : require('../images/products/4.png'),
        name : "سيارات كلاسيكيه"
    },
    {
        icon : require('../images/products/5.png'),
        name : "الصقور"
    },
    {
        icon : require('../images/products/6.png'),
        name : "مزارع و منتجاتها"
    },
    {
        icon : require('../images/products/7.png'),
        name : "إعلانات أخرى"
    },
    {
        icon : require('../images/products/8.png'),
        name : "معدات و كرفانات"
    },
    {
        icon : require('../images/products/9.png'),
        name : "مناقشات"
    },
]

const Home = props => {
    

    return (
     <ScrollView>
      <View style={styles.container}>
            <Image source={require('../images/navbkg.png')} style={styles.imgHeader}/>
            <Input />
        {/* Start view products */}
        <View style={{flexDirection:'row', flexWrap : 'wrap', justifyContent : "space-between"}}>
        {cardItems.map(item => (
            <TouchableOpacity
                style={styles.cardContainer}
                activeOpacity={.7}
                    onPress = {
                        () => {
                            props.navigation.navigate("Items",{
                                name : item.name
                            })
                            }
                        }
                >
                <Card>
                    <Image source={item.icon} style={styles.discoverImg}/>
                    <Text style={styles.subTitle}>{item.name}</Text>
                </Card>
            </TouchableOpacity>
        ))}
        </View>
      </View>
     </ScrollView>
    )
}

export default Home

const width = Dimensions.get('window').width - 80

const styles = StyleSheet.create({
    container : {
        justifyContent : "flex-start",
        alignItems: "center",
        fontFamily :'ArbFONTS'
    },
    imgHeader : {
        height : 180,
        borderBottomRightRadius : 35,
        borderBottomLeftRadius : 35
    },
    cardContainer : {
        height: 120,
        alignItems : "center",
        alignContent: 'center'
    },
    subTitle : {
        alignSelf : 'center',
        marginTop : 10,
        fontFamily : 'ArbFONTS'
    },
    discoverImg : {
        alignSelf : "center"
    }
})
