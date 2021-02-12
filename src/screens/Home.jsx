import React, { useRef, useEffect, useState, useCallback } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image,
    Animated,
    Dimensions,
    findNodeHandle
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS, SIZES } from '../constants/theme'

const { width, height } = Dimensions.get('window')

const data = [
    {
        key: 1,
        title: 'Robe en wax',
        image: 'https://kaymina.fr/wp-content/uploads/2020/11/179ce57854211c396a9a0bcfda3c4ac3-3-675x1024.jpg',
        images: [
            'https://kaymina.fr/wp-content/uploads/2020/11/179ce57854211c396a9a0bcfda3c4ac3-3-675x1024.jpg',
            'https://kaymina.fr/wp-content/uploads/2020/11/179ce57854211c396a9a0bcfda3c4ac3-3-675x1024.jpg',
        ],
        ref: React.createRef()
    },
    {
        key: 2,
        title: 'Robe de soirée',
        image: 'https://kaymina.fr/wp-content/uploads/2020/11/IMG_9-for-web.jpg',
        images: [
            'https://kaymina.fr/wp-content/uploads/2020/11/IMG_9-for-web.jpg',
            'https://kaymina.fr/wp-content/uploads/2020/11/IMG_9-for-web.jpg',


        ],
        ref: React.createRef()

    },
    {
        key: 3,
        title: 'Prêt a porter',
        image: 'https://kaymina.fr/wp-content/uploads/2020/11/IMG_4-for-web-2-675x1024.jpg',
        images: [
            'https://kaymina.fr/wp-content/uploads/2020/11/IMG_4-for-web-2-675x1024.jpg',
            'https://kaymina.fr/wp-content/uploads/2020/11/IMG_4-for-web-2-675x1024.jpg',
        ],
        ref: React.createRef()
    }
]

const Indicator = ({ measure, scrollX }) => {
    const inputRange = data.map((_, i) => i * width)

    const indicatorWidth = scrollX.interpolate({
        inputRange,
        outputRange: measure.map((m) => m.width)
    })

    const translateX = scrollX.interpolate({
        inputRange,
        outputRange: measure.map((m) => m.x)
    })
    return (
        <Animated.View style={{
            position: 'absolute',
            height: 4,
            width: indicatorWidth,
            left: 0,
            backgroundColor: COLORS.white,
            bottom: -10,
            transform: [{
                translateX
            }]

        }}>
        </Animated.View>
    )
}

const Tab = React.forwardRef(({ item, onItemPress }, ref) => {
    return (
        <TouchableOpacity onPress={onItemPress}>
            <View ref={ref}>
                <Text style={{
                    color: '#ffffff',
                    fontSize: 35 / data.length,
                    fontWeight: '800',
                    textTransform: 'uppercase'
                }}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
})

const Tabs = ({ data, scrollX, onItemPress }) => {
    const [measure, setMeasure] = useState([])
    const containerRef = React.useRef()
    useEffect(() => {
        let m = []
        data.forEach(item => {
            item.ref.current.measureLayout(
                containerRef.current,
                (x, y, width, height) => {
                    m.push({
                        x, y, width, height
                    })
                    if (m.length === data.length) {
                        setMeasure(m)
                    }
                }
            )
        })
    }, [])

    console.log(measure)
    return (
        <View style={{ position: 'absolute', top: 70, width }}>
            <View
                ref={containerRef}
                style={{
                    justifyContent: 'space-evenly',
                    flex: 1,
                    flexDirection: 'row',
                }}>
                {
                    data.map((item, index) => {
                        return (
                            <Tab key={item.key} item={item} ref={item.ref} onItemPress={() => onItemPress(index)} />

                        )
                    })
                }
            </View>
            { measure.length > 0 && <Indicator measure={measure} scrollX={scrollX} />}
        </View>
    )
}

const Home = ({ navigation }) => {

    const scrollX = useRef(new Animated.Value(0)).current
    const ref = useRef()
    const onItemPress = useCallback(itemIndex => {
        ref?.current?.scrollToOffset({
            offset: itemIndex * width
        })
    })

    return (
        <View style={{ flex: 1 }}>
            {/* content */}
            <Animated.FlatList
                ref={ref}
                data={data}
                keyExtractor={item => item.key.toString()}
                horizontal
                pagingEnabled
                bounces={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width, height }}>
                            <Image style={{ flex: 1, resizeMode: 'cover', }} source={{ uri: item.image }} />
                            <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0,.3)' }]} />
                        </View>
                    )
                }}
            />
            <Tabs scrollX={scrollX} data={data} onItemPress={onItemPress} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({

})