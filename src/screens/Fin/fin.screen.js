import React, { Component } from 'react'
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import R from '../../res/R'
import Sound from 'react-native-sound'

export default class fFnScreen extends Component {
    constructor() {
        super()
        this.state = {
          
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../main/assets/fond/Points.png')} style={styles.backgroundImage}>
                    <View style={styles.container__fin}>
                        <Image style={{marginTop: '12%', marginLeft: 22}}source={require('../../main/assets/fond/fin_true.png')}/>
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

    container__fin: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },

    container__fin__loader: {
        width: '100%',
        height: '100%',
    },

    container__fin__main: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    container__fin__main__text: {
        color: R.colors.saumon,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_Regular,
        textAlign: 'center',
        position: 'absolute', 
        top: '-18%',
        left: '24%',
    },

    container__fin__main__button__saumon: {
        width: 82, 
        height: 82, 
        backgroundColor: R.colors.saumon,
        borderColor: R.colors.dark_blue,
        borderWidth: 1,
    },

    container__fin__main__button__blue: {
        width: 82, 
        height: 82, 
        backgroundColor: R.colors.blue,
        borderColor: R.colors.dark_blue,
        borderWidth: 1,
    },

    container__fin__main__name: {
        color: R.colors.saumon,
        fontSize: 15, 
        fontFamily: R.fonts.Agrandir_Regular,
        textAlign: 'center',
    },

    container__fin__fiche: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '5%',
    },

    container__fin__logo: {
        marginTop: '10%',
        marginLeft: '2%',
    },
    container__fin__affiche: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: R.colors.dark_blue,
        paddingBottom: 10,
    },

    container__fin__infos: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        paddingTop: '5%',
    },
    container__fin__desc: {
        width: '96%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: '5%',
    },
    
})
