import React, { useEffect, useState, useRef } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    Animated
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS, HEIGHt, SIZES, WIDTH } from '../constants/theme'
import { data } from '../../data'
import SearchMansonry from '../components/SearchMansonry'
// TODO 
// corriger le probleme du padding bottom

//animation
const scrollY = new Animated.Value(0)
const diffClamp = Animated.diffClamp(scrollY, 0, SIZES.header)
const translateY = diffClamp.interpolate({
    inputRange: [0, SIZES.header],
    outputRange: [0, -SIZES.header]
})

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

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            {/* Search bar */}
            <Animated.View style={styles.searchContainer}>
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
            </Animated.View>

            {/* Search result*/}
            {
                isSearching ? (
                    <FlatList
                        style={{ paddingTop: SIZES.header + 10 }}
                        data={data}
                        keyExtractor={item => item._id.toString()}
                        numColumns={2}
                        onScroll={(e) => {
                            scrollY.setValue(e.nativeEvent.contentOffset.y)
                        }}
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
                        <FlatList
                            style={{ paddingTop: SIZES.header }}
                            data={data}
                            keyExtractor={item => item._id.toString()}
                            numColumns={2}
                            onScroll={(e) => {
                                scrollY.setValue(e.nativeEvent.contentOffset.y)
                            }}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity style={{ height: HEIGHt / 3, width: WIDTH / 2 }} onPress={() => navigation.navigate('product-details', item)}>
                                        <Image source={{ uri: item.image }} style={styles.simpleImage} />
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    )
            }
        </SafeAreaView>
    )
}

export default Search

const styles = StyleSheet.create({
    searchContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        transform: [
            { translateY: translateY }
        ],
        height: SIZES.header,
        paddingHorizontal: 15,
        backgroundColor: COLORS.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        zIndex: 4,
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
    simpleImage: {
        width: null,
        height: null,
        resizeMode: 'cover',
        flex: 1,
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
