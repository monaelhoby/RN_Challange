import React from 'react'
import { 
    StyleSheet, 
    View,
    Text,
    Dimensions,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

import Color from '../constants/colors';
import Input from '../shared/input'


const cardItem = [
    {
        title : "الأبقار",
        type : "قونيه تركيه",
        location : "جده",
        number : 12,
        price : 800,
        img : require('../images/items/1.png')
    },
    {
        title : "الأبقار",
        type : "قونيه تركيه",
        location : "جده",
        number : 12,
        price : 800,
        img : require('../images/items/2.png')
    },
    {
        title : "الأبقار",
        type : "قونيه تركيه",
        location : "جده",
        number : 12,
        price : 800,
        img : require('../images/items/3.png')
    },
]

const width = Dimensions.get('window').width -30

const imgWidth = width / 3;
const descriptionWidth = 2* width / 3


const ITems = props => {
    
    return (
      <View style={{paddingLeft : 10}}>
        <Input />
        <View style={styles.barGray}>
            <Text>[] الأقل سعرا</Text>
            <Text>تصفيه حسب</Text>
        </View>
        <FlatList
            data={cardItem}
            renderItem={({item}) => (
                <TouchableOpacity
                style={styles.containerCard}
                activeOpacity={.7}
                    onPress = {
                        () => {
                            props.navigation.navigate("Description",{
                                name : item.title
                            })
                            }
                        }
                >
                <View style={styles.cardDescription}>
                    <View style={styles.typePrice}>
                        <View><Text style={styles.price}>{item.price} S.R</Text></View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.type}>{item.type}</Text>
                            <Image source={require('../images/products/3.png')} style={{width : 20, height:20}}/>
                        </View>
                    </View>
                    <View style={{justifyContent:'flex-end', flexDirection:'row'}}>
                        <Text style={styles.location, {marginRight : 5}}>{item.location} </Text><FontAwesome name="map-marker" size={16} color="#666" />
                    </View>
                    <View style={styles.typePrice}>
                      <Text style={{writingDirection: "rtl"}}>أضف إلى المفضله <Text style={{color : Color.primary}}>[]</Text></Text>
                      <Text>{item.number} []</Text>
                    </View>
                </View>
                <Image source={item.img} style={styles.img}/>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.img}
        />
      </View>
    )
}

export default ITems


const styles = StyleSheet.create({
    container : {
        justifyContent : "flex-start",
        fontFamily : 'ArbFONTS'
    },
    barGray : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        backgroundColor : "#E0e0e0",
        color : "#FFF",
        paddingVertical : 7,
        paddingHorizontal : 10,
        marginLeft : -10,
        marginBottom : 50,
        fontFamily : 'ArbFONTS'
    },
    containerCard : {
        flexDirection : 'row',
        width : width,
        backgroundColor : "#FFF",
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius : 5,
        marginBottom: 20,
        justifyContent : 'flex-end',
        paddingBottom : 0,
        fontFamily : 'ArbFONTS'
    },
    type : {
        color : Color.accent,
        marginRight: 8
    },
    price : {
        color : Color.secondary,
    },
    location : {
        color : "#777"
    },
    cardDescription : {
        paddingHorizontal : 10,
        paddingVertical : 10,
        width : descriptionWidth,
    },
    typePrice : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : descriptionWidth,
        paddingRight : 20,
        marginBottom : 10,
        marginTop : 10
    },
    img : {
        width : imgWidth, 
        height:120,
        marginBottom : -50,
        borderBottomRightRadius : 5
    }
})
