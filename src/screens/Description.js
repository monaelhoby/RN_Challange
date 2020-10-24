import React from 'react'
import { 
    StyleSheet, 
    ScrollView, 
    Image, 
    View, 
    Text,
    TextInput 
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';


import Carousel from '../components/carousel'
import Color from '../constants/colors'
import Buton from '../shared/Button'

const Description = () => {

   
    return (
      <ScrollView>
        <View style={styles.border}></View>
        {/* Start Slider */}
        <Carousel />
        {/* End slider */}
        <View style={styles.section}>
            <View style={styles.sectionBorder}>
                <View style={styles.row}>
                    <Text style={{color:Color.primary}}>قونيه تركيه</Text>
                    <Image source={require('../images/products/3.png')} style={{width:20, height:20, marginLeft:10}}/>
                </View>
                <View style={{justifyContent : 'flex-start'}}>
                    <View style={styles.infoHeaderLeft}>
                       <Text style={{color : Color.secondary}}> 800 S.R</Text>
                       <Text style={{color:"#777"}}> قابل للنقاش </Text>
                    </View>
                    <View><Text style={{color:"#777"}}>12 []</Text></View>
                </View>
            </View>
        {/* start Detail */}
        <View style={styles.sectionBorder}>
            <View><Text style={{color : Color.accent}}>الوصف</Text></View>
            <Text >الغنم هي من الثدييات المدجنة ونباتية من عائلة البقاريات والعائلة الفرعية الماعز. ويربي الإنسان الغنم من أجل لحومها، وحليبها، صوفها وجلدها الذي يصنع منه نوعية تدعى باسان</Text>
        </View>
        {/* start type */}
        <View style={styles.sectionBorder}>
            <View><Text style={{color : Color.accent}}>النوع</Text></View>
            <Text>أغنام</Text>
        </View>
        {/* start comments */}
        <View style={styles.sectionBorder}>
            <View><Text style={{color : Color.accent}}>التعليقات</Text></View>
            <View style={{flexDirection : 'row', justifyContent: "flex-end"}}>
                <View style={{marginRight:5, marginTop:10}}>
                    <Text style={{color : Color.secondary}}>أيمن محمود</Text>
                    <Text>جده - المملكه العربيه السعوديه</Text>
                </View>
                <Image source={require('../images/admin.png')} style={{marginRight:-10}}/>
            </View>
        </View>
        {/* start add comment */}
        <View style={{marginTop : 10}}>
            <View style={{flexDirection:"row", justifyContent :"space-between"}}>
                <Text style={{color : Color.accent}}>كل الردود : 1</Text>
                <Text style={{color : Color.accent}}>أضف تعليق</Text>
            </View>
            <View 
            style={{
                borderColor: '#000000',
                borderWidth: 1,
                marginVertical : 20
              }}
              >
                <TextInput
                    multiline={true}
                    numberOfLines={6}
                />
             </View>
        </View>
        {/* conact */}
        <Buton title=" [] إتصل الأن " secondary white/>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}> 
            <Buton title="[] تواصل عبر الواتساب"  secondaryText/>
            <Buton title="[] إرسال رساله " accent white/>
        </View>
        </View>
     </ScrollView>
    )
}

export default Description

const styles = StyleSheet.create({
    border : {
        height:20, 
        backgroundColor:Color.primary,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20,
        position:'relative',
        zIndex:99990
    },
    section : {
        paddingHorizontal : 20,
        paddingVertical :20,
        fontFamily : 'ArbFONTS',
        backgroundColor :"#FFF",
        borderTopLeftRadius : 20, 
        borderTopRightRadius:20,
        marginTop : -20
    },
    sectionBorder : {
        paddingVertical : 20,
        borderBottomColor : "#AAA",
        borderStyle : "solid",
        borderBottomWidth : 1
    },
    row : {
        flexDirection : 'row',
        justifyContent : 'flex-end'
    },
    infoHeaderLeft : {
        flexDirection : 'row', 
        justifyContent:'flex-start', 
        marginTop :-20
    }
})
