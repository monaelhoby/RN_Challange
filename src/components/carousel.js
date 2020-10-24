import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-looped-carousel';
import { AntDesign } from '@expo/vector-icons'; 

const { width, height } = Dimensions.get('window');

export default class CarouselExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
      marginTop : -40
    };
  }

  _onLayoutDidChange = e => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: width, height: 250 } });
  };

  render() {
    const pages = generatePages(2, this.state.size);
    return (
      <View onLayout={this._onLayoutDidChange} style={{marginTop:-20}}>
        <Carousel
          style={this.state.size}
          leftArrowText={(<AntDesign name="caretleft" size={24} color="#FFF" />)}
          leftArrowStyle={{color: 'white', fontSize: 22, marginTop: 20}}
          rightArrowText={(<AntDesign name="caretright" size={24} color="#FFF" />)}
          rightArrowStyle={{color: 'white', fontSize: 22, marginTop: 20}}
        //   pageInfo
          arrows
          isLooped={false}
          autoplay={true}
          onAnimateNextPage={p => console.log(p)}
        >
         {pages}
        </Carousel>
      </View>
    );
  }
}

const sliders = [
    {
        src : require('../images/slider/1.png')
    },
    {
        src : require('../images/slider/2.png')
    }
]

const generatePages = () =>
    sliders.map((item, i) => (
    <View key={i} style={styles.sliderContaier}>
        <Image source={item.src} style={{width : width}}/>
        <View style={styles.absPos}>
        <Text style={styles.text}>أضف للمفضله []</Text>
          <View style={styles.info}>
            <Text style={styles.content1}>منذ ثلاثه أيام []</Text>
            <View style={{flexDirection : 'row', justifyContent: "flex-end"}}>
                <View>
                    <Text style={styles.content}>أيمن محمود</Text>
                    <Text style={styles.content}>جده - المملكه العربيه السعوديه</Text>
                </View>
                <Image source={require('../images/admin.png')}/>
            </View>
          </View>
        </View>
    </View>
  ));


  const styles = StyleSheet.create({
    sliderContaier: {
      position : 'relative',
      fontFamily :'ArbFONTS'
      
    },
    text : {
        color : "#FFF",
        position : 'absolute',
        top : -130,
        left : 15,
        fontSize : 18,
        fontFamily :'ArbFONTS'
    },
    content: {
      fontSize: 16,
      color:"#FFF"
    },
    content1 :{
        fontSize: 16,
        color:"#FFF",
        marginTop : 20,
        marginRight:40
    },
    info : {
        fontFamily :'ArbFONTS',
        flexDirection : 'row', 
        justifyContent: "space-between",
    },
    absPos : {
        position : 'absolute',
        bottom:15,
        right :5,
    }
  });