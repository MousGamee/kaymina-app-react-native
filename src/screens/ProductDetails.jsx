import React, { useRef } from 'react'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { StyleSheet, Text, View, Image, FlatList, Animated } from 'react-native'
import { WIDTH, HEIGHt, SIZES } from '../constants/theme'

const IMAGE_HEIGHt = HEIGHt * 0.75
const DOT_SIZE = 8
const DOT_SPACING = 8
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING


const ProductDetails = ({ navigation, route }) => {
    const item = route.params
    console.log(item)
    const scrollY = useRef(new Animated.Value(0)).current
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.imageContainer}>
                <Animated.FlatList
                    snapToInterval={IMAGE_HEIGHt}
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
                    {item.images.map((_, index) => {
                        return (
                            <View style={[styles.dot]} key={index} />
                        )
                    })}
                    <Animated.View style={[styles.dotIndicater, {
                        transform: [{
                            translateY: Animated.divide(scrollY, IMAGE_HEIGHt).interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, DOT_INDICATOR_SIZE]
                            })
                        }]
                    }]} />
                </View>
            </View>
            <BottomSheet
                initialSnapIndex={0}
                snapPoints={[HEIGHt - IMAGE_HEIGHt, HEIGHt]}
            >
                <BottomSheetScrollView
                    contentContainerStyle={{ padding: 10 }}
                >
                    <Text>{item.title}</Text>
                    <View>
                        <Text>{item.description}</Text>
                    </View>
                </BottomSheetScrollView>
            </BottomSheet>
        </View>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    imageContainer: {
        height: IMAGE_HEIGHt,
        overflow: 'hidden'
    },
    image: {
        width: WIDTH,
        height: IMAGE_HEIGHt,
        resizeMode: 'cover'
    },
    pagination: {
        position: 'absolute',
        top: IMAGE_HEIGHt / 2,
        left: 20
    },
    dot: {
        width: DOT_SIZE,
        height: DOT_SIZE,
        borderRadius: DOT_SIZE,
        marginBottom: DOT_SPACING,
        backgroundColor: "#000000"
    },
    dotIndicater: {
        width: DOT_INDICATOR_SIZE,
        height: DOT_INDICATOR_SIZE,
        borderRadius: DOT_INDICATOR_SIZE,
        borderWidth: 1,
        borderColor: "#FFFFFF",
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
