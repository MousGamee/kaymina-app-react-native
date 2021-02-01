import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Drawer from './src/navigation/Drawer';
import Login from './src/navigation/Login';

export default function App() {
  const [login, setLogin] = useState(true)
  return (
    <NavigationContainer>
      {
        login ? (
        <Drawer />
        ) : (
        <Login />
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
