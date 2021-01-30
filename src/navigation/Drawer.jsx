import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home'
import Profil from '../screens/Profil'

const DrawerStack = createDrawerNavigator()

const Drawer = () => {
    return (
        <DrawerStack.Navigator>
            <DrawerStack.Screen name="Home" component={Home} />
            <DrawerStack.Screen name="Profil" component={Profil} />
        </DrawerStack.Navigator>
    )
}

export default Drawer
