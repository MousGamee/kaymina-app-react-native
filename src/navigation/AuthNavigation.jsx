import React from 'react'
import { View, Text } from 'react-native'
import LoginSceen from '../screens/LoginScreen'
import { createStackNavigator } from '@react-navigation/stack'
import RegisterScreen from '../screens/RegisterScreen'

const LoginStack = createStackNavigator()

const AuthNavigation = () => {
    return (
        <LoginStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <LoginStack.Screen name="login" component={LoginSceen} />
            <LoginStack.Screen name="register" component={RegisterScreen} />
        </LoginStack.Navigator>
    )
}

export default AuthNavigation
