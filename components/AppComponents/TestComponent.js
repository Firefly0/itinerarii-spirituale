
import React from 'react'
import {Text, View} from 'react-native'
import firebase from 'firebase/app';
import 'firebase/firestore';


export default class TestComponent extends React.Component {
  render(){
    writeUserData= (email,fname,lname)=>{
      firebase.database().ref('Users/').set({
          email,
          fname,
          lname
      }).then((data)=>{
          //success callback
          console.log('data ' , data)
      }).catch((error)=>{
          //error callback
          console.log('error ' , error)
      })
  }
    return <Text onPress={()=>writeUserData('sa', 'sa', 'fr')}>Test Component</Text>
  }
}