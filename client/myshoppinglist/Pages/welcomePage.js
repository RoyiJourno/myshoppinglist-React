import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

export default class welcomePage extends React.Component {
  
  onPress = () =>{
    alert('welcomepage');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Hello Royi34</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
        >
          <Text style = {styles.textStyle}>TouchbleOpacity_Btn</Text>
        </TouchableOpacity>
        <Button title="Create New List" buttonStyle={styles.buttonStyle} />
        <Button title="Show List" buttonStyle={styles.buttonStyle} />
        <Button title="Update Tamplate list" buttonStyle={styles.buttonStyle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 100,
  },
  buttonStyle: {
    backgroundColor: 'rgb(196, 4, 37)',
    borderRadius: 5,
    width: 170,
    marginBottom: 20,
  },
  buttonTitleStyle: {
    fontWeight: '700',
    fontSize: 24,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
  }
});
