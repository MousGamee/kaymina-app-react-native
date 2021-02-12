import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS, HEIGHt, SIZES } from '../constants/theme'
import { data } from '../../data'

const Search = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [isSearching, setIsSearching] = useState(false)

    const handleSubmit = () => {
        if (!isSearching) setIsSearching(true)
        alert('recherche pour : ', searchQuery)
    }

    const clearSearch = () => {
        setSearchQuery('')
        setIsSearching(false)
    }

    console.log(navigation)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>

            {/* Search bar */}
            <View style={styles.searchContainer}>
                <View style={styles.searchBarContainer}>
                    <TouchableOpacity style={styles.backBtnContainer} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back-outline" style={styles.backBtn} size={SIZES.icons} />
                    </TouchableOpacity>

                    <View style={styles.searchBar}>
                        <Ionicons name="search-outline" size={SIZES.icons} style={{ marginLeft: 20 }} />
                        <TextInput
                            placeholder={'Recherche'}
                            fontSize={SIZES.h2}
                            style={styles.textInputSearch}
                            onChangeText={text => setSearchQuery(text)}
                            onSubmitEditing={() => handleSubmit()}
                            value={searchQuery}
                        />
                        {
                            isSearching &&
                            <TouchableOpacity
                                onPress={() => clearSearch()}
                                style={{ position: 'absolute', right: 10, top: 15 }}>
                                <Ionicons name="close-circle-outline" size={SIZES.icons} />
                            </TouchableOpacity>
                        }

                    </View>
                </View>
            </View>

            {/* Search result*/}
            {
                isSearching ? (
                    <FlatList
                        style={{ marginTop: 10 }}
                        data={data}
                        keyExtractor={item => item._id.toString()}
                        numColumns={2}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.productItem}>
                                    <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('product-details', item)}>
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
                ) : (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                            <Text style={{ fontSize: SIZES.bigSubtitle }}>
                                Lancer une Recherche
                      </Text>
                        </View>
                    )
            }
        </SafeAreaView>
    )
}

export default Search

const styles = StyleSheet.create({
    searchContainer: {
        height: 50,
        paddingHorizontal: 15,
        backgroundColor: COLORS.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    searchBarContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    backBtnContainer: {
        flex: .1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBar: {
        flex: .9,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInputSearch: {
        flex: 1,
        height: '100%',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
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
