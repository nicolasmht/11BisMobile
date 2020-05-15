import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Image } from 'react-native'
import spotifyData from '../../data/spotify.json'
import R from '../../res/R'
import Sound from 'react-native-sound'

export default class SpotifyPlaylistScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: <Image style={styles.container__spotify__logo} source={require('../../main/assets/icons/spotify/logo.png')} />,
            count: 0,
            play: false,
            visible: this.props.visible,
            isPlaying: false,
            progress: 0,
        }
        this.audioStatePlay = "play"
        this.audioStatePause = "pause"
        this.audioStateStop = "stop"
        this.duration = 1
        this.audioState = ""
        this.enable = true
        this.audioPlayIcon = require('../../main/assets/icons/spotify/icon_play.png')
        this.audioStopIcon = require('../../main/assets/icons/spotify/icon_stop.png')
        this.data = spotifyData
    }

    componentWillUnmount() {
        this.clearSound()

    }

    componentDidMount() {
        this.loading = setTimeout(() => {
            this.setState({
                image: null,
            })
        }, 10)
        this.setState({ play: true });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible) {
            this.setState({ isPlaying: true, ...nextProps })
            this.play()
        } else {
            this.setState(nextProps)
        }
    }

    showModal(visible) {
        if (!visible) {
            this.stop()
        }
        this.setState({ visible: visible })
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

    play() {
        if (this.whoosh && !this.state.isPlaying) {
            this.whoosh.getCurrentTime((seconds) => {
                this.whoosh.setCurrentTime(seconds)
                this.whoosh.play((success) => {
                    if (success) {
                        this.stop()
                    }
                })
                this.audioState = this.audioStatePlay
                this.playProgress()
            })
            return
        }
        this.whoosh = new Sound(this.data[0].sound, null, (error) => {
            if (!error) {
                this.duration = this.whoosh.getDuration()
                this.whoosh.play((success) => {
                    if (success) {
                        this.stop()
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
        this.timer = setInterval(() => {
            this.whoosh.getCurrentTime((seconds) => {
                if (this.duration >= seconds && this.audioState === this.audioStatePlay) {
                    this.setState({ progress: seconds })
                } else if (this.audioState === this.audioStateStop) {
                    this.setState({ progress: 0 })
                }
            })
        }, 0)
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
    }

    loaderImg() {
        return (
            this.state.image
        )
    }

    spotify() {
        if (this.state.image != null) {
            return (
                <View>
                    {this.loaderImg()}
                </View>
            )
        } else {
            const data = spotifyData
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
                        <View style={{ zIndex: 1, width: '114%', height: '15%', marginLeft: '-7%', borderWidth: 2, borderColor: '#151C38'}} />
                        <View style={{ width: `${this.state.progress / 1.9}%`, height: '15%', marginLeft: '-7%', marginTop: '-2%', backgroundColor:R.colors.saumon}} />
                        <View style={styles.container__spotify__sound__player}>
                            <View style={styles.container__spotify__sound__infos}>
                                <Image style={styles.container__spotify__sound__cover} source={require('../../main/assets/icons/spotify/mini_rect.png')} />
                                <View style={styles.container__spotify__sound__data}>
                                    <View style={styles.container__spotify__sound__artist}>
                                        <Text style={styles.container__spotify__sound__title}>{data[0].title} • </Text><Text style={styles.container__spotify__sound__name}>{data[0].name}</Text>
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

    container__spotify__sound: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        bottom: 10,
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
        marginLeft: -24,
        marginRight: 10,
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