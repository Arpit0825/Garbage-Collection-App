import React from 'react';
import{createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import StorySreen from '../Screens/StoryScreen'

const Stack = createStackNavigator();

const StackNavigator = () =>{ 
  return(
    <Stack.Navigator
    initialRouteName='Home'
    screenOptions={{
      headerShown:false
      }}>
    <Stack.Screen name='Home' component={TabNavigator}/>
    <Stack.Screen name='Story Screen' component={StorySreen}/>
    </Stack.Navigator>
  );
};


export default StackNavigator;



