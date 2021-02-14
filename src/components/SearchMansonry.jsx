import React, { useRef, useEffect } from 'react'
import Mansonry from 'react-native-masonry-layout'
import { StyleSheet, Text, View } from 'react-native'
import { SIZES, WIDTH } from '../constants/theme'
import { data } from '../../data'

const SearchMansonry = () => {
    const ref = useRef()

    useEffect(() => {
        ref.current.addItems(data.image)
    }, [])

    return (
        <Mansonry
            ref={ref}
            columns={3}
            style={{ flex: 1, width: WIDTH }}
            contentContainerStyle={{ padding: 2 }}
            renderItem={({ item }) => {
                return (
                    <Image source={{ uri: item }} style={{ flex: 1 }} />
                )
            }}
        />
    )
}

export default SearchMansonry

const styles = StyleSheet.create({})
