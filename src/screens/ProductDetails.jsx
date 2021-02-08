import React, { useRef } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, FlatList, Animated } from 'react-native'
import CarouselDetailScreen from '../components/CarouselDetailScreen'
import { WIDTH, HEIGTH, COLORS, SIZES } from '../constants/theme'

const IMAGE_HEIGTH = HEIGTH * 0.75
const DOT_SIZE = 8
const DOT_SPACING = 8
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING
//fake image store
const images = [
    "https://i.etsystatic.com/15843670/r/il/b19426/2745189342/il_794xN.2745189342_guj2.jpg",
    "https://i.etsystatic.com/15843670/r/il/288d80/2788736527/il_794xN.2788736527_9mi2.jpg",
    "https://i.etsystatic.com/15843670/r/il/d35a86/2788736729/il_794xN.2788736729_hyov.jpg"
]

const ProductDetails = ({ navigation, route }) => {
    const item = route.params
    console.log(item)
    const scrollY = useRef(new Animated.Value(0)).current
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.imageContainer}>
                <Animated.FlatList
                    snapToInterval={IMAGE_HEIGTH}
                    decelerationRate="fast"
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    data={item.images}
                    keyExtractor={(_, index) => index.toString()}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true }
                    )}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <Image source={{ uri: item }} style={styles.image} />
                            </View>
                        )
                    }}
                />
                <View style={styles.pagination}>
                    {images.map((_, index) => {
                        return (
                            <View style={[styles.dot]} key={index} />
                        )
                    })}
                    <Animated.View style={[styles.dotIndicater, {
                        transform: [{
                            translateY: Animated.divide(scrollY, IMAGE_HEIGTH).interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, DOT_INDICATOR_SIZE]
                            })
                        }]
                    }]} />
                </View>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <View>
                    <Text style={styles.titleDescription}>Description</Text>
                    <Text style={styles.textDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vitae id itaque omnis voluptates molestias ab, corrupti harum placeat cupiditate consequuntur dolor, ullam optio perspiciatis atque, eius quidem. Magni, quidem?</Text>
                </View>
            </View>
        </View>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    imageContainer: {
        height: IMAGE_HEIGTH,
        overflow: 'hidden'
    },
    image: {
        width: WIDTH,
        height: IMAGE_HEIGTH,
        resizeMode: 'cover'
    },
    pagination: {
        position: 'absolute',
        top: IMAGE_HEIGTH / 2,
        left: 20
    },
    dot: {
        width: DOT_SIZE,
        height: DOT_SIZE,
        borderRadius: DOT_SIZE,
        marginBottom: DOT_SPACING,
        backgroundColor: "#333"
    },
    dotIndicater: {
        width: DOT_INDICATOR_SIZE,
        height: DOT_INDICATOR_SIZE,
        borderRadius: DOT_INDICATOR_SIZE,
        borderWidth: 1,
        borderRightColor: "#333",
        position: 'absolute',
        top: -DOT_SIZE / 2,
        left: -DOT_SIZE / 2
    },
    textContainer: {
        paddingHorizontal: 15,
        marginTop: 50
    },
    title: {
        fontSize: SIZES.bigTitle,
        fontWeight: 'bold',
        marginBottom: 45
    },
    titleDescription: {
        fontSize: SIZES.h2
    }
})
