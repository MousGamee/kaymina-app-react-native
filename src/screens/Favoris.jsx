import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import FavorisProductItem from '../components/FavorisProductItem'

const Favoris = ({ navigation }) => {
    return (
        <ScrollView>
            <FavorisProductItem />
            <FavorisProductItem />
            <FavorisProductItem />
            <FavorisProductItem />
            <FavorisProductItem />
            <FavorisProductItem />
        </ScrollView>
    )
}

export default Favoris

const styles = StyleSheet.create({

})
