import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Search from '../screens/Search'
import ProductDetails from '../screens/ProductDetails'

const HomeStack = createStackNavigator()
const HomeNavigation = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="home" component={Home} />
            <HomeStack.Screen name="search" component={Search} />
            <HomeStack.Screen name="product-details" component={ProductDetails} />
        </HomeStack.Navigator>
    )
}

export default HomeNavigation
