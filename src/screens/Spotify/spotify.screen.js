import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Image, ScrollView, FlatList, Modal } from 'react-native'
import spotifyData from '../../data/spotify.json'
import R from '../../res/R'
import Sound from 'react-native-sound'

export default class SpotifyScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: <Image style={styles.container__spotify__logo} source={require('../../main/assets/icons/spotify/logo.png')} />,
            count: 0,
            play: false,
            isPlaying: false,
            progress: 0,
            soundId: 0,
            isNext: false,
            isPlaylist: true,
            isArtistes: false,
            isAlbums: false,
            isLyricistes: false,
            isConcentration: false,
            isAltj: false,
            isSong: false
        }
        this.audioStatePlay = "play"
        this.audioStatePause = "pause"
        this.audioStateStop = "stop"
        this.duration = 1
        this.audioState = ""
        this.enable = true
        this.audioPlayIcon = require('../../main/assets/icons/spotify/icon_play.png')
        this.audioStopIcon = require('../../main/assets/icons/spotify/icon_stop.png')
        this.audioPlayButton = require('../../main/assets/icons/spotify/icon_circle_play.png')
        this.audioStopButton = require('../../main/assets/icons/spotify/icon_circle_stop.png')
        this.data_all
        this.data_lyricistes
        this.data_artistes
        this.data_albums
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

        this.setState({ play: true })

        this.data_all = spotifyData.all
        this.data_lyricistes = spotifyData.lyricistes
        this.data_concentration = spotifyData.concentration
        this.data_altj = spotifyData.altj
        this.data_artistes = spotifyData.artistes
        this.data_albums = spotifyData.albums
    }

    changePlayState(id) {
        if (!this.enable) return
        if (this.state.isPlaying) {
            this.setState({ isPlaying: false })
            this.pause()
        } else {
            this.setState({ isPlaying: true })
            this.play(id)
        }
        this.enable = false
        setTimeout(() => {
            this.enable = true
        }, 500)
    }

    changePlaying(id) {
        this.stop()
        if (!this.enable) return
        if (this.state.isPlaying) {
            this.setState({ isPlaying: false })
            this.stop()
        }
        this.enable = false
        setTimeout(() => {
            this.enable = true
            this.setState({ isPlaying: true, soundId: id })
            this.play(id)
        }, 0)
    }

    next() {
        this.setState({
            soundId: ++this.state.soundId,
            isNext: true
        })
        this.play(this.state.soundId)
    }

    play(id) {
        if (this.whoosh && !this.state.isPlaying) {
            this.whoosh.getCurrentTime((seconds) => {
                this.whoosh.setCurrentTime(seconds)
                this.whoosh.play((success) => {
                    if (success) {
                        if (this.data_all[id].id === this.data_all.length - 1) {
                            this.stop()
                        } else {
                            this.next(id)
                        }
                    }
                })
                this.audioState = this.audioStatePlay
                this.playProgress()
            })
            return
        }
        this.whoosh = new Sound(this.data_all[id].sound || 0, null, (error) => {
            if (!error) {
                this.duration = this.whoosh.getDuration()
                this.whoosh.play((success) => {
                    if (success) {
                        if (this.data_all[id].id === this.data_all.length - 1) {
                            this.stop()
                        } else {
                            this.next(id)
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
                        this.setState({ progress: 0 })
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
            count: 0,
            play: false,
            isPlaying: false,
            progress: 0,
            soundId: 0,
            isNext: false,
            isPlaylist: true,
            isArtistes: false,
            isAlbums: false,
            isLyricistes: false,
            isConcentration: false,
            isAltj: false,
            isSong: false
        })
    }

    loaderImg() {
        return (
            this.state.image
        )
    }

    isPlaylist() {
        return (
            <View style={styles.container__spotify__playlists}>
            {
                (this.state.isPlaylist && !this.state.isLyricistes) || (this.state.isPlaylist && !this.state.isConcentration) || (this.state.isPlaylist && !this.state.isAltj)
                ? <View>
                    <TouchableOpacity style={styles.container__spotify__playlists__group} onPress={() => this.setState({ isLyricistes: true, isConcentration: false, isAltj: false })}>
                        <Image style={styles.container__spotify__playlists__group__cover} source={require('../../main/assets/icons/spotify/playlist_lyricistes.png')} />
                        <View style={styles.container__spotify__playlists__group__desc}>
                            <Text style={styles.container__spotify__playlists__group__title}>Lyricistes</Text>
                            <View style={styles.container__spotify__playlists__group__infos}>
                                <Image style={styles.container__spotify__playlists__group__infos__icon} source={require('../../main/assets/icons/spotify/icon_arrow-circle-down.png')} />
                                <Text style={styles.container__spotify__playlists__group__infos__by}>par jade</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container__spotify__playlists__group} onPress={() => this.setState({ isConcentration: true, isLyricistes: false , isAltj: false })}>
                        <Image style={styles.container__spotify__playlists__group__cover} source={require('../../main/assets/icons/spotify/playlist_concentration.png')} />
                        <View style={styles.container__spotify__playlists__group__desc}>
                            <Text style={styles.container__spotify__playlists__group__title}>Concentration</Text>
                            <View style={styles.container__spotify__playlists__group__infos}>
                                <Image style={styles.container__spotify__playlists__group__infos__icon} source={require('../../main/assets/icons/spotify/icon_arrow-circle-down.png')} />
                                <Text style={styles.container__spotify__playlists__group__infos__by}>par jade</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container__spotify__playlists__group} onPress={() => this.setState({  isAltj: true, isLyricistes: false, isConcentration: false })}>
                        <Image style={styles.container__spotify__playlists__group__cover} source={require('../../main/assets/icons/spotify/alt-j_album.jpg')} />
                        <View style={styles.container__spotify__playlists__group__desc}>
                            <Text style={styles.container__spotify__playlists__group__title}>Alt-J</Text>
                            <View style={styles.container__spotify__playlists__group__infos}>
                                <Text style={styles.container__spotify__playlists__group__infos__by}>par OIOIOI</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                : <View/>

            }
            {
                this.state.isLyricistes ? this.isLyricistes()
                : this.state.isConcentration ? this.isConcentration()
                : this.state.isAltj ? this.isAltj()
                : <View/>
            }
            </View>

        )
    }

    isLyricistes() {
        return (
            <View style={{ backgroundColor: R.colors.blue, marginTop: '-75%', height: '105%' }}>
                <ImageBackground source={require('../../main/assets/fond/Points.png')} style={styles.backgroundImage}>
                <TouchableOpacity style={styles.container__spotify__playlists__group} onPress={() => this.setState({ isLyricistes: false })}>
                    <Image source={require('../../main/assets/icons/spotify/icon_chevron_back.png')} />
                </TouchableOpacity>
                <ScrollView style={{ height: '120%' }}>
                    <View style={styles.container__spotify__playlist}>
                        <FlatList
                            data={this.data_lyricistes}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: 8 }} onPress={() => this.changePlaying(item.id)}>
                                    <Image style={styles.container__spotify__playlist__cover} source={{ uri: item.photo }} />
                                    <View style={{ width: '100%', display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
                                        <Text style={styles.container__spotify__playlist__name}>{item.title}</Text>
                                        <Text style={styles.container__spotify__playlist__artist}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </ScrollView>
                </ImageBackground>
            </View>
        )
    } 

    isConcentration() {
        return (
            <View style={{ backgroundColor: R.colors.blue, marginTop: '-75%', height: '105%' }}>
                <ImageBackground source={require('../../main/assets/fond/Points.png')} style={styles.backgroundImage}>
                <TouchableOpacity style={styles.container__spotify__playlists__group} onPress={() => this.setState({ isConcentration: false })}>
                    <Image source={require('../../main/assets/icons/spotify/icon_chevron_back.png')} />
                </TouchableOpacity>
                <ScrollView style={{ height: '120%' }}>
                    <View style={styles.container__spotify__playlist}>
                        <FlatList
                            data={this.data_concentration}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: 8 }} onPress={() => this.changePlaying(item.id)}>
                                    <Image style={styles.container__spotify__playlist__cover} source={{ uri: item.photo }} />
                                    <View style={{ width: '100%', display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
                                        <Text style={styles.container__spotify__playlist__name}>{item.title}</Text>
                                        <Text style={styles.container__spotify__playlist__artist}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </ScrollView>
                </ImageBackground>
            </View>
        )
    } 

    isAltj() {
        return (
            <View style={{ backgroundColor: R.colors.blue, marginTop: '-75%', height: '105%' }}>
                <ImageBackground source={require('../../main/assets/fond/Points.png')} style={styles.backgroundImage}>
                <TouchableOpacity style={styles.container__spotify__playlists__group} onPress={() => this.setState({ isAltj: false })}>
                    <Image source={require('../../main/assets/icons/spotify/icon_chevron_back.png')} />
                </TouchableOpacity>
                <ScrollView style={{ height: '120%' }}>
                    <View style={styles.container__spotify__playlist}>
                        <FlatList
                            data={this.data_altj}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: 8 }} onPress={() => this.changePlaying(item.id)}>
                                    <Image style={styles.container__spotify__playlist__cover} source={{ uri: item.photo }} />
                                    <View style={{ width: '100%', display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
                                        <Text style={styles.container__spotify__playlist__name}>{item.title}</Text>
                                        <Text style={styles.container__spotify__playlist__artist}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </ScrollView>
                </ImageBackground>
            </View>
        )
    } 


    isArtistes() {
        return (
            <View>
                <ScrollView style={{height: '70%'}}>
                    <View style={styles.container__spotify__artistes}>
                        <FlatList
                            data={this.data_artistes}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: 8 }}>
                                    <Image style={styles.container__spotify__artistes__cover} source={{ uri: item.photo }} />
                                    <Text style={styles.container__spotify__artistes__artist}>{item.artiste}</Text>
                                </View>
                            )}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }

    isAlbums() {
        return (
            <View>
                <ScrollView style={{height: '70%'}}>
                    <View style={styles.container__spotify__albums}>
                        <FlatList
                            data={this.data_albums}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: 8 }}>
                                    <Image style={styles.container__spotify__albums__cover} source={{ uri: item.photo }} />
                                    <View style={{ width: '100%', display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
                                        <Text style={styles.container__spotify__albums__name}>{item.album}</Text>
                                        <Text style={styles.container__spotify__albums__artist}>{item.artiste}</Text>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }

    isSong() {
        return(
            <View style={styles.container__spotify__song}>
                <Image style={styles.container__spotify__song__cover} source={{ uri: this.data_all[this.state.soundId].photo }} />
                <View style={styles.container__spotify__song__data}>
                    <View style={styles.container__spotify__song__artist}>
                        <Text style={styles.container__spotify__song__title}>{this.data_all[this.state.soundId].title}</Text>
                        <Text style={styles.container__spotify__song__name}>{this.data_all[this.state.soundId].name}</Text>
                    </View>
                    <View style={{ zIndex: 1, width: '100%', height: '2.5%', borderWidth: 2, borderColor: '#151C38' }} />
                    <View style={{ width: `${((100 * this.state.progress) / this.data_all[this.state.soundId].duration)}%`, height: '2.5%', marginTop: '-2%', backgroundColor: R.colors.saumon }} />
                    <View style={styles.container__spotify__song__button}>
                        <Image source={require('../../main/assets/icons/spotify/icon_prev.png')} />
                            <TouchableOpacity onPress={() => this.changePlayState(this.data_all[this.state.soundId].id)}>
                                <Image source={this.state.isPlaying ? this.audioStopButton : this.audioPlayButton} />
                            </TouchableOpacity>
                        <Image source={require('../../main/assets/icons/spotify/icon_next.png')} />
                    </View>
                    <Image source={require('../../main/assets/icons/spotify/icon_app_large.png')} />
                </View>
            </View>
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
            return (
                <View style={styles.container__spotify}>
                    <View style={styles.container__spotify__main}>
                        {
                            !this.state.isSong 
                            ? <Text style={styles.container__spotify__title}>Musique</Text> 
                            :  <TouchableOpacity onPress={() => this.setState({ isSong: false, isPlaylist: true, isLyricistes: false, isArtistes: true })}>
                                <Image source={require('../../main/assets/icons/spotify/icon_chevron_down.png')} />
                            </TouchableOpacity>
                        }
                        
                        {
                            this.state.isPlaylist || this.state.isLyricistes
                            ? <View style={styles.container__spotify__category}>
                                <TouchableOpacity>
                                    <Text style={styles.container__spotify__subtitle__selected}>Playlists</Text>
                                    <View style={styles.container__spotify__border} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.setState({ isPlaylist: false, isLyricistes: false, isArtistes: true})}>
                                    <Text style={styles.container__spotify__subtitle}>Artistes</Text>
                                </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.setState({ isPlaylist: false, isLyricistes: false, isAlbums: true })}>
                                    <Text style={styles.container__spotify__subtitle}>Abums</Text>
                                </TouchableOpacity>
                            </View>
                            : this.state.isArtistes
                            ? <View style={styles.container__spotify__category}>
                                <TouchableOpacity onPress={() => this.setState({ isArtistes: false, isLyricistes: false, isPlaylist: true})}>
                                    <Text style={styles.container__spotify__subtitle}>Playlists</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.container__spotify__subtitle__selected}>Artistes</Text>
                                    <View style={styles.container__spotify__border} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.setState({ isArtistes: false, isLyricistes: false, isAlbums: true})}>
                                    <Text style={styles.container__spotify__subtitle}>Abums</Text>
                                </TouchableOpacity>
                            </View>
                            : this.state.isAlbums
                            ? <View style={styles.container__spotify__category}>
                                <TouchableOpacity onPress={() => this.setState({ isAlbums: false, isLyricistes: false, isPlaylist: true})}>
                                    <Text style={styles.container__spotify__subtitle}>Playlists</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.setState({ isAlbums: false, isLyricistes: false, isArtistes: true})}>
                                    <Text style={styles.container__spotify__subtitle}>Artistes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.container__spotify__subtitle__selected}>Abums</Text>
                                    <View style={styles.container__spotify__border} />
                                </TouchableOpacity>
                            </View>
                            : <View/>
                        } 
                        {
                            this.state.isPlaylist ? this.isPlaylist()
                            : this.state.isArtistes ? this.isArtistes()
                            : this.state.isAlbums ? this.isAlbums()
                            : this.state.isSong ? this.isSong()
                            : <View/>
                        }
                    </View>
                    {
                        !this.state.isSong
                        ?  <TouchableOpacity style={styles.container__spotify__sound} onPress={() => this.setState({ isPlaylist: false, isArtistes: false, isAlbums: false, isSong: true, isLyricistes: false })}>
                            <View style={{ zIndex: 1, width: '114%', height: '12%', marginLeft: '-7%', borderWidth: 2, borderColor: '#151C38'}} />
                            <View style={{ width: `${((114 * this.state.progress) / this.data_all[this.state.soundId].duration)}%`, height: '8%', marginLeft: '-7%', marginTop: '-2%', backgroundColor:R.colors.saumon}} />
                            <View style={styles.container__spotify__sound__player}>
                                <View style={styles.container__spotify__sound__infos}>
                                    <Image style={styles.container__spotify__sound__cover} source={{ uri: this.data_all[this.state.soundId].photo }} />
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
                                <TouchableOpacity onPress={() => this.changePlayState(this.data_all[this.state.soundId].id)}>
                                    <Image source={this.state.isPlaying ? this.audioStopIcon : this.audioPlayIcon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                        : <View/>
                    }
                </View>
            )
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../main/assets/fond/Points.png')} style={styles.backgroundImage}>
                        {this.spotify()}
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
        flexDirection: 'row',
        alignItems: 'flex-end',
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
        flexDirection: 'column',
    },

    container__spotify__title: {
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        color: R.colors.saumon,
        fontSize: 25,
    },

    container__spotify__category: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 30,
        marginLeft: '-2%',
        paddingBottom: 20
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

    // PLAYLISTS

    container__spotify__playlists: {
        height: '70%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: '2%',
    },
    container__spotify__playlists__group: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
    },

    container__spotify__playlists__group__cover: {
        width: 80,
        height: 80,
        borderColor: R.colors.dark_blue,
        borderWidth: 1,
    },

    container__spotify__playlists__group__desc: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 20,
    },

    container__spotify__playlists__group__infos: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        paddingTop: 5,
    },

    container__spotify__playlists__group__title: {
        color: R.colors.saumon,
        fontSize: 20,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        alignSelf: 'flex-start',
    },

    container__spotify__playlists__group__infos__icon: {
        marginRight: 5,
    },

    container__spotify__playlists__group__infos__by: {
        color: R.colors.saumon,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_Regular,
        opacity: 0.5,
        marginTop: 8
    },

    // ARTISTES

    container__spotify__artistes: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft: '-2%',
    },

    container__spotify__artistes__cover: {
        width: 80,
        height: 80,
        borderColor: R.colors.dark_blue,
        borderWidth: 1,
    },

    container__spotify__artistes__artist: {
        width: '65%',
        color: R.colors.saumon,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        alignSelf: 'center',
        paddingLeft: 20,
    },

    // ALBUMS

    container__spotify__albums: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft: '-2%',
    },

    container__spotify__albums__cover: {
        width: 80,
        height: 80,
        borderColor: R.colors.dark_blue,
        borderWidth: 1,
    },

    container__spotify__albums__name: {
        width: '65%',
        color: R.colors.saumon,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        paddingLeft: 20,
    },

    container__spotify__albums__artist: {
        width: '65%',
        color: R.colors.saumon,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_Regular,
        paddingLeft: 20,
        opacity: 0.8,
    },

    // lyricistes

    container__spotify__playlist: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft: '-2%',
    },

    container__spotify__playlist__cover: {
        width: 80,
        height: 80,
        borderColor: R.colors.dark_blue,
        borderWidth: 1,
    },

    container__spotify__playlist__name: {
        width: '65%',
        color: R.colors.saumon,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        paddingLeft: 20,
    },

    container__spotify__playlist__artist: {
        width: '65%',
        color: R.colors.saumon,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_Regular,
        paddingLeft: 20,
        opacity: 0.8,
    },

    // SONG 
    container__spotify__song: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },

    container__spotify__song__cover: {
        width: 330,
        height: 330,
        marginTop: '10%',
        alignSelf: 'center',
    },

    container__spotify__song__artist: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'flex-start',
        marginTop: '8%',
    },

    container__spotify__song__title: {
        color: R.colors.saumon,
        fontSize: 25,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
    },

    container__spotify__song__name: {
        color: R.colors.saumon,
        fontSize: 18,
        fontFamily: R.fonts.Agrandir_Regular,
        marginBottom: '5%'
    },

    container__spotify__song__button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '8%',
        marginBottom: '8%',
    },

    // MODAL SOUND

    container__spotify__sound: {
        width: '100%',
        height: '10%',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '6%',
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
        width: 55,
        height: 55,
        marginRight: 10,
        marginLeft: -22,
        borderColor: R.colors.dark_blue,
        borderWidth: 1,
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
})