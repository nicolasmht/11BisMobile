
import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

export default class CallsFavorisScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container__callsfavoris}>
                    <Text style={styles.container__callsfavoris__title}>Favoris</Text>
                    <View style={styles.container__callsfavoris__border} />
                    <Text style={styles.container__callsfavoris__desc}>Aucun favori</Text>
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#FFB99D',
    },

    container__callsfavoris: {
        width: '100%',
        height: '100%',
        marginTop: '3%',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    container__callsfavoris__title: {
        width: '100%',
        marginTop: 24,
        fontSize: 30,
        textAlign: 'left',
        fontWeight: 'bold'
    },

    container__callsfavoris__desc: {
        width: '100%',
        height: '46.5%',
        marginTop: '70%',
        textAlign: 'center',
        fontSize: 30,
        opacity: 0.3
    },

    container__callsfavoris__border: {
        width: '100%',
        height: 1,
        marginTop: 6,
        backgroundColor: '#151C38',
        opacity: 0.2
    },

    container__bottom__bar: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        marginTop: '2%'
    }
})
