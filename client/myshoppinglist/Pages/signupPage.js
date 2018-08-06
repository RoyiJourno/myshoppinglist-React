import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SignUP from '../Component/SignUP'


export default class signupPage extends React.Component {

  static navigationOptions =
  {
     title: 'S I G N  U P', 
     headerTextStyle:
     {
     textAlign: 'center',
     flexGrow: 1
     },
     headerStyle: {
     backgroundColor: '#FFC107',
   }, 
   headerTintColor: '#000000',
  };

  render() {
    return (
      <View style={styles.container}>
      <SignUP/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  header_title:{
    textAlign:'center',
  }
});
