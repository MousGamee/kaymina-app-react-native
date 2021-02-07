import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from './DrawerContent'
import HomeNavigation from './HomeNavigation'


const DrawerStack = createDrawerNavigator()

const Drawer = () => {
    return (
        <DrawerStack.Navigator drawerContent={props => <DrawerContent {...props} />} >
            <DrawerStack.Screen name="home" component={HomeNavigation} />
        </DrawerStack.Navigator>
    )
}

export default Drawer
