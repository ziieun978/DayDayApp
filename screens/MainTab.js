import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import FeedScreens from './FeedScreens'
import CalendarScreen from './CalendarScreen'
import SearchScreen from './SearchScreen'


const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feeds" component={FeedScreens}/>
      <Tab.Screen name="Calendar" component={CalendarScreen}/>
      <Tab.Screen name="Search" component={SearchScreen}/>
    </Tab.Navigator>
  )
}

export default MainTab