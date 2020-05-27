import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import R from '../../res/R'
import MapView from 'react-native-maps'
import { mapStyle } from '../../constants/mapStyle.json'

export default class GoogleMapsScreen extends Component {
    constructor() {
        super()
        this.state = {
            text: <Text style={styles.container__googlemaps__text}>GOOGLE MAPS</Text>,
            latitude: 48.85251,
            longitude: 2.367301,
            latitudeDelta: 0.004,
            longitudeDelta: 0.004,
        }
    }

    loaderText() {
        return (
            this.state.text
        )
    }
    componentDidMount() {
        this.loading = setTimeout(() => {
            this.setState({
                text: null
            })
        }, 0)
    }
   
    onRegionHomeChange() {
        this.setState({
            latitude: 48.85251,
            longitude: 2.367301,
        })
    }

    onRegionWorkChange() {
        this.setState({
            latitude: 48.876168,
            longitude: 2.406027,
        })
    }

    
    googleMaps() {
        if (this.state.text != null) {
            return (
                <View>
                    {this.loaderText()}
                </View>
            )
        } else {
            return (
                <View style={styles.container__googlemaps__main}>
                    <MapView
                        // provider={MapView.PROVIDER_GOOGLE}
                        customMapStyle={mapStyle}
                        style={styles.container__googlemaps__main__view}
                        region={{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude,
                            latitudeDelta: this.state.latitudeDelta,
                            longitudeDelta: this.state.longitudeDelta,
                        }}
                    >
                        <MapView.Marker
                            coordinate={{
                                latitude: 48.85251,
                                longitude: 2.367301,
                            }}
                            title={'11 bis'}
                            description={'11bis, rue Jacques Coeur, 75004 Paris, France'}
                        />

                        <MapView.Marker
                            coordinate={{
                                latitude: 48.876168,
                                longitude: 2.406027,
                            }}
                            title={'Ecole des Gobelins'}
                            description={'249 Avenue Gambetta, 75020 Paris, France'}
                        />
                    </MapView>
                    <View style={styles.container__googlemaps__main__infos}>
                        <TouchableOpacity style={styles.container__googlemaps__main__infos__lieu} onPress={() => this.onRegionHomeChange()}>
                            <Image source={require('../../main/assets/icons/google_maps/home.png')} />
                            <View style={styles.container__googlemaps__main__infos__address}>
                                <Text style={styles.title}>Domicile</Text>
                                <Text style={styles.address} numberOfLines={1} ellipsizeMode='tail'>11 bis rue jacques coeur, 75004 Paris</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.container__googlemaps__main__infos__separator} />
                        <TouchableOpacity style={styles.container__googlemaps__main__infos__lieu} onPress={() => this.onRegionWorkChange()}>
                            <Image source={require('../../main/assets/icons/google_maps/work.png')} />
                            <View style={styles.container__googlemaps__main__infos__address}>
                                <Text style={styles.title}>Travail</Text>
                                <Text style={styles.address} numberOfLines={1} ellipsizeMode='tail'>249 Avenue Gambetta, 75020 Paris</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container__googlemaps}>
                    {this.googleMaps()}
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: R.colors.saumon
    },
    container__googlemaps: {
        width: '100%',
        height: '100%',
        marginTop: '15%',
        display: 'flex',
        justifyContent: 'center',
    },

    container__googlemaps__text: {
        display: 'flex',
        alignSelf: 'center',
        color: R.colors.saumon,
        fontSize: 0,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        opacity: 0.5,
    },

    container__googlemaps__main: {
        width: '100%',
        height: '100%',
    },

    container__googlemaps__main__view: {
        width: '100%',
        height: '78.5%',
        position:'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

    container__googlemaps__main__infos: {
        position: 'absolute',
        left: 10,
        bottom: '10%',
        right: 10,
        borderColor: R.colors.blue,
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },

    container__googlemaps__main__infos__lieu: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },

    container__googlemaps__main__infos__separator: {
        borderRightColor: R.colors.dark_blue,
        borderRightWidth: 1,
        marginRight: '3%',
        marginLeft: '-32%'
    },

    container__googlemaps__main__infos__address: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 10,
        paddingTop: 8,
    },

    title: {
        color: R.colors.dark_blue,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        fontSize: 15,
    },

    address: {
        width: '50%',
        color: R.colors.dark_blue,
        opacity: 0.5,
        fontFamily: R.fonts.Agrandir_Regular,
        fontSize: 15,
    },
})
