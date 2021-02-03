import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { WIDTH, HEIGTH, COLORS, SIZES } from '../constants/theme'

const ProductDetails = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/image-1.jpg')}
                />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.title}>Robe en wax</Text>
                <View>
                    <Text style={styles.titleDescription}>Description</Text>
                    <Text style={styles.textDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vitae id itaque omnis voluptates molestias ab, corrupti harum placeat cupiditate consequuntur dolor, ullam optio perspiciatis atque, eius quidem. Magni, quidem?</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    imageContainer: {
        height: 580,
        width: WIDTH
    },
    image: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'cover'
    },
    textContainer: {
        paddingHorizontal: 10,
        marginTop: 50
    },
    title: {
        fontSize: SIZES.bigTitle,
        fontWeight: 'bold',
        marginBottom: 45
    }
})
