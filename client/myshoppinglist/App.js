import React from 'react';
import { createStackNavigator } from 'react-navigation';
import loginPage from './Pages/loginPage';
import welcomePage from './Pages/welcomePage';
import signupPage from './Pages/signupPage';
export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
const AppNavigator = createStackNavigator(
  {
    loginPage: { screen: loginPage },
    welcomePage: { screen: welcomePage },
    signupPage: { screen: signupPage }
  },
  {
    initialRouteName: 'loginPage',
  }
);