import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Drawer from './src/navigation/Drawer';
import AuthNavigation from './src/navigation/AuthNavigation';

export default function App() {
  const [login, setLogin] = useState(false)
  return (
    <NavigationContainer>
      {
        login ? (
        <Drawer />
        ) : (
        <AuthNavigation />
        )
      }
    </NavigationContainer>
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
