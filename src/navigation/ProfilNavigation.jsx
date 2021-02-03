import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Profil from '../screens/Profil'

const ProfilStack = createStackNavigator()

const ProfilNavigation = () => {
    return (
        <ProfilStack.Navigator>
            <ProfilStack.Screen name="user-profil" component={Profil} />
        </ProfilStack.Navigator>
    )
}

export default ProfilNavigation
