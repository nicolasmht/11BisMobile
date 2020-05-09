import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import photosData from '../../data/photos.json'

export default class PhotosProScreen extends Component {
    render() {
        const photos = photosData
        const pro = photos.pro
        return (
            <View style={styles.container}>
                <View style={styles.container__photos__infos}>
                    <Text style={styles.container__photos__title}>Professionnel</Text>
                    <Text style={styles.container__photos__date}>11 janv. - 29 mars 2018</Text>
                </View>
                <ScrollView>
                    <View style={styles.container__photos}>
                        <View style={styles.container__photos__album}>
                            <View style={styles.container__photos__album__pers}>
                                <FlatList
                                    data={pro}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', margin: 2 }} onPress={() => this.props.navigation.navigate('PhotoVisuel', { id: item.id, name: 'pro' })}>
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
        backgroundColor: '#FFB99D'
    },

    container__photos__title: {
        marginBottom: 5,
        fontSize: 15,
        textAlign: 'left',
        fontWeight: 'bold'
    },

    container__photos__date: {
        marginBottom: 15,
        fontSize: 15,
        textAlign: 'left',
        opacity: 0.5
    },


    container__photos__album__img: {
        width: 118,
        height: 118,
        borderWidth: 1,
        borderColor: '#151C38'
    }
})
