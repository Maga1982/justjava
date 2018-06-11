import React from 'react';
import { StyleSheet } from 'react-native';
import Login from './src/Login/Login';
import Splash from './src/Splash';
import Dashboard from './src/Dashboard';
import {createStackNavigator } from 'react-navigation';


const Navigation = createStackNavigator({
 splash:{screen: Splash},
  login:{screen: Login},
  dashboard:{screen: Dashboard}
});

export default Navigation;

