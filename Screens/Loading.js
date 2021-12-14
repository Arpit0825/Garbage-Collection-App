import React from 'react';
import {Stylesheet,Text,View} from 'react-native';
import firebase from 'firebase';



export default class Loading extends React.Component{
  componentDidMount(){
    this.checkIfLogedIn();
  }

  checkIfLogedIn = () =>{
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.props.navigation.navigate("Dashboard")
      }else{
        this.props.navigation.navigate("Login")
      }
    })
  }


  render(){
    return(
      <View>
        <Text>Loading</Text>
      </View>
    )
  }
}