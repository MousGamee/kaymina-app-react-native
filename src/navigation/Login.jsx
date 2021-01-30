import React from 'react'
import { View, Text } from 'react-native'
import LoginSceen from '../screens/LoginScreen'
import { createStackNavigator } from '@react-navigation/stack'
import RegisterScreen from '../screens/RegisterScreen'

const LoginStack = createStackNavigator()

const Login = () => {
    return (
        <LoginStack.Navigator>
            <LoginStack.Screen name="Login" component={LoginSceen} />
            <LoginStack.Screen name="Register" component={RegisterScreen} />
        </LoginStack.Navigator>
    )
}

export default Login
