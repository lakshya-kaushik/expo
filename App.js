import * as React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import SearchScreen from './screens/SearchScreen'
import BookTransactionScreen from './screens/BookTransactionScreen'
import { createAppContainer } from 'react-navigation'; 
import {createBottomTabNavigatior } from 'react-navigation-tabs'

export default class App extends React.Component {
  render() {
    return (
    <AppContainer/>
    
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  BookTransactionScreen:{screen:BookTransactionScreen},
  SearchScreen : {screen:SearchScreen}
})

const AppContainer = createAppContainer(TabNavigator)
