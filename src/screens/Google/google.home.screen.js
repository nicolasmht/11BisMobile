import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import R from '../../res/R'

export default class GoogleHomeScreen extends Component {
    constructor() {
        super()
        this.state = {
            image: <Image style={styles.container__googlehome__logo} source={require('../../main/assets/icons/google_home/logo.png')} />,
            text: <Text style={styles.container__googlehome__text}>GOOGLE</Text>
        }
    }
    loaderImg() {
        return (
            this.state.image
        )
    }
    loaderText() {
        return (
            this.state.text
        )
    }
    componentDidMount() {
        this.loading = setTimeout(() => {
            this.setState({
                image: null,
                text: null
            })        
        }, 2000)
    }

    googleHome() {
        if (this.state.image != null && this.state.text != null){
            return(
                <View>
                    {this.loaderImg()}
                    {this.loaderText()}
                </View>
            )
        } else {
            return(
                <View style={styles.container__googlehome__main}>
                    <Text style={styles.container__googlehome__title}>Maison</Text>
                    <View style={styles.container__googlehome__border} />
                    <View style={styles.container__googlehome__room}>
                        <Text style={styles.container__googlehome__room_title}>Chambre</Text>
                        <Text style={styles.container__googlehome__room_text}>2 appareils</Text>
                        <View style={styles.container__googlehome__app}>
                            <View style={styles.container__googlehome__app__content}>
                                <Image source={require('../../main/assets/icons/google_home/lights.png')} />
                                <Text style={styles.container__googlehome__app__text}>Chambre: lumières</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.container__googlehome__border} />
                    <View style={styles.container__googlehome__room}>
                        <Text style={styles.container__googlehome__room_title}>Cuisine</Text>
                        <Text style={styles.container__googlehome__room_text}>2 appareils</Text>
                        <View style={styles.container__googlehome__app}>
                            <View style={styles.container__googlehome__app__content}>
                                <Image source={require('../../main/assets/icons/google_home/light_kitchen.png')} />
                                <Text style={styles.container__googlehome__app__text}>Cuisine</Text>
                            </View>
                            <View style={styles.container__googlehome__app__content}>
                                <Image source={require('../../main/assets/icons/google_home/light_room.png')} />
                                <Text style={styles.container__googlehome__app__text}>Salon: lumière</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.container__googlehome__border} />
                    <View style={styles.container__googlehome__room}>
                        <Text style={styles.container__googlehome__room_title}>Salon</Text>
                        <Text style={styles.container__googlehome__room_text}>2 appareils</Text>
                        <View style={styles.container__googlehome__app}>
                            <View style={styles.container__googlehome__app__content}>
                                <Image source={require('../../main/assets/icons/google_home/lights.png')} />
                                <Text style={styles.container__googlehome__app__text}>Salon: lumières</Text>
                            </View>
                            <View style={styles.container__googlehome__app__content}>
                                <Image source={require('../../main/assets/icons/google_home/vocal.png')} />
                                <Text style={styles.container__googlehome__app__text}>Salon</Text>
                            </View>
                        </View>
                    </View>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container__googlehome}>
                    {this.googleHome()}
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
    container__googlehome: {
        width: '100%',
        height: '100%',
        paddingTop: '13%',
        paddingLeft: 24,
        paddingRight: 24,
        display: 'flex',
        justifyContent: 'center',
    },
    
    container__googlehome__logo: {
        display: 'flex',
        alignSelf: 'center',
        marginTop: '50%',
    },
    
    container__googlehome__text: {
        display: 'flex',
        alignSelf: 'center',
        paddingTop: '70%',
        color: R.colors.blue,
        fontSize: 30,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        opacity: 0.5,
    },

    container__googlehome__main: {
        width: '100%',
        height: '100%',
        display: 'flex',
    },
    
    container__googlehome__title: {
        fontSize: 30,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        textAlign: 'center',
        color: R.colors.dark_blue,
        padding: 10,
    },

    container__googlehome__room_title: {
        fontSize: 20,
        fontFamily: R.fonts.Agrandir_Regular,
        textAlign: 'center',
        color: R.colors.dark_blue,
        paddingTop: 15,
    },

    container__googlehome__room_text: {
        fontSize: 12,
        fontFamily: R.fonts.Agrandir_Regular,
        textAlign: 'center',
        color: R.colors.dark_blue,
        opacity: 0.5,
    },

    container__googlehome__app: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },

    container__googlehome__app__content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    container__googlehome__app__text: {
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_Regular,
        textAlign: 'center',
        color: R.colors.dark_blue,
        opacity: 0.5,
        paddingTop: 12,
    },

    container__googlehome__border: {
        width: '100%',
        height: 1,
        backgroundColor: R.colors.dark_blue,
        opacity: 0.3
    }
})
