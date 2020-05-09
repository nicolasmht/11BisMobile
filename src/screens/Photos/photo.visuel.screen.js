import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import photosData from '../../data/photos.json'

export default class PhotVisuelScreen extends Component {
    render() {
        const photos = photosData
        const recents = photos.recents

        const result_photo = recents.find(recents => recents.id === this.props.route.params.id);
        console.log(recents)
        console.log(result_photo)
        
        return (
            <View style={styles.container}>
                <View style={styles.container__photos}>
                    <View style={styles.container__photos__album}>
                        <View style={styles.container__photos__album__pers}>
                            {/* <Text>{this.props.route.params.id}</Text> */}
                            <Image style={styles.container__photos__album__img} source={{ uri: result_photo.photo }} />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#FFB99D',
    },

    container__photos: {
        width: '100%',
        height: '95%',
        marginTop: '5%',
        padding: 24,
    },

    container__photos__album__img: {
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderColor: '#151C38'
    }
})
