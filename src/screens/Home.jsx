import React, { useEffect } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image,
    Animated,
    Dimensions
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS, SIZES, WIDTH, HEIGTH } from '../constants/theme'

const { width, height } = Dimensions.get('window')

const data = [
    {
        key: 1,
        title: 'Robe en wax',
        image: 'https://kaymina.fr/wp-content/uploads/2020/11/179ce57854211c396a9a0bcfda3c4ac3-3-675x1024.jpg'
    },
    {
        key: 2,
        title: 'Robe de soirée',
        image: 'https://kaymina.fr/wp-content/uploads/2020/11/IMG_9-for-web.jpg'
    },
    {
        key: 3,
        title: 'Prêt a porter',
        image: 'https://kaymina.fr/wp-content/uploads/2020/11/IMG_4-for-web-2-675x1024.jpg'
    }
]

const Home = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            {/* content */}
            <Animated.FlatList
                data={data}
                keyExtractor={item => item.key.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width, height }}>
                            <Image style={{ flex: 1, resizeMode: 'cover', }} source={{ uri: item.image }} />
                        </View>
                    )
                }}
            />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({

})