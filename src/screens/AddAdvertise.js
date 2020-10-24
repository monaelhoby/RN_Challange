import React from 'react'
import { 
    Text, 
    StyleSheet, 
    View, 
    Image,
    TouchableOpacity ,
    TextInput,
    ScrollView
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import SelectInput from 'react-native-select-input-ios';
import { CheckBox } from 'react-native-elements'


import Color from '../constants/colors';
import ImagePicker from '../components/imagePicker'
import Button from '../shared/Button'
import CheckboxShared from '../shared/checkBox'



const StartScreen = props => {
    const optionsDept = [
        { value: 0, label: 'أغنام' },
        { value: 1, label: 'إبل' },
        { value: 3, label: 'خيل' },
        { value: 4, label: 'سيارات' },
        { value: 5, label: 'كرنافات' },
    ]

    const optionsLocation = [
        { value: 0, label: 'جده' },
        { value: 1, label: 'الرياض' },
        { value: 3, label: 'الباحه' },
        { value: 4, label: 'جيزان' },
        { value: 5, label: 'الدمام' },
    ]

// radio state
      const [state, setState] = React.useState(false)
      const [state2, setState2] = React.useState(false)
      const [state3, setState3] = React.useState(false)
      const [state4, setState4] = React.useState(false)
      const [state5, setState5] = React.useState(false)
    return (
        <ScrollView>
        <View style={{backgroundColor : "#FFF", paddingVertical:30}}>
            <TouchableOpacity 
            style={{
                borderBottomWidth:1,
                paddingVertical : 20,
                flexDirection: "row",
                justifyContent : "flex-end",
                borderBottomColor:"#AAA"
            }}
            onPress = {
                () => {
                    props.navigation.navigate("HomeScreen")
                    }
                }
            >
                <Text>إضافه إعلان</Text>
                <AntDesign name="plus" size={16} color="black" />
            </TouchableOpacity>
            {/* profile inf */}
            <View style={styles.info}>
                <Text style={styles.content1}>يعدل</Text>
                <View style={{flexDirection : 'row', justifyContent: "flex-end"}}>
                    <View>
                        <Text style={{color:Color.accent}}>أيمن محمود</Text>
                        <Text style={styles.content}>009023093039 - 019829283948</Text>
                        <Text style={styles.content}>الإعلانات المنشوره حاليا (1)</Text>
                    </View>
                    <Image source={require('../images/admin.png')}/>
                    <Text style={styles.notfication}>[]</Text>
                </View>
          </View>
            {/* upload Images */}
            <ImagePicker />
            {/* data form */}
            <View style={styles.input}>
                <Text style={styles.label}>القسم</Text>
                <SelectInput value={0} options={optionsDept} />
            </View>
            <View style={styles.input}>
                <Text style={styles.label}>المكان</Text>
                <SelectInput value={0} options={optionsLocation}/>
            </View>
            <View style={styles.input}>
                <Text style={styles.label}>الإعلان</Text>
                <TextInput placeholder="أضف عنوان الاعلان"/>
            </View>
            <View style={styles.input}>
                <Text style={styles.label}>التفاصيل</Text>
                <TextInput 
                 placeholder="تفاصيل الاعلان"
                 multiline={true}
                 numberOfLines={8}
                 />
            </View>
                {/* start price */}
                <View>
                    <Text>السعر : </Text>
                    <View style={{flexDirection:'row', justifyContent:"space-between",paddingVertical:15}}>
                       <CheckboxShared 
                         checked={state2} 
                         name="قابل للتفاوض"
                         handlePressed={() => setState2(!state2)}
                         />
                      <View style={{flexDirection:'row', justifyContent:"flex-end"}}>
                        <Text style={{marginTop:17, marginRight:8}}>ريال</Text>
                        <TextInput style={{
                            borderWidth:1, 
                            borderColor:"#333", 
                            width:60,
                            height:25, 
                            marginTop:17,
                            marginRight:-15
                            }}/>
                        <CheckBox
                            center
                            title=''
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checkedColor={Color.accent}
                            checked={state}
                            onPress={() => setState(!state)}
                        />
                       </View>
                    </View>
                        <CheckboxShared 
                          checked={state3} 
                          handlePressed={() => setState3(!state3)}
                          checkedIcon='dot-circle-o'
                          uncheckedIcon='circle-o'
                          name=" على السموم"
                          />
                          <CheckboxShared 
                            checked={state4} 
                            handlePressed={() => setState4(!state4)}
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            name="  غير محدد"
                            />
                            <CheckboxShared 
                            checked={state5} 
                            handlePressed={() => setState5(!state5)}
                            name="  تفعيل"
                            />
                        <Button 
                            title="أضف إعلانك" accent white
                            onPress = {
                                () => {
                                    props.navigation.navigate("HomeScreen")
                                }
                            }
                        />
                </View>
            </View>
        </ScrollView>
    )
}

export default StartScreen

const styles = StyleSheet.create({
    
    content: {
        fontSize: 16,
        color:'#AAA'
      },
      content1 :{
          fontSize: 16,
          color:'#777',
          marginLeft:20
      },
      info : {
          fontFamily :'ArbFONTS',
          flexDirection : 'row', 
          justifyContent: "space-between",
          paddingVertical : 20,
          borderBottomWidth:1,
          borderBottomColor:"#AAA"
      },
      input : {
          borderColor : "#333",
          borderWidth:1,
          marginVertical : 10,
          marginHorizontal : 10,
          paddingHorizontal:10,
          borderRadius:5
      },
      label :{
          marginTop:-9,
          backgroundColor:"#FFF",
          width:60,
          alignSelf:"flex-end",
          borderLeftColor:"#333",
          borderLeftWidth:1,
          paddingRight:10
      },
      notfication : {
          position:'absolute',
          width:20,
          height:20,
          borderRadius:50,
          bottom:10,
          backgroundColor:"#AAA",
          color:"#FFF",
          justifyContent:"center",
          alignItems:"center"
        }
})
