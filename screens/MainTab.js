import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import FeedScreens from './FeedScreens'
import CalendarScreen from './CalendarScreen'
import SearchScreen from './SearchScreen'
import  Icon  from 'react-native-vector-icons/MaterialIcons'


const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false, tabBarActiveTintColor: '#6991e9ff',}}>
      <Tab.Screen name="Feeds" component={FeedScreens} options={{tabBarIcon: ({color, size}) => (<Icon name='view-stream' size={size} color={color} />), }}/>
      <Tab.Screen name="Calendar" component={CalendarScreen} options={{tabBarIcon: ({color, size}) => (<Icon name='event' size={size} color={color} />), }}/>
      <Tab.Screen name="Search" component={SearchScreen} options={{tabBarIcon: ({color, size}) => (<Icon name='search' size={size} color={color} />), }}/>
    </Tab.Navigator>
  )
}

export default MainTab