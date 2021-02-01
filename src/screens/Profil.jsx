import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


const Profil = () => {
    return (
        <View style={styles.constainer}>
            <Text>Profil</Text>
        </View>
    )
}

export default Profil

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})
