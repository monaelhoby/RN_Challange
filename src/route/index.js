import React from 'react'
import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';


import Color from '../constants/colors'
import TabNvigation from './tabnavigator'

const Drawer = createDrawerNavigator();




const DrawerNav = () => {

 
  
  return (
      <Drawer.Navigator 
        initialRouteName="Home"
      >  
        <>
        <Drawer.Screen 
          name="Home" 
          component={TabNvigation} 
          options = {{
            drawerIcon: () => (
              <Ionicons
                name={Platform.OS === 'android' ? 'md-albums' : 'ios-albums'}
                size={23}
                color={Color.primary}
              />
            )
          }}
          />
          </>
      </Drawer.Navigator>
  )}

  const NavigationDrawer = () => {
    return (
      <NavigationContainer>
        <DrawerNav />
      </NavigationContainer>
    )
  }
  
  

export default NavigationDrawer



