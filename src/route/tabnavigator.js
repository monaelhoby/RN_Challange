import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from './stackNavigation'
import Color from '../constants/colors'


const Tab = createBottomTabNavigator();

const  MyTabs = () =>  {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused,color }) => {
            let iconName;
            iconName = focused ? color = Color.primary : 'gray'

            if (route.name === 'الرئيسيه') {
                iconName = 'home'
            } else if (route.name === 'الرسائل') {
                iconName = 'bolt';
            } else if (route.name === 'منشوراتى') {
                iconName = 'bookmark';
            } else if (route.name === 'حسابى') {
                iconName = 'user';
            }
            return <FontAwesome name={iconName} size={24} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: Color.primary ,
          }}
    >
      <Tab.Screen name="الرئيسيه" component={HomeScreen} />
      <Tab.Screen name="الرسائل" component={HomeScreen} />
      <Tab.Screen name="منشوراتى" component={HomeScreen} />
      <Tab.Screen name="حسابى" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs