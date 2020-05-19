import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import photosData from '../../data/photos.json'
import R from '../../res/R'

export default class PhotosAlbum1Screen extends Component {
    render() {
        const photos = photosData
        const plantes = photos.plantes
        return (
            <View style={styles.container}>
                <View style={styles.container__photos__infos}>
                    <Text style={styles.container__photos__title}>Plantes</Text>
                    <Text style={styles.container__photos__date}>11 janv. - 29 mars 2018</Text>
                </View>
                <ScrollView>
                    <View style={styles.container__photos}>
                        <View style={styles.container__photos__album}>
                            <View style={styles.container__photos__album__pers}>
                                <FlatList
                                    data={plantes}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', margin: 2 }} onPress={() => this.props.navigation.navigate('PhotoVisuel', { id: item.id, name: 'plantes', format: item.format })}>
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
        marginTop: '12%',
        padding: 24,
    },

    container__photos__infos: {
        width: '100%',
        height: '10%',
        position: 'absolute',
        top: 0,
        zIndex: 1,
        paddingLeft: 24,
        paddingTop: 15,
        backgroundColor: R.colors.saumon
    },

    container__photos__title: {
        fontSize: 15,
        textAlign: 'left',
        fontFamily: R.fonts.Agrandir_TextBold,
        color: R.colors.dark_blue,
    },

    container__photos__date: {
        fontSize: 15,
        textAlign: 'left',
        fontFamily: R.fonts.Agrandir_Regular,
        color: R.colors.dark_blue,
        opacity: 0.5,
    },


    container__photos__album__img: {
        width: 118,
        height: 118,
        borderWidth: 1,
        borderColor: R.colors.dark_blue
    }
})
