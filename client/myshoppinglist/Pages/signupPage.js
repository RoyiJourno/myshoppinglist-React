import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SignUP from '../Component/SignUP'


export default class signupPage extends React.Component {
  
  onPress = () =>{
    alert('signup page');
  }

  render() {
    return (
      <View style={styles.container}>
      <SignUP signUP={this.signUP}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
