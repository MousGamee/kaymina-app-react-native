import { StyleSheet } from 'react-native'
import { WIDTH, HEIGTH, COLORS, SIZES } from '../constants/theme'

export const global = StyleSheet.create({
    // Big Title
    bigTitle: {
        color: COLORS.h1,
        fontSize: SIZES.bigTitle,
        fontWeight: 'bold',
    },
    btn: {
        height: 50,
        borderRadius: 30,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtn: {
        color: COLORS.white,
        fontSize: SIZES.btn
    }

})