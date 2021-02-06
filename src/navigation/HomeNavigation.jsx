import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../constants/theme'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Search from '../screens/Search'
import ProductDetails from '../screens/ProductDetails'
import Favoris from '../screens/Favoris';

const HomeStack = createStackNavigator()

const HomeNavigation = ({ navigation }) => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="home" component={Home} options={{
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() => navigation.openDrawer()}
                        style={{ height: '100%', alignContent: 'center', justifyContent: 'center' }}>
                        <Ionicons
                            name="ios-menu" size={SIZES.icons} style={{ marginLeft: 20 }} />
                    </TouchableOpacity>
                ),

                headerRight: () => (
                    <View style={{ flexDirection: 'row', marginRight: 20 }}>
                        <Ionicons name="ios-heart" size={SIZES.icons} onPress={() => navigation.navigate('favoris')} />
                        <Ionicons name="ios-search" size={SIZES.icons} style={{ marginLeft: 20 }} onPress={() => navigation.navigate('search')} />
                    </View>
                ),
                headerTitle: 'Kaymina',
                headerTitleStyle: {
                    color: COLORS.primary
                }

            }} />
            <HomeStack.Screen name="search" component={Search} />
            <HomeStack.Screen name="favoris" component={Favoris} />
            <HomeStack.Screen name="product-details" component={ProductDetails} options={{
                headerTitle: false,
                headerTransparent: true
            }} />
        </HomeStack.Navigator>
    )
}

export default HomeNavigation
