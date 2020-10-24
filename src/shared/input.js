import React from 'react'
import { 
    TextInput, 
    StyleSheet, 
    View,
    Dimensions
 } from 'react-native';
 import { AntDesign } from '@expo/vector-icons'; 

 import Color from '../constants/colors'

const width = Dimensions.get('window').width -30

const Input = () => {
    const [value, onChangeText] = React.useState('');
    return (
        <View style={styles.input}>
            <TextInput
                style={{ height: 40, backgroundColor : "#FFF"}}
                // onChangeText={text => onChangeText(text)}
                placeholderTextColor={Color.primary}
                placeholder="بحث ..."
                // value={value}
            />
            <AntDesign name="search1" size={24} color={Color.primary} style={{marginLeft : 10,marginTop:5}} />
        </View>
        )
}

export default Input


const styles = StyleSheet.create({
    
    input:{
        borderRadius:10,
        backgroundColor:"#FFF",
        flexDirection:'row',
        width: width ,
        justifyContent:"flex-end",
        paddingTop : 10,
        paddingBottom : 10,
        paddingLeft : 10,
        paddingRight : 10,
        top : 10,
        zIndex : 999,
        marginTop : -150,
        marginBottom : 30,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        fontFamily : 'ArbFONTS'
    },
})
