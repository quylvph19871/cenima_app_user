import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Helloscreen from '../Screens/Helloscreen/Helloscreen';
import Login from '../Screens/Login/Login';
import Listmovie from '../Screens/Movie/Listmovie';
import MyDrawerPoly from './Menudrawer';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Home" component={Listmovie} options={{ headerShown: false }}  />
      <Tab.Screen name="Login" component={Login} options={{ headerShown: false }} /> */}
    </Tab.Navigator>
  );
}