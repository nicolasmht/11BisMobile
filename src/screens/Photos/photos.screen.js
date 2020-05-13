import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, FlatList }from 'react-native'
import photosData from '../../data/photos.json'
import R from '../../res/R'

export default class PhotosScreen extends Component {
    render() {
        const photos = photosData
        const recents = photos.recents
        const pro = photos.pro
        const favoris = photos.favoris
        const screenshot = photos.screenshot
        const personnes = photos.personnes
        const masked = photos.masked
        const deleted = photos.deleted

        const photo_recents = recents[0].photo
        const photo_pro = pro[0].photo
        const photo_favoris = favoris[0].photo
        const photo_screenshot = screenshot[0].photo

        // const personne = recents.map(item => item.personne)
        // const result_personne = personne.filter(personne => personne == true);

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.container__photos}>
                        <Text style={styles.container__photos__title}>Albums</Text>
                        <View style={styles.container__photos__border}/>
                        <Text style={styles.container__photos__subtitle}>Mes albums</Text>
                        <View style={styles.container__photos__album}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('PhotosRecents')}>
                                <Image style={styles.container__photos__album__img} source={{ uri: photo_recents }} />
                                <Text style={styles.container__photos__album__title}>Récents</Text>
                                <Text style={styles.container__photos__album__number}>{recents.length}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('PhotosPro')}>
                                <Image style={styles.container__photos__album__img} source={{ uri: photo_pro }} />
                                <Text style={styles.container__photos__album__title}>Professionnel</Text>
                                <Text style={styles.container__photos__album__number}>{pro.length}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('PhotosFavoris')}>
                                <Image style={styles.container__photos__album__img} source={{ uri: photo_favoris }} />
                                <Text style={styles.container__photos__album__title}>Favoris</Text>
                                <Text style={styles.container__photos__album__number}>{favoris.length}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('PhotosScreenshot')}>
                                <Image style={styles.container__photos__album__img} source={{ uri: photo_screenshot }} />
                                <Text style={styles.container__photos__album__title}>Screenshot</Text>
                                <Text style={styles.container__photos__album__number}>{screenshot.length}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container__photos__border} />
                        <Text style={styles.container__photos__subtitle}>Personnes et lieux</Text>
                        <View style={styles.container__photos__album}>
                            <TouchableOpacity style={styles.container__photos__album__pers} onPress={() => this.props.navigation.navigate('PhotosPersonnes')}>
                                <FlatList
                                    data={personnes}
                                    renderItem={({ item }) => (
                                        <View style={{ display: 'flex', flexDirection: 'column', margin: 1}}>
                                            <Image style={styles.container__photos__album__pers__miniature} source={{ uri: item.photo }} />
                                        </View>
                                    )} 
                                    keyExtractor={item => item.id}
                                    numColumns={2}
                                    horizontal={false}
                                />
                                <Text style={styles.container__photos__album__title}>Personnes</Text>
                                <Text style={styles.container__photos__album__number}>{personnes.length}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.container__photos__album__img} source={require('../../main/assets/images/photos/photo_lieux.png')} />
                                <Text style={styles.container__photos__album__title}>Lieux</Text>
                                <Text style={styles.container__photos__album__number}>{recents.length}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container__photos__border} />
                        <Text style={styles.container__photos__subtitle}>Autres Albums</Text>
                        <View style={styles.container__photos__other_albums}>
                            <TouchableOpacity style={styles.container__photos__other_albums__line} onPress={() => this.props.navigation.navigate('PhotosMasked')}>
                                <View style={styles.container__photos__other__albums__infos}>
                                    <Image source={require('../../main/assets/icons/icon_eyeslash.png')} />
                                    <Text style={styles.container__photos__other__albums__infos__title}>Masqués</Text>
                                </View>
                                <View style={styles.container__photos__other__albums__infos}>
                                    <Text style={styles.container__photos__other__albums__infos__number}>{masked.length}</Text>
                                    <Text style={styles.container__photos__other__albums__infos__chevron}>> </Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.container__photos__border} />
                            <TouchableOpacity style={styles.container__photos__other_albums__line} onPress={() => this.props.navigation.navigate('PhotosDeleted')}>
                                <View style={styles.container__photos__other__albums__infos}>
                                    <Image source={require('../../main/assets/icons/icon_eyeslash.png')} />
                                    <Text style={styles.container__photos__other__albums__infos__title}>Supprimés récemment</Text>
                                </View>
                                <View style={styles.container__photos__other__albums__infos}>
                                    <Text style={styles.container__photos__other__albums__infos__number}>{deleted.length}</Text>
                                    <Text style={styles.container__photos__other__albums__infos__chevron}>> </Text>
                                </View>
                            </TouchableOpacity>
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
        marginTop: '-2%',
        padding: 24,
    },

    container__photos__title: {
        fontSize: 20,
        textAlign: 'left',
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        color: R.colors.dark_blue,
    },
    
    container__photos__subtitle: {
        marginTop: 12,
        marginBottom: 12,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_Regular,
        color: R.colors.dark_blue,
        textAlign: 'left',
    },

    container__photos__album: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },

    container__photos__album__img: {
        width: 175,
        height: 175,
        borderWidth: 1,
        borderColor: R.colors.dark_blue,
    },

    container__photos__album__pers__miniature: {
        width: 88,
        height: 88,
        borderWidth: 1, 
        borderColor: R.colors.dark_blue,
    },

    container__photos__album__title: {
        paddingTop: 8,
        fontSize: 12,
        fontFamily: R.fonts.Agrandir_Regular,
        color: R.colors.dark_blue,
    },
    
    container__photos__album__number: {
        paddingBottom: 10,
        fontSize: 12,
        opacity: 0.5,
        fontFamily: R.fonts.Agrandir_Regular,
        color: R.colors.dark_blue,
    },

    container__photos__other__albums: {
        display: 'flex',
        flexDirection: 'column',
    },

    container__photos__other_albums__line: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 5,
    },

    container__photos__other__albums__infos: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'baseline'
    },

    container__photos__other__albums__infos__title: {
        paddingLeft: 10,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_Regular,
        color: R.colors.blue,
    },

    container__photos__other__albums__infos__number: {
        fontSize: 12,
        opacity: 0.5,
        fontFamily: R.fonts.Agrandir_Regular,
        color: R.colors.dark_blue,
    },

    container__photos__other__albums__infos__chevron: {
        paddingLeft: 10,
        fontSize: 12,
        fontFamily: R.fonts.Agrandir_Regular,
        color: R.colors.grey,
    },

    container__photos__border: {
        width: '100%',
        height: 1,
        marginTop: 6,
        backgroundColor: R.colors.dark_blue,
        opacity: 0.2
    },

})
