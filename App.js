import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';
import Login from './Screens/Login';
import Loading from './Screens/Loading';
import Dashboard from './Screens/Dashboard';
import firebase from 'firebase';
import {firebaseConfig} from './Config';


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}else{
  firebase.app();
}

const switchNavigator = createSwitchNavigator({
 Loading : Loading , 
 Login: Login , 
 Dashboard: Dashboard
});

const AppNavigator = createAppContainer(switchNavigator);

export default function App() {
  return( 
  <AppNavigator/>
  )
}
