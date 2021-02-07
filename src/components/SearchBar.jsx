import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS, SIZES } from '../constants/theme'

const SearchBar = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder={'Recherche'} />
            </View>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        borderBottomColor: COLORS.secondary,
        borderBottomWidth: .2
    },
    input: {
        color: COLORS.dark,
        fontSize: SIZES.h2,
        flex: 1
    }
})
