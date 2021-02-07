import axios from 'axios';
import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeProductItem from '../components/HomeProductItem';
import { COLORS, SIZES } from '../constants/theme'
import { data } from '../../data'

const Home = ({ navigation }) => {

    const handleNavigation = () => {
        navigation.navigate('product-details')
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            {/* content */}
            <FlatList
                style={{ marginTop: 10 }}
                data={data}
                keyExtractor={item => item._id.toString()}
                numColumns={2}
                renderItem={({ item }) => {
                    return (
                        <HomeProductItem
                            handleNavigation={handleNavigation}
                            _id={item._id}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    )
                }}
            />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({


})
