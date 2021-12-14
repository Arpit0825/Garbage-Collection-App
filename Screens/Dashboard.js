import React from 'react';
import {Stylesheet,Text,View} from 'react-native';
import firebase from 'firebase';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from '../Navigation/DrawerNavigator'


export default function Dashboard(){
  return(
    <NavigationContainer>
    <DrawerNavigator/>
    </NavigationContainer>
  )
  }

