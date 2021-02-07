import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import CarouselDetailScreen from '../components/CarouselDetailScreen'
import { WIDTH, HEIGTH, COLORS, SIZES } from '../constants/theme'


//fake image store
const images = [
    "https://i.insider.com/5e38494bab49fd614557fcb4?width=600&format=jpeg&auto=webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGOePybiowPHZrhC-mb4RvzssbKvIcPihfvg&usqp=CAU",
    "https://i.pinimg.com/originals/28/a9/c4/28a9c4af7067d946b8997e2d8f55cdbb.jpg"
]

const ProductDetails = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.imageContainer}>
                <CarouselDetailScreen images={images} />
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
