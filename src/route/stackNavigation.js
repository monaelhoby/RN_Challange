import React from 'react'
import { Platform, View, Text, Image  } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/home'
import allItems from '../screens/Items'
import Detail from '../screens/Description'
import Color from '../constants/colors'
import HeaderButton from '../shared/HeaderButton'
import AddAdvertise from '../screens/AddAdvertise'

const Stack = createStackNavigator();

const img = require('../images/navbkg.png')
const stackNavigation = () => {
    return (
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Color.primary,
              elevation : 0,
            },
            transparentHeader : {
              position:'relative',
              // zIndex : -1
            },
            headerTintColor: "#FFF",
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            safeAreaInsets : {
              top : 25
            }
          }}
        >
          
          <Stack.Screen
            name="AddAdvertise"
            component={AddAdvertise}
            options={ ({navigation}) => ({
              title: 'إضافه إعلان',
              textAlign : "center",
              headerTitleStyle: {
                width : 180
              },
              headerLeft : () => (
                <View style={{flexDirection : "row"}}>
                <Text style={{color : "#FFF", marginLeft :10}}>[]</Text>
                </View>
              )
            })}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={ ({navigation}) => ({
              title: '[]',
              headerBackground: () => (
              <Image source={img} style={{height : 120}}/>
              ),
              textAlign : "right",
              headerTitleStyle: {
                alignSelf: (Platform.OS === 'android') ? 'flex-end' : 'center'
              },
              headerRight : () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item title="Menu" iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                             onPress={() => {navigation.toggleDrawer()}}/>
                      </HeaderButtons>),
              headerLeft : () => (
                <View style={{flexDirection : "row"}}>
                <Ionicons name={Platform.OS === 'android' ? "md-notifications" : "ios-notifications"}
                 size={24} color="white"  style={{marginLeft : 15}} />
                   <Text style={{
                          backgroundColor : "#ff0000", 
                          width : 15, 
                          height:15,
                          borderRadius : 50,
                          textAlign : "center",
                          position:"absolute",
                          left : 25,
                          bottom : 0,
                          color : "#FFF"
                          }}>1</Text>
                </View>
              )
            })}
          />
          <Stack.Screen
            name="Items"
            component={allItems}
            options={ ({route, navigation}) => ({
              title: route.params.name,
              headerStyle: {
                borderBottomLeftRadius : 20,
                borderBottomRightRadius : 20,
                backgroundColor : Color.primary,
                height : 80,
              },
              headerTitleStyle: {
                width : 180,
              },
              headerRight : () => (
                          <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Text style={{color : "#FFF", fontSize : 16}}>[]</Text>
                            <Item title="Menu" iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                             onPress={() => {navigation.toggleDrawer()}}/>
                      </HeaderButtons>),
              headerLeft : () => (
                <View style={{flexDirection : "row"}}>
                  <Ionicons name={Platform.OS === 'android' ? "md-notifications" : "ios-notifications"}
                 size={24} color="white"  style={{marginLeft : 15}} />
                </View>
            )})}
          />
          <Stack.Screen
            name="Description"
            component={Detail}
            options={ ({route}) => ({ 
              title:  route.params.name,
              headerStyle: {
                backgroundColor : Color.primary,
                height : 60,
                paddingRight : 15,
                paddingLeft : 15,
                elevation:0
              },
              headerTitleStyle: {
                width : 180,
              },
              headerTintColor: '#fff',
              headerRight : () => (<Text style={{marginRight : 15, color :"#FFF"}} >[]</Text>),
              headerLeft : () => (<Text style={{marginLeft : 15, color :"#FFF"}} >[]</Text>),
              })
            }
          />
        </Stack.Navigator>
       
      );
}

export default stackNavigation