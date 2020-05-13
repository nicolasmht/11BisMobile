
import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import R from '../../res/R'

export default class CallsRecentsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container__callsrecents}>
                    <Text style={styles.container__callsrecents__title}>Recents</Text>
                    <View style={styles.container__callsrecents__border} />

                    <TouchableOpacity style={styles.container__callsrecents__button}>
                        <View style={styles.container__callsrecents__infos}>
                            <View style={styles.container__callsrecents__call}>
                                <Image source={require('../../main/assets/icons/contact/calls/icon_last_call.png')} />
                                <Text style={styles.container__callsrecents__names}>Daniel</Text>
                            </View>
                            <Text style={styles.container__callsrecents__category}>téléphone</Text>
                        </View>

                        <View style={styles.container__callsrecents__infotime}>
                            <Text style={styles.container__callsrecents__time}>10:08</Text>
                            <Image source={require('../../main/assets/icons/icon_info.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container__callsrecents__border} />

                    <TouchableOpacity style={styles.container__callsrecents__button}>
                        <View style={styles.container__callsrecents__infos}>
                            <View style={styles.container__callsrecents__call__noIcon}>
                                <Text style={styles.container__callsrecents__names}>Pauline Albert</Text>
                            </View>
                            <Text style={styles.container__callsrecents__category}>domicile</Text>
                        </View>

                        <View style={styles.container__callsrecents__infotime}>
                            <Text style={styles.container__callsrecents__time}>09:30</Text>
                            <Image source={require('../../main/assets/icons/icon_info.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container__callsrecents__border} />

                    <TouchableOpacity style={styles.container__callsrecents__button}>
                        <View style={styles.container__callsrecents__infos}>
                            <View style={styles.container__callsrecents__call}>
                                <Image source={require('../../main/assets/icons/contact/calls/icon_last_call.png')} />
                                <Text style={styles.container__callsrecents__names}>Daniel</Text>
                            </View>
                            <Text style={styles.container__callsrecents__category}>téléphone</Text>
                        </View>

                        <View style={styles.container__callsrecents__infotime}>
                            <Text style={styles.container__callsrecents__time}>hier</Text>
                            <Image source={require('../../main/assets/icons/icon_info.png')} />
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={styles.container__bottom__bar}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CallsFavoris')}>
                        <Image source={require('../../main/assets/icons/contact/calls/favoris.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../main/assets/icons/contact/calls/recents_clicked.png')} />
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
        backgroundColor: R.colors.saumon,
    },

    container__callsrecents: {
        width: '100%',
        height: '100%',
        marginTop: '3%',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    container__callsrecents__title: {
        width: '100%',
        marginTop: 24,
        fontSize: 30,
        textAlign: 'left',
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        color: R.colors.dark_blue,
    },

    container__callsrecents__button: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
    },

    container__callsrecents__infos: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
    },

    container__callsrecents__call: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
    },

    container__callsrecents__call__noIcon: {
        paddingLeft: 10
    },

    container__callsrecents__names: {
        fontSize: 20,
        paddingLeft: 10,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        color: R.colors.dark_blue,
    },

    container__callsrecents__category: {
        fontSize: 12,
        fontFamily: R.fonts.Agrandir_Regular,
        color: R.colors.dark_blue,
        paddingLeft: 20,
    },

    container__callsrecents__time: {
        fontSize: 12,
        fontFamily: R.fonts.Agrandir_Regular,
        color: R.colors.dark_blue,
        paddingRight: 8,
        marginTop: 2,
    },

    container__callsrecents__infotime: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    container__callsrecents__border: {
        width: '100%',
        height: 1,
        marginTop: 6,
        backgroundColor: '#151C38',
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
