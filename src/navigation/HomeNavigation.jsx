import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../constants/theme'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Search from '../screens/Search'
import ProductDetails from '../screens/ProductDetails'
import Favoris from '../screens/Favoris';
import Profil from '../screens/Profil';
import SearchBar from '../components/SearchBar';
import CreationForm from '../screens/CreationForm';
import SearchResult from '../screens/SearchResult';


const HomeStack = createStackNavigator()

const HomeNavigation = ({ navigation }) => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="home" component={Home} options={{
                headerTransparent: true,
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() => navigation.openDrawer()}
                        style={{ height: '100%', alignContent: 'center', justifyContent: 'center' }}>
                        <Ionicons
                            name="ios-menu" size={SIZES.icons} style={{ marginLeft: 20 }} color={COLORS.white} />
                    </TouchableOpacity>
                ),

                headerRight: () => (
                    <View style={{ flexDirection: 'row', marginRight: 20 }}>
                        <Ionicons name="ios-heart" color={COLORS.white} size={SIZES.icons} onPress={() => navigation.navigate('favoris')} />
                        <Ionicons name="ios-search" color={COLORS.white} size={SIZES.icons} style={{ marginLeft: 20 }} onPress={() => navigation.navigate('search')} />
                    </View>
                ),
                headerTitle: () => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={{ uri: 'https://kaymina.fr/wp-content/uploads/2020/11/logo-kay2-1.png' }} style={{ width: 100, resizeMode: 'contain', height: 50 }} />
                    </View>

                )

            }} />
            <HomeStack.Screen name="search" component={Search} options={{
                headerTitle: () => (
                    <View style={styles.container}>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.input} placeholder={'Recherche'} />
                        </View>
                    </View>
                ),
                headerRight: () => (
                    <Ionicons name='heart-outline' />
                )

            }} />
            <HomeStack.Screen name="favoris" component={Favoris} />
            <HomeStack.Screen name="search-result" component={SearchResult} />
            <HomeStack.Screen name="creation-form" component={CreationForm} />
            <HomeStack.Screen name="profil" component={Profil} options={{
                headerTitle: "Mon compte"
            }} />
            <HomeStack.Screen name="product-details" component={ProductDetails} options={{
                headerTitle: false,
                headerTransparent: true
            }} />
        </HomeStack.Navigator>
    )
}

const styles = StyleSheet.create({

})

export default HomeNavigation
