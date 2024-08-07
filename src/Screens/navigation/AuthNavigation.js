import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../Login/Login';
import Helloscreen from '../Helloscreen/Helloscreen';
import Register from '../Login/Register';
import Listmovie from '../Movie/Listmovie';
import Movie from '../Movie/Movie';
import HeartButton from '../Video';
import Moviereview from '../Movie/Moviereview';
import Searchmovie from '../Movie/Searchmovie';
import Tickets from '../Tickets/Tickets';
import Ticketsmovie from '../Tickets/Ticketsmovie';
import Ticketsfoods from '../Tickets/Ticketsfoods';
import Ticketsmonneys from '../Tickets/Ticketsmonneys';

const Auth = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const AuthNavigation = () => {
  return (
    <Auth.Navigator initialRouteName='Helloscreen'>
      {/* <Auth.Screen
        name='Helloscreen'
        component={Helloscreen}
        options={
          { headerShown: false }
        }
      /> */}
      {/* <Auth.Screen
        name='Login'
        component={Login}
        options={
          { headerShown: false }
        }
      /> */}
      {/* <Auth.Screen
        name='Register'
        component={Register}
        options={
          { headerShown: false }
        }
      /> */}
      <Auth.Screen
        name='Listmovie'
        component={Listmovie}
        options={
          { headerShown: false }
        }
      />
      <Auth.Screen
        name='Searchmovie'
        component={Searchmovie}
        options={
          { headerShown: false }
        }
      />
      <Auth.Screen
        name='Movie'
        component={Movie}
        options={
          { headerShown: false }
        }
      />
       <Auth.Screen
        name='Moviereview'
        component={Moviereview}
        options={
          { headerShown: false }
        }
      />
      <Auth.Screen
        name='Tickets'
        component={Tickets}
        options={
          { headerShown: false }
        }
      />
       <Auth.Screen
        name='Ticketsmovie'
        component={Ticketsmovie}
        options={
          { headerShown: false }
        }
      />
       <Auth.Screen
        name='Ticketsfoods'
        component={Ticketsfoods}
        options={
          { headerShown: false }
        }
      />
       <Auth.Screen
        name='Ticketsmonneys'
        component={Ticketsmonneys}
        options={
          { headerShown: false }
        }
      />
    </Auth.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})