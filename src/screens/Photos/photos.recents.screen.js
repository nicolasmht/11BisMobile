import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import photosData from '../../data/photos.json'
import R from '../../res/R'

export default class PhotosRecentsScreen extends Component {
    render() {
        const photos = photosData
        const recents = photos.recents
        return (
            <View style={styles.container}>
                <ScrollView contentOffset={{ y: 600 }}>
                    <View style={styles.container__photos}>
                        <View style={styles.container__photos__album}>
                            <View style={styles.container__photos__album__pers}>
                                <FlatList
                                    data={recents}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', margin: 2 }} onPress={() => this.props.navigation.navigate('PhotoVisuel', { id: item.id, name: 'recents', format: item.format })}>
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
        backgroundColor: R.colors.saumon
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
        borderColor: R.colors.dark_blue,
    }
})
