/* eslint-disable react/no-unstable-nested-components */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from '../routes/AppRoute';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Setting from '../screens/Setting';
import Rating from '../screens/Rating';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import {faIcons} from '@fortawesome/free-solid-svg-icons/faIcons';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons';
export default function MainNavigation() {
  const Stack = createStackNavigator();

  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  //   const BottomBar = () => {

  const DrawerBar = () => {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home}  />
        <Drawer.Screen name="Rate" component={Setting} />
        <Drawer.Screen name="Setting" component={Rating} />
      </Drawer.Navigator>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Drawer"
      screenOptions={{
        tabBarActiveTintColor: 'blue',
      }}>
      <Tab.Screen
        name="Drawer"
        component={DrawerBar}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
