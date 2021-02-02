import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import AppNavigator from './navigations/AppNavigator'
import AudioProvider, { AudioContext } from './API/AudioProvider';

export default function App() {
  return (
    <AudioProvider>
    <NavigationContainer>
    <AppNavigator/>
    </NavigationContainer>
    </AudioProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
