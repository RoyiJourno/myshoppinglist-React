import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Login from '../Component/Login'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default class loginPage extends React.Component {
  constructor(props){
    super(props);
    this.state={

    };
  }
  signUP = () =>{
    this.props.navigation.navigate('signupPage');
  }

  render() {
    
    return (
      <View style={styles.container}>
      <Login signUP={this.signUP}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
