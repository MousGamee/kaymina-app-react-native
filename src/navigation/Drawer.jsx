import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from './DrawerContent'
import HomeNavigation from './HomeNavigation'
import ProfilNavigation from './ProfilNavigation'

const DrawerStack = createDrawerNavigator()

const Drawer = () => {
    return (
        <DrawerStack.Navigator drawerContent={props => <DrawerContent {...props} />} >
            <DrawerStack.Screen name="home" component={HomeNavigation} />
            <DrawerStack.Screen name="profil" component={ProfilNavigation} />
        </DrawerStack.Navigator>
    )
}

export default Drawer
