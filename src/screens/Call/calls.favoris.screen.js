
import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import R from '../../res/R'

export default class CallsFavorisScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container__callsfavoris}>
                    <Text style={styles.container__callsfavoris__title}>Favoris</Text>
                    <View style={styles.container__callsfavoris__border} />
                    <Text style={styles.container__callsfavoris__desc}>Aucun favori</Text>
                </View>
                <View style={styles.container__bottom__bar}>
                    <TouchableOpacity>
                        <Image source={require('../../main/assets/icons/contact/calls/favoris_clicked.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CallsRecents')}>
                        <Image source={require('../../main/assets/icons/contact/calls/recents.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CallsContacts')}>
                        <Image source={require('../../main/assets/icons/contact/calls/contacts.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CallsClavier')}>
                        <Image source={require('../../main/assets/icons/contact/calls/clavier.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CallsMessagerie')}>
                        <Image source={require('../../main/assets/icons/contact/calls/messagerie.png')} />
                    </TouchableOpacity>
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

    container__callsfavoris: {
        width: '100%',
        height: '100%',
        marginTop: '9%',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    container__callsfavoris__title: {
        width: '100%',
        marginTop: 24,
        fontSize: 25,
        textAlign: 'left',
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        color: R.colors.dark_blue,
    },

    container__callsfavoris__desc: {
        width: '100%',
        height: '46.5%',
        marginTop: '70%',
        textAlign: 'center',
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        color: R.colors.dark_blue,
        fontSize: 20,
        opacity: 0.3
    },

    container__callsfavoris__border: {
        width: '100%',
        height: 1,
        marginTop: 6,
        backgroundColor: R.colors.dark_blue,
        opacity: 0.2
    },

    container__bottom__bar: {
        width: '100%',
        height: '8%',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        bottom: 0,
        backgroundColor: R.colors.saumon,
    }
})
