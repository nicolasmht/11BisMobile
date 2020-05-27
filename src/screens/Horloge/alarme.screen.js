import React, { Component } from 'react'
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import R from '../../res/R'
import Sound from 'react-native-sound'

export default class AlarmeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isPlaying: false,
        }
        this.enable = true
    }

    componentWillUnmount() {
        this.clearTimer()
        this.stop()
    }

    componentDidMount() {
        this.play()
    }

    play() {
        this.whoosh = new Sound('https://res.cloudinary.com/dn32la6ny/video/upload/v1590507097/11bis/sound/alarm.mp3', null, (error) => {
            if (!error) {
                this.whoosh.play((success) => {
                    if (success) {
                        this.play()
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
        this.setState({ isPlaying: false })
    }


    clearTimer() {
        if (this.timer) {
            clearInterval(this.timer)
            this.timer = null
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../main/assets/fond/Points.png')} style={styles.backgroundImage}>
                    <View style={styles.container__alarme}>
                       <Text style={styles.container__alarme__heure}>19:30</Text>
                       <Text style={styles.container__alarme__date}>mercredi 28 juin</Text>
                       <Text style={styles.container__alarme__title}>Alarme</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: R.colors.blue,
        width: '100%',
        height: '100%',
    },

    container__alarme: {
        width: '100%',
        height: '100%',
        marginTop: '20%',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    backgroundImage: {
        width: '100%',
        height: '100%'
    },

    container__alarme__heure: {
        fontFamily: R.fonts.Agrandir_GrandLight,
        fontSize: 80,
        color: R.colors.saumon,
        opacity: 0.5,
        marginBottom: '-10%',
    },

    container__alarme__date: {
        fontFamily: R.fonts.Agrandir_Regular,
        fontSize: 20,
        color: R.colors.saumon,
        opacity: 0.5,
    },

    container__alarme__title: {
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        fontSize: 30,
        color: R.colors.saumon,
        marginTop: '40%',
    },

    container__alarme__stop: {
        width: '50%',
        height: 'auto',
        backgroundColor: 'rgba(255, 185, 157, 0.2)',
        borderColor: R.colors.dark_blue,
        borderWidth: 1,
        borderRadius: 50,
        marginTop: 10,
    },

    container__alarme__stop__text: {
        fontFamily: R.fonts.Agrandir_Regular,
        fontSize: 20,
        color: R.colors.saumon,
        textAlign: 'center',
        padding: 15,
        marginTop: 5,
    },
})
