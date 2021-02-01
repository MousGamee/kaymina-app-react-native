import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from './DrawerContent'
import Home from '../screens/Home'
import Profil from '../screens/Profil'

const DrawerStack = createDrawerNavigator()

const Drawer = () => {
    return (
        <DrawerStack.Navigator drawerContent={props => <DrawerContent {...props} />} >
            <DrawerStack.Screen name="Home" component={Home} />
            <DrawerStack.Screen name="Profil" component={Profil} />
        </DrawerStack.Navigator>
    )
}

export default Drawer
