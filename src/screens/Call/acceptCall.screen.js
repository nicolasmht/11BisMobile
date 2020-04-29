
import React from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Image } from 'react-native';

// TODO: SOUND
export default class acceptCallScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: 0,  
            seconds: 0,
            text: 'appel:',
            category: this.props.route.params.category
        }
    }
    componentDidMount() {
        this.myCall = setTimeout(() => {
            this.setState(({ text, category }) => ({
                text: '',
                category: ''
            }))
        }, 5000)

        this.myTimer = setTimeout(() => {
            setInterval(() => {
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
    timer = () => {
        const { minutes, seconds, text, category } = this.state
        if(text === '' && category === '') {
            return (
                <Text>
                    {minutes < 10 ? `0${minutes}` : minutes}: {seconds < 10 ? `0${seconds}` : seconds}
                </Text>
            )
        }  
    }

    render() {
        const { minutes, seconds, text, category } = this.state
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../main/assets/fond/Points.png')} style={styles.backgroundImage}>
                    <View style={styles.container__call__infos}>
                        <Text style={styles.container__call__infos__name}>{this.props.route.params.names}</Text>
                        <Text style={styles.container__call__infos__time}>
                            {text} {category}
                            {this.timer()}
                        </Text>
                    </View>
                    <View style={styles.container__call__events}>
                        <TouchableOpacity style={styles.container__call__icon__mute}>
                            <Image source={require('../../main/assets/icons/mute.png')} />
                            <Text style={styles.container__call__text}>mute</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container__call__icon__speaker}>
                            <Image source={require('../../main/assets/icons/speaker.png')} />
                            <Text style={styles.container__call__text}>speaker</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container__call__cancelCall}>
                        <TouchableOpacity style={styles.container__call__icon__cancel} onPress={() => { return (clearInterval(this.myTimer), this.props.navigation.navigate('FicheContact', { names: 'Agathe Fradet' }))}}>
                            <Image source={require('../../main/assets/icons/cancel_call.png')} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#2A3669'
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

    container__call__infos__name: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 10,
        color: '#FFB99D',
    },

    container__call__infos__category: {
        fontSize: 20,
        color: '#FFB99D',
    },

    container__call__text: {
        marginTop: 10,
        display: 'flex',
        alignSelf: 'center',
        fontSize: 15,
        color: '#FFB99D',
    },

    container__call__infos__time: {
        fontSize: 20,
        color: '#FFB99D',
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