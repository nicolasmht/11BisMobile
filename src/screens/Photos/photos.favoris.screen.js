import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import photosData from '../../data/photos.json'

export default class PhotosFavorisScreen extends Component {
    render() {
        const photos = photosData
        const favoris = photos.favoris
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.container__photos}>
                        <View style={styles.container__photos__album}>
                            <View style={styles.container__photos__album__pers}>
                                <FlatList
                                    data={favoris}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', margin: 2 }} onPress={() => this.props.navigation.navigate('PhotoVisuel', { id: item.id, name: 'favoris' })}>
                                            <Image style={styles.container__photos__album__img} source={{ uri: item.photo }} />
                                        </TouchableOpacity>
                                    )}
                                    keyExtractor={item => item.id}
                                    numColumns={3}
                                    horizontal={false}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
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
        height: '100%',
        padding: 24,
    },

    container__photos__album__img: {
        width: 118,
        height: 118,
        borderWidth: 1,
        borderColor: '#151C38'
    }
})
