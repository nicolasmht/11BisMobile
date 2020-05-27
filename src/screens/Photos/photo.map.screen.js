import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import R from '../../res/R'

export default class PhotoMapScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.container__photo} source={require('../../main/assets/images/photos/map.png')} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: R.colors.saumon,
    },

    container__photo: {
        width: '100%',
        height: '100%',
        padding: 1,
        borderWidth: 1,
        borderColor: R.colors.dark_blue,
    },
})
