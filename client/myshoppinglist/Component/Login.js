import React, { Component } from 'react';
import { View, Text , StyleSheet, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LoginForm from './LoginForm';

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  signUP = () => {
    this.props.signUP();
}


  render() {
      return (
      <KeyboardAwareScrollView style={styles.container}contentContainerStyle={styles.contentContainerStyler}
      // scrollEnabled={true}
      extraScrollHeight={100}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled">
        <View style={styles.logoContainer}>
            <Image
            style={styles.logo} 
            source={require('../Images/logo.png')}/>
            <Text style={styles.title}>Welcome  to MyShoppingList App</Text>
        </View>
        <View style={styles.formContainer}>
        <LoginForm signUP={this.signUP}/>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#3498db'
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo:{
        width:200,
        height:200
    },
    title:{
        color:'#fff',
        marginTop: 10,
        textAlign:'center',
        fontSize: 20,
    }
});
