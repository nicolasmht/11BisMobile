import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import spotifyData from '../../data/spotify.json'
import R from '../../res/R'
import Sound from 'react-native-sound'

export default class SpotifyArtistesScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            play: false,
            isPlaying: false,
            soundId: 0,
            progress: 0,
            isNext: false
        }
        this.audioStatePlay = "play"
        this.audioStatePause = "pause"
        this.audioStateStop = "stop"
        this.duration = 1
        this.audioState = ""
        this.enable = true
        this.audioPlayIcon = require('../../main/assets/icons/spotify/icon_play.png')
        this.audioStopIcon = require('../../main/assets/icons/spotify/icon_stop.png')
        this.data_all = spotifyData.all
        this.data_artistes = spotifyData.artistes
    }

    componentWillUnmount() {
        this.clearSound()
    }

    componentDidMount() {
        this.setState({ play: true });
    }

    changePlayState() {
        if (!this.enable) return
        if (this.state.isPlaying) {
            this.setState({ isPlaying: false })
            this.pause()
        } else {
            this.setState({ isPlaying: true })
            this.play()
        }
        this.enable = false
        setTimeout(() => {
            this.enable = true
        }, 500)

    }

    next() {
        this.setState({
            soundId: ++this.state.soundId,
            isNext: true
        })
        this.play()
    }

    play() {
        if (this.whoosh && !this.state.isPlaying) {
            this.whoosh.getCurrentTime((seconds) => {
                this.whoosh.setCurrentTime(seconds)
                this.whoosh.play((success) => {
                    if (success) {
                        if (this.data_all[this.state.soundId].id === this.data_all.length - 1) {
                            this.stop()
                        } else {
                            this.next()
                        }
                    }
                })
                this.audioState = this.audioStatePlay
                this.playProgress()
            })
            return
        }
        this.whoosh = new Sound(this.data_all[this.state.soundId].sound, null, (error) => {
            if (!error) {
                this.duration = this.whoosh.getDuration()
                this.whoosh.play((success) => {
                    if (success) {
                        if (this.data_all[this.state.soundId].id === this.data_all.length - 1) {
                            this.stop()
                        } else {
                            this.next()
                        }
                    }
                })
                this.audioState = this.audioStatePlay
                this.playProgress()
            }
        })
    }

    pause() {
        this.audioState = this.audioStatePause
        if (!this.whoosh) return
        this.whoosh.pause()
        this.clearTimer()
    }

    stop() {
        this.audioState = this.audioStateStop
        if (!this.whoosh) return
        this.whoosh.stop()
        this.whoosh.release()
        this.whoosh = null
        this.clearTimer()
        this.setState({ isPlaying: false })
    }

    playProgress() {
        if (!this.state.isNext) {
            this.timer = setInterval(() => {
                this.whoosh.getCurrentTime((seconds) => {
                    if (this.duration >= seconds && this.audioState === this.audioStatePlay) {
                        this.setState({ progress: seconds })
                    } else if (this.audioState === this.audioStateStop) {
                        this.setState({ progress: this.state.progress })
                    }
                })
            }, 0)
        }
    }

    clearTimer() {
        if (this.timer) {
            clearInterval(this.timer)
            this.timer = null
        }
    }

    clearSound() {
        this.stop()
        if (this.timer) {
            clearInterval(this.timer)
            this.timer = null
        }
        this.setState({
            soundId: 0
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../main/assets/fond/Points.png')} style={styles.backgroundImage}>
                    <View style={styles.container__spotify__main}>
                        <Text style={styles.container__spotify__title}>Musique</Text>
                        <View style={styles.container__spotify__category}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SpotifyPlaylist')}>
                                <Text style={styles.container__spotify__subtitle}>Playlists</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.container__spotify__subtitle__selected}>Artistes</Text>
                                <View style={styles.container__spotify__border} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.container__spotify__subtitle}>Abums</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView>
                        <View style={styles.container__spotify}>
                            <View style={styles.container__spotify__list}>
                                <FlatList
                                    data={this.data_artistes}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item }) => (
                                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: 8 }}>
                                            <Image style={styles.container__spotify__list__album__cover} source={{ uri: item.photo }} />
                                            <Text style={styles.container__spotify__list__album__title}>{item.artiste}</Text>
                                        </View>
                                    )}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
                <View style={styles.container__spotify__sound}>
                    <ImageBackground source={require('../../main/assets/fond/Points.png')} style={styles.backgroundImage}>
                        <View style={{ zIndex: 1, width: '114%', height: '12%', marginLeft: '-7%', borderWidth: 2, borderColor: '#151C38' }} />
                        <View style={{ width: `${((114 * this.state.progress) / this.data_all[this.state.soundId].duration)}%`, height: '8%', marginLeft: '-6%', marginTop: '-2%', backgroundColor: R.colors.saumon }} />
                        <View style={styles.container__spotify__sound__player}>
                            <View style={styles.container__spotify__sound__infos}>
                                <Image style={styles.container__spotify__sound__cover} source={require('../../main/assets/icons/spotify/mini_rect.png')} />
                                <View style={styles.container__spotify__sound__data}>
                                    <View style={styles.container__spotify__sound__artist}>
                                        <Text style={styles.container__spotify__sound__title}>{this.data_all[this.state.soundId].title} • </Text><Text style={styles.container__spotify__sound__name}>{this.data_all[this.state.soundId].name}</Text>
                                    </View>
                                    <View style={styles.container__spotify__sound__appareil}>
                                        <Image style={styles.container__spotify__sound__appareil__icon} source={require('../../main/assets/icons/spotify/icon_appareils_dispo.png')} />
                                        <Text style={styles.container__spotify__sound__appareil__text}>Appareils disponibles</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => this.changePlayState()}>
                                <Image source={this.state.isPlaying ? this.audioStopIcon : this.audioPlayIcon} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
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
        width: '88.5%',
        display: 'flex',
        marginTop: '12%',
        marginLeft: '5.8%',

    },

    container__spotify__title: {
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        color: R.colors.saumon,
        fontSize: 30,
    },

    container__spotify__category: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 30,
        marginLeft: '-3%',

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
        width: '100%',
        height: '110%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: '37%',
        marginLeft: '-2%',

    },

    container__spotify__list__album: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
    },

    container__spotify__list__album__cover: {
        width: 80,
        height: 80,
        borderColor: R.colors.dark_blue,
        borderWidth: 1,
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
        width: '65%',
        color: R.colors.saumon,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        alignSelf: 'center',
        paddingLeft: 10,
    },

    container__spotify__list__album__infos__icon: {
        marginRight: 5,
    },

    container__spotify__sound: {
        width: '88%',
        height: '9%',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '6%',
        bottom: -10,
        backgroundColor: R.colors.blue,
    },

    container__spotify__sound__player: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    container__spotify__sound__infos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    container__spotify__sound__data: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },

    container__spotify__sound__cover: {
        marginRight: 10,
        marginLeft: -25,
    },

    container__spotify__sound__artist: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'baseline',
    },

    container__spotify__sound__title: {
        color: R.colors.saumon,
        fontSize: 13,
        fontFamily: R.fonts.Agrandir_Regular,
    },

    container__spotify__sound__name: {
        color: R.colors.saumon,
        fontSize: 13,
        fontFamily: R.fonts.Agrandir_Regular,
        opacity: 0.5,
    },

    container__spotify__sound__appareil: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'baseline',
    },

    container__spotify__sound__appareil__text: {
        color: R.colors.saumon,
        fontSize: 13,
        fontFamily: R.fonts.Agrandir_Regular,
        marginLeft: 10,
    },

    container__spotify__list__album__infos__text: {
        color: R.colors.saumon,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_Regular,
        opacity: 0.5,
        marginTop: 8
    },
})