import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { WIDTH, SIZES, COLORS } from '../constants/theme'

const FavorisProductItem = ({ navigation }) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('product-details')}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../assets/images/image-2.jpg')} />
            </View>
            <View style={styles.infoSection}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title} numberOfLines={1}>Robe en wax</Text>
                    <TouchableOpacity onPress={() => alert('supprimer cette element')}>
                        <Ionicons style={styles.iconDelete} name="trash-outline" size={SIZES.icons} color={COLORS.secondary} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.description} numberOfLines={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cupiditate harum rerum voluptatem. Placeat necessitatibus, alias, modi in possimus illo vitae quidem eius, molestias exercitationem facilis natus ducimus perspiciatis! Maiores.</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FavorisProductItem

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
        fontSize: SIZES.bigTitle,
        color: COLORS.h1
    },
    description: {
        fontSize: SIZES.text,
        marginTop: 15
    }
})
