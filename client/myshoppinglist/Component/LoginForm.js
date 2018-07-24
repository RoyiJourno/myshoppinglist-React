import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity,StyleSheet,Text} from 'react-native';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  signUP = () => {
    this.props.signUP();
  }
  Login = () => {
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
        style={styles.input}
        placeholder="Email"
        returnKeyType='next'
        onSubmitEditing={()=>this.passwordInput.focus()}
        keyboardType='email-address'/>

        <TextInput 
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        returnKeyType='go'
        ref={(input)=>this.passwordInput=input}/>

        <TouchableOpacity 
        style={styles.buttonContainer}
        onPress={this.Login}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.buttonContainer}
        onPress={this.signUP}>
            <Text style={styles.buttonText}>Not A Member Yet? Sign Up Here</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container:{
        padding: 20,
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.3)',
        marginBottom: 10,
        color:'#FFF',
        paddingHorizontal: 10,
    },
    buttonContainer:{
        backgroundColor:'#2980b9',
        paddingVertical: 15,
        marginTop: 10,
    },
    buttonText:{
        textAlign:'center',
        color:'#FFF'
    }
});