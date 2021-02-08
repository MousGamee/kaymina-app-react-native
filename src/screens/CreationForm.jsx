import React, { useState } from 'react'
import { StyleSheet, Text, Touchable, View, TouchableOpacity } from 'react-native'

const CreationForm = () => {
    const [step, setStep] = useState(0)
    return (
        <View>
            <Text>Formulaire de creation</Text>
            <TouchableOpacity></TouchableOpacity>
        </View>
    )
}

export default CreationForm

const styles = StyleSheet.create({})
