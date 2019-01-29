import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';

export default class PluralTodo extends React.Component {
  state = {
    todos: [
      {
        task: 'Learn React Native',
      },
    ],
  };

  render() {
    return(

    );
  }
}
