import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS, SIZES } from '../constants/theme'
import { data } from '../../data'

const SearchResult = ({ navigation }) => {
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
                        <View style={styles.productItem}>
                            <TouchableOpacity style={styles.imageContainer} onPress={() => console.log(navigation)}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: item.image }}
                                />
                            </TouchableOpacity>
                            <View style={styles.textContainer}>
                                <View style={styles.titleContainer}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    {/* <Ionicons name="ios-heart-outline" size={SIZES.icons} /> */}
                                </View>
                                <Text style={styles.description}>{item.description}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </SafeAreaView>
    )
}

export default SearchResult

const styles = StyleSheet.create({
    productItem: {
        flex: .5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25
    },
    imageContainer: {
        width: 170,
        height: 230,
    },
    image: {
        width: null,
        height: null,
        resizeMode: 'cover',
        flex: 1,
        borderRadius: 20
    },
    textContainer: {
        paddingHorizontal: 0,
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
