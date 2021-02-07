import React from 'react'
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS, SIZES, WIDTH, HEIGTH } from '../constants/theme'

const RegisterScreen = ({ navigation }) => {
    return (
        <ImageBackground style={styles.bkg} source={require('../../assets/images/image-6.jpg')}>
            <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Inscription</Text>
                <View style={styles.logoContainer}></View>
                <Text style={styles.formSubTitle}>Ou avec votre mail!</Text>

                <View style={styles.formInput}>
                    <Icon name="account-outline" size={SIZES.icons} color={COLORS.secondary} style={styles.icon} />
                    <TextInput style={styles.input} placeholder={"Email"} />
                </View>

                <View style={styles.formInput}>
                    <Icon name="account-outline" size={SIZES.icons} color={COLORS.secondary} style={styles.icon} />
                    <TextInput style={styles.input} placeholder={"Confirmez votre Email"} />
                </View>

                <View style={styles.formInput}>
                    <Ionicons name="lock-closed-outline" size={SIZES.icons} color={COLORS.secondary} style={styles.icon} />
                    <TextInput style={styles.input} placeholder={'Mot de passe'} />
                </View>

                <View style={styles.formInput}>
                    <Ionicons name="lock-closed-outline" size={SIZES.icons} color={COLORS.secondary} style={styles.icon} />
                    <TextInput style={styles.input} placeholder={'Confirmez votre mot de passe'} />
                </View>

                <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>S'inscrire</Text></TouchableOpacity>
                <View style={styles.createAccountSection}>
                    <Text style={styles.createAccountText}>Déja inscris ? </Text>
                    <TouchableOpacity style={styles.createAccountBtn} onPress={() => navigation.navigate('login')}>
                        <Text style={styles.createAccountBtnText}>Se connecter !</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ImageBackground>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    bkg: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        backgroundColor: '#ffffff',
        width: WIDTH - 40,
        paddingHorizontal: 15,
        paddingVertical: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formTitle: {
        color: COLORS.h1,
        fontSize: SIZES.bigTitle,
        fontWeight: 'bold',
        marginBottom: 10
    },
    logoContainer: {
        marginBottom: 10

    },
    formSubTitle: {
        fontSize: SIZES.h1,
        color: COLORS.h2,
        marginBottom: 10

    },
    formInput: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: COLORS.secondary,
        alignItems: 'center',
        paddingLeft: 15,
        paddingVertical: 5,
        marginBottom: 15
    },
    icon: {
        marginRight: 10
    },
    input: {
        flex: 1,
        height: '100%'
    },
    btn: {
        width: '100%',
        height: 50,
        borderRadius: 30,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    btnText: {
        color: COLORS.white,
        fontSize: SIZES.btn,
        fontWeight: 'bold'
    },
    createAccountSection: {
        flexDirection: 'row'
    },
    createAccountText: {
        fontSize: SIZES.text
    },
    createAccountBtnText: {
        fontSize: SIZES.text,
        color: COLORS.primary
    }

})
