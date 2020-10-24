import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'

const Card = props => {
    const customStyle = [
        styles.container,
        props.opacityBkg && styles.opacityBkg,
        props.style,
    ]
    return (
        <View style={customStyle} {...props}>
            {props.children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
   container : {
       paddingVertical : 10,
       paddingHorizontal:10,
       marginVertical:10,
       marginHorizontal : 8,
       marginHorizontal:3,
       borderColor : 'black',
       borderWidth : 1,
       shadowColor: 'black',
       shadowOpacity: 0.26,
       shadowOffset: { width: 0, height: 2 },
       shadowRadius: 8,
       elevation: 5,
       borderRadius: 5,
       backgroundColor: 'white',
       width : (Dimensions.get('window').width / 3) - 10,
       height : 100,
       justifyContent : 'center'
   },
   opacityBkg : {
       backgroundColor : 'rgba(255,255,255,.6)'
   }
})
