import React from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeProductItem from '../components/HomeProductItem';
import { COLORS, SIZES } from '../constants/theme'

const Home = ({ navigation }) => {

    const handleNavigation = () => {
        navigation.navigate('product-details')
    }

    const data = [
        {
            _id: 1,
            title: 'mon item',
            description: 'test de lajout dun iteme',
            image: require('../../assets/images/image-1.jpg')
        },
        {
            _id: 2,
            title: 'mon item 2',
            description: 'test de lajout dun iteme',
            image: require('../../assets/images/image-2.jpg')
        },
        {
            _id: 3,
            title: 'mon item 3',
            description: 'test de lajout dun iteme',
            image: require('../../assets/images/image-6.jpg')
        },
        {
            _id: 4,
            title: 'mon item',
            description: 'test de lajout dun iteme',
            image: require('../../assets/images/image-4.jpg')
        },
        {
            _id: 5,
            title: 'mon item',
            description: 'test de lajout dun iteme',
            image: require('../../assets/images/image-1.jpg')
        },
        {
            _id: 6,
            title: 'mon item 2',
            description: 'test de lajout dun iteme',
            image: require('../../assets/images/image-2.jpg')
        },
        {
            _id: 7,
            title: 'mon item 3',
            description: 'test de lajout dun iteme',
            image: require('../../assets/images/image-6.jpg')
        },
        {
            _id: 8,
            title: 'mon item',
            description: 'test de lajout dun iteme',
            image: require('../../assets/images/image-4.jpg')
        },
        {
            _id: 9,
            title: 'mon item',
            description: 'test de lajout dun iteme',
            image: require('../../assets/images/image-1.jpg')
        },
        {
            _id: 10,
            title: 'mon item 2',
            description: 'test de lajout dun iteme',
            image: require('../../assets/images/image-2.jpg')
        },
        {
            _id: 11,
            title: 'mon item 3',
            description: 'test de lajout dun iteme',
            image: require('../../assets/images/image-6.jpg')
        },
        {
            _id: 12,
            title: 'mon item',
            description: 'test de lajout dun iteme',
            image: require('../../assets/images/image-4.jpg')
        },
    ]

    return (
        <SafeAreaView style={{ flex: 1 }}>
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
