import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../constants/theme'

const HomeProductItem = ({ image, title, description, navigation, _id }) => {
    return (
        <View style={styles.productItem}>
            <TouchableOpacity style={styles.imageContainer} onPress={() => console.log('go to => ', _id)}>
                <Image
                    style={styles.image}
                    source={image}
                />
            </TouchableOpacity>

            <View style={styles.textContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Ionicons name="ios-heart-outline" size={SIZES.icons} />
                </View>
                <Text style={styles.description}>{description}</Text>
            </View>

        </View>
    )
}

export default HomeProductItem

const styles = StyleSheet.create({
    productItem: {
        height: 300,
        width: 170
    },
    imageContainer: {
        width: 170,
        height: 230,
    },
    image: {
        width: null,
        height: null,
        resizeMode: 'contain',
        flex: 1,
        borderRadius: 20
    },
    textContainer: {
        paddingHorizontal: 10,
        marginTop: 10
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: SIZES.h1,
        color: COLORS.h1
    },
    description: {
        fontSize: SIZES.h2,
        color: COLORS.h2

    }
})
