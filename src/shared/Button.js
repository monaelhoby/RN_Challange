import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import Color from '../constants/colors'
import Text from './text'

const Button = props => {

    const customStyle = [
        props.style,
        styles.button,
        props.accent && styles.accent,
        props.secondary && styles.secondary,
        props.primary && styles.primary,
        props.add && styles.add,
        props.variant && styles.variant
    ]
    const textStyle=[
      props.style,
      props.white && styles.white,
      props.secondaryText && styles.secondaryText
    ]
    return (
        <TouchableOpacity style={customStyle} {...props} activeOpacity={.6}>
            <Text style={textStyle}>{props.title}</Text>
            {props.children}
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
  button : {
      marginTop : 5,
      marginHorizontal : '5%',
      marginVertical:5,
      alignItems:'center',
      justifyContent : "center",
      paddingVertical : 5,
      paddingHorizontal : 10,
      borderRadius : 25,
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 5,
      elevation: 3,
      flexDirection : 'row',
      
  },
  accent:{
    backgroundColor : Color.accent,
  },
  secondary:{
    backgroundColor : Color.secondary,
  },
  primary : {
    backgroundColor : Color.primary,
  },
  variant:{
    marginHorizontal : '2%',
    paddingVertical : 5,
    paddingHorizontal : 10,
  },
  add : {
    width : '70%',
  },
  secondaryText : {
    color : Color.secondary
  },
  white : {
    color : "#FFF"
  }
})
