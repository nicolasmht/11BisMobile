
import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Image } from 'react-native'
import R from '../../res/R'
import dataSound from '../../data/sound_call'
import Sound from 'react-native-sound'

export default class CallingScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            minutes: 0,
            seconds: 0,
            text: 'appel:',
            category: this.props.route.params.category,
            isPlaying: false,
            isBusy: false,
            soundId: 0,
            isActiveMute: false,
            isActiveSpeaker: false
        }
        this.enable = true
        this.data
    }

    componentWillUnmount() {
        this.clearTimer()
        this.clearSound()
        clearTimeout(this.myTimer)
        clearInterval(this.myInterval)
    }

    componentDidMount() {
        this.data = dataSound
        this.changePlayState(0)

        this.myCall = setTimeout(() => {
            this.setState(({ text, category }) => ({
                text: '',
                category: ''
            }))
            this.stop()
            this.setState({ isBusy: true })
        }, 5000)

        this.myTimer = setTimeout(() => {
            this.myInterval = setInterval(() => {
                this.changePlayState(1)
                const { seconds, minutes } = this.state
                if (seconds >= 0) {
                    this.setState(({ seconds }) => ({
                        seconds: seconds + 1
                    }))
                }
                if (seconds === 59) {
                    this.setState(({ seconds }) => ({
                        seconds: 0
                    }))
                    if (minutes === 0 && seconds === 0) {
                        clearInterval(this.myTimer)
                    } else {
                        this.setState(({ minutes }) => ({
                            minutes: minutes + 1,
                            seconds: 0
                        }))
                    }
                }
            }, 1000)
        }, 5000)
    }

    timerCall = () => {
        const { minutes, seconds, text, category } = this.state
        if (text === '' && category === '') {
            return (
                <Text>
                    {minutes < 10 ? `0${minutes}` : minutes}: {seconds < 10 ? `0${seconds}` : seconds}
                </Text>
            )
        }
    }

    changePlayState(id) {
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

    play(id) {
        this.whoosh = new Sound(this.data.calls[id].sound, null, (error) => {
            if(this.state.isActiveSpeaker) {
                this.whoosh.setVolume(10)
            }
            if (!error) {
                this.whoosh.play((success) => {
                    if (success) {
                        this.play(id)
                    }
                })
            }
        })
    }

    stop() {
        if (!this.whoosh) return
        this.whoosh.stop()
        this.whoosh.release()
        this.whoosh = null
        this.clearTimer()
        this.setState({ isPlaying: false, isBusy: true })
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
            isPlaying: false,
            soundId: 0,
        })
    }

    render() {
        const { minutes, seconds, text, category } = this.state
        const { firstname, lastname } = this.props.route.params
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../main/assets/fond/Points.png')} style={styles.backgroundImage}>
                    <View style={styles.container__call__infos}>
                        <View style={styles.container__call__infos__names}>
                            <Text style={styles.container__call__infos__name}>{!firstname ? '' : firstname}</Text>
                            <Text style={styles.container__call__infos__name__lastname}>{!lastname ? '' : lastname}</Text>
                        </View>
                        {
                            !this.state.isBusy
                            ? <Text style={styles.container__call__infos__time}>
                                {text} {category}
                            </Text>
                            : <Text style={styles.container__call__infos__time}>
                                {text} {category}
                                {this.timerCall()}
                            </Text>
                        }
                    </View>
                    <View style={styles.container__call__events}>
                        <TouchableOpacity style={styles.container__call__icon__mute} onPress={() => this.setState({ isActiveMute: !this.state.isActiveMute })}>
                            <Image style={this.state.isActiveMute ? {backgroundColor: R.colors.dark_saumon, borderRadius: 50} : '' } source={require('../../main/assets/icons/contact/mute.png')} />
                            <Text style={styles.container__call__text}>mute</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container__call__icon__speaker} onPress={() => this.setState({ isActiveSpeaker: !this.state.isActiveSpeaker })}>
                            <Image style={this.state.isActiveSpeaker ? { backgroundColor: R.colors.dark_saumon, borderRadius: 50 } : ''} source={require('../../main/assets/icons/contact/speaker.png')} />
                            <Text style={styles.container__call__text}>speaker</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container__call__cancelCall}>
                        <TouchableOpacity style={styles.container__call__icon__cancel} onPress={() => {
                            return (clearTimeout(this.myTimer), clearInterval(this.myInterval),  this.setState({ isBusy: false }), this.props.navigation.goBack()) }}>
                            <Image source={require('../../main/assets/icons/contact/cancel_call.png')} />
                        </TouchableOpacity>
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

    container__call__infos: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40%'
    },

    container__call__infos__names: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    container__call__infos__name: {
        fontSize: 30,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        paddingBottom: 10,
        color: R.colors.saumon,
    },

    container__call__infos__name__lastname: {
        fontSize: 30,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        paddingBottom: 10,
        color: R.colors.saumon,
        marginLeft: 10,
    },

    container__call__infos__category: {
        fontSize: 20,
        fontFamily: R.fonts.Agrandir_GrandLight,
        color: R.colors.saumon,
    },

    container__call__text: {
        marginTop: 10,
        display: 'flex',
        alignSelf: 'center',
        fontSize: 15,
        color: R.colors.saumon,
        fontFamily: R.fonts.Agrandir_Regular,

    },

    container__call__infos__time: {
        fontSize: 20,
        color: R.colors.saumon,
        fontFamily: R.fonts.Agrandir_GrandLight,
    },

    container__call__events: {
        width: '100%',
        height: '50%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },

    container__call__icon__mute: {
        paddingRight: '10%'
    },

    container__call__cancelCall: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: '5%'
    }
})
