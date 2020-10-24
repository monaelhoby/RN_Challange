import React from 'react'
import { Text, View } from 'react-native'
import { CheckBox } from 'react-native-elements'

import Color from '../constants/colors'

const checkBox = props => {
    return (
        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
            <Text style={{marginTop:16, marginRight:-12,fontFamily : 'ArbFONTS'}}>{props.name}</Text>
            <CheckBox
                center
                title=''
                checkedColor={Color.accent}
                checked={props.checked}
                onPress={props.handlePressed}
                checkedIcon = {props.checkedIcon}
                uncheckedIcon = {props.uncheckedIcon}
            />
      </View>
    )
}

export default checkBox
