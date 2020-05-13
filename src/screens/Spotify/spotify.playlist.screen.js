import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Image } from 'react-native'
// import spotifyData from '../../data/spotify.json'
import R from '../../res/R'

export default class SpotifyPlaylistScreen extends Component {
    constructor() {
        super()
        this.state = {
            image: <Image style={styles.container__spotify__logo} source={require('../../main/assets/icons/spotify/logo.png')} />,
        }
        this.state = { count: 0 };
        this.incrementCount = this.incrementCount.bind(this)
    }
    loaderImg() {
        return (
            this.state.image
        )
    }
    componentDidMount() {
        this.loading = setTimeout(() => {
            this.setState({
                image: null,
            })
        }, 10)

    }
    incrementCount() {
        this.toto = setInterval(() => {
            this.setState({
                count: ++this.state.count
            })
        },1000)
        // const data = spotifyData
        // console.log(data)
    }

    spotify() {
        if (this.state.image != null) {
            return (
                <View>
                    {this.loaderImg()}
                </View>
            )
        } else {
            return (
                <View style={styles.container__spotify__main}>
                    <Text style={styles.container__spotify__title}>Musique</Text>
                    <View style={styles.container__spotify__category}>
                        <TouchableOpacity>
                            <Text style={styles.container__spotify__subtitle__selected}>Playlists</Text>
                            <View style={styles.container__spotify__border}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.container__spotify__subtitle}>Artistes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.container__spotify__subtitle}>Abums</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container__spotify__list}>
                        <View style={styles.container__spotify__list__album}>
                            <Image source={require('../../main/assets/icons/spotify/rect.png')}/>
                            <View style={styles.container__spotify__list__album__text}>
                                <Text style={styles.container__spotify__list__album__title}>Titres likés</Text>
                                <View style={styles.container__spotify__list__album__infos}>
                                    <Image style={styles.container__spotify__list__album__infos__icon} source={require('../../main/assets/icons/spotify/icon_arrow-circle-down.png')}/>
                                    <Text style={styles.container__spotify__list__album__infos__text}>54 titres</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.container__spotify__list__album}>
                            <Image source={require('../../main/assets/icons/spotify/rect.png')} />
                            <View style={styles.container__spotify__list__album__text}>
                                <Text style={styles.container__spotify__list__album__title}>Groove</Text>
                                <View style={styles.container__spotify__list__album__infos}>
                                    <Image style={styles.container__spotify__list__album__infos__icon}  source={require('../../main/assets/icons/spotify/icon_arrow-circle-down.png')} />
                                    <Text style={styles.container__spotify__list__album__infos__text}>par beyonce</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.container__spotify__list__album}>
                            <Image source={require('../../main/assets/icons/spotify/rect.png')} />
                            <View style={styles.container__spotify__list__album__text}>
                                <Text style={styles.container__spotify__list__album__title}>RAP US</Text>
                                <View style={styles.container__spotify__list__album__infos}>
                                    <Text style={styles.container__spotify__list__album__infos__text}>par beyonce</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.container__spotify__sound}>
                        <View style={{ zIndex: 1, width: '114%', height: '10%', marginLeft: '-7%', borderWidth: 2, borderColor: '#151C38'}} />
                        <View style={{ width: `${this.state.count}%`, height: '10%', marginLeft: '-7%', marginTop: -12, backgroundColor:R.colors.saumon}} />
                        <TouchableOpacity onPress={() => this.incrementCount()}><Text>play</Text></TouchableOpacity>
                    </View>
                </View>
            )
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../main/assets/fond/Points.png')} style={styles.backgroundImage}>
                    <View style={styles.container__spotify}>
                        {this.spotify()}
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: R.colors.blue
    },
    backgroundImage: {
        width: '100%',
        height: '100%'
    },

    
    container__spotify: {
        width: '100%',
        height: '100%',
        paddingTop: '12%',
        paddingLeft: 24,
        paddingRight: 24,
        display: 'flex',
        justifyContent: 'center',
    },

    container__spotify__logo: {
        display: 'flex',
        alignSelf: 'center',
        marginTop: '-10%',
    },

    container__spotify__main: {
        width: '100%',
        height: '100%',
        display: 'flex',
    },

    container__spotify__title: {
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        color: R.colors.saumon,
        fontSize: 30,
        fontWeight: '900'
    },

    container__spotify__category: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 30,
    },

    container__spotify__subtitle: {
        color: R.colors.saumon,
        fontSize: 20,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        opacity: 0.5
    },

    container__spotify__subtitle__selected: {
        color: R.colors.saumon,
        fontSize: 20,
        fontFamily: R.fonts.Agrandir_GrandHeavy,

    },
    
    container__spotify__border: {
        borderBottomWidth: 3,
        borderBottomColor: R.colors.saumon,
    },

    container__spotify__list: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: '10%',
    },
    container__spotify__list__album: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
    },
    container__spotify__list__album__text: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 20,
    },

    container__spotify__list__album__infos: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        paddingTop: 5,
    },

    container__spotify__list__album__title: {
        color: R.colors.saumon,
        fontSize: 20,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        alignSelf: 'flex-start',
    },

    container__spotify__list__album__infos__icon: {
        marginRight: 5,
    },

    container__spotify__list__album__infos__text: {
        color: R.colors.saumon,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_Regular,
        opacity: 0.5,
        marginTop: 8
    },
})