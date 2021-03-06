import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import Drawer from './src/navigation/Drawer'
import AuthNavigation from './src/navigation/AuthNavigation'

export default function App() {
  const [login, setLogin] = useState(true)
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'}/>
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