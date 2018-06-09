import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.textStyle}>Hello Royi</Text>
        <Button title="Create New List"  buttonStyle={styles.buttonStyle}/>
        <Button title="Show List" buttonStyle={styles.buttonStyle}/>
        <Button title="Update Tamplate list" buttonStyle={styles.buttonStyle}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
  textStyle:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:100,
    },
  buttonStyle: {
    backgroundColor: 'rgb(196, 4, 37)',
    borderRadius: 5,
    width: 170,
    marginBottom:20,
  },
  buttonTitleStyle:{
    fontWeight:'700',
    fontSize:24,
  }
});
