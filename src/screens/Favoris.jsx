import React from 'react'
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { WIDTH, SIZES, COLORS } from '../constants/theme'
import { data } from '../../data'

const Favoris = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            {/* TODO : add a filter */}
            <FlatList
                data={data}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('product-details', item)}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={{ uri: item.image }} />
                            </View>
                            <View style={styles.infoSection}>
                                <View style={styles.titleContainer}>
                                    <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                                    <TouchableOpacity onPress={() => alert('supprimer cette element')}>
                                        <Ionicons style={styles.iconDelete} name="trash-outline" size={SIZES.icons} color={COLORS.secondary} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.description} numberOfLines={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cupiditate harum rerum voluptatem. Placeat necessitatibus, alias, modi in possimus illo vitae quidem eius, molestias exercitationem facilis natus ducimus perspiciatis! Maiores.</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default Favoris

const styles = StyleSheet.create({
    itemContainer: {
        width: WIDTH,
        height: 160,
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth: .2,
        borderBottomColor: COLORS.secondary
    },
    imageContainer: {
        flex: .3,
        width: 100,
        marginRight: 10
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        borderRadius: 10
    },
    infoSection: {
        flex: .7,
        padding: 5
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: SIZES.bigSubtitle,
        color: COLORS.h1,
        flex: 1,
    },
    iconDelete: {
        flex: 1
    },
    description: {
        fontSize: SIZES.text,
        marginTop: 15
    }
})

