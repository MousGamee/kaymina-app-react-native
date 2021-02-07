import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, Animated, Image, Button, FlatList } from 'react-native'
import { WIDTH } from '../constants/theme'

const CarouselDetailScreen = ({ images }) => {

    const animation = useRef(new Animated.Value(0))
    const [currentImage, setCurrentImage] = useState(0)
    const handleAnimation = () => {
        let newCurrentImage = currentImage + 1

        Animated.spring(animation.current, {
            toValue: -(WIDTH * newCurrentImage),
            useNativeDriver: true
        }).start()
    }

    return (
        <>
            <FlatList
                data={images}
                keyExtractor={images => images.toString()}
                horizontal
                renderItem={({ item }) => {
                    return (
                        <Image style={styles.image} source={{ uri: item }} />

                    )
                }}
            />
        </>
    )
}

export default CarouselDetailScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image: {
        resizeMode: 'cover',
        height: 580,
        width: WIDTH
    }
})
