import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity,StyleSheet,Text} from 'react-native';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        repassword:''
    };
  }

  signUP = () => {
    alert('start to signup')
    let urlAPI = "http://proj.ruppin.ac.il/cegroup2/prod/WebService.asmx/";
    fetch(urlAPI + 'SignUp' , {
      method: 'POST',
      body: JSON.stringify(
        {
          firstName: this.state.firstname,
          lastName: this.state.lastname,
          email: this.state.email,
          password: this.state.password,
          repassword: this.state.repassword,
        }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    })
      
      .then(res => {return res.json();})
      .then(data => {
        console.log(data);
        let person = JSON.parse(data.d);
        alert(
          `firstName= ${person.firstName} lastName: ${person.lastName} email: ${person.email} password: ${person.password}`);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        alert("error-" + error);
      });
}

  render() {
    return (
      <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="First Name"
        returnKeyType='next'
        onChangeText={(val) => this.setState({firstname:val})}
        onSubmitEditing={()=>this.lastnameInput.focus()}
        keyboardType='default'/>

       <TextInput 
        style={styles.input}
        placeholder="Last Name"
        returnKeyType='next'
        onChangeText={(val) => this.setState({lastname:val})}
        ref={(input)=>this.lastnameInput=input}
        onSubmitEditing={()=>this.emailInput.focus()}
        keyboardType='default'/>

        <TextInput 
        style={styles.input}
        placeholder="Email"
        returnKeyType='next'
        onChangeText={(val) => this.setState({email:val})}
        onSubmitEditing={()=>this.passwordfirstInput.focus()}
        ref={(input)=>this.emailInput=input}
        keyboardType='email-address'/>

        <TextInput 
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onSubmitEditing={()=>this.passwordsecondInput.focus()}
        returnKeyType='next'
        onChangeText={(val) => this.setState({password:val})}
        ref={(input)=>this.passwordfirstInput=input}/>

        <TextInput 
        style={styles.input}
        placeholder="Re-Enter Password"
        secureTextEntry
        returnKeyType='go'
        onChangeText={(val) => this.setState({repassword:val})}
        ref={(input)=>this.passwordsecondInput=input}/>

        <TouchableOpacity 
        style={styles.buttonContainer}
        onPress={this.signUP}>
            <Text style={styles.buttonText}>Sign Up</Text>
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