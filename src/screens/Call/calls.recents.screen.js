
import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import R from '../../res/R'

export default class CallsRecentsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <ScrollView>
                <View style={styles.container__callsrecents}>
                    <Text style={styles.container__callsrecents__title}>Recents</Text>
                    <View style={styles.container__callsrecents__border} />

                    <TouchableOpacity style={styles.container__callsrecents__button}
                        onPress={() => this.props.navigation.navigate(
                            'Calling',
                            {
                                firstname: 'Ben ❤️',
                                category: 'Portable',
                            })}
                        >
                        <View style={styles.container__callsrecents__infos}>
                            <View style={styles.container__callsrecents__call__noIcon}>
                                <Text style={styles.container__callsrecents__names}>Ben ❤️</Text>
                            </View>
                            <Text style={styles.container__callsrecents__category}>portable</Text>
                        </View>

                        <View style={styles.container__callsrecents__infotime}>
                            <Text style={styles.container__callsrecents__time}>10:08</Text>
                            <Image source={require('../../main/assets/icons/icon_info.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container__callsrecents__border} />

                    <TouchableOpacity style={styles.container__callsrecents__button}
                        onPress={() => this.props.navigation.navigate(
                            'Calling',
                            {
                                firstname: 'La Mama',
                                category: 'Portable',
                            })}
                    >
                        <View style={styles.container__callsrecents__infos}>
                            <View style={styles.container__callsrecents__call}>
                                <Image source={require('../../main/assets/icons/contact/calls/icon_last_call.png')} />
                                <Text style={styles.container__callsrecents__names}>La Mama</Text>
                            </View>
                            <Text style={styles.container__callsrecents__category}>portable</Text>
                        </View>

                        <View style={styles.container__callsrecents__infotime}>
                            <Text style={styles.container__callsrecents__time}>09:30</Text>
                            <Image source={require('../../main/assets/icons/icon_info.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container__callsrecents__border} />

                    <TouchableOpacity style={styles.container__callsrecents__button}
                        onPress={() => this.props.navigation.navigate(
                            'Calling',
                            {
                                firstname: 'Caro',
                                lastname: 'Dupuis',
                                category: 'Portable',
                            })}
                    >
                        <View style={styles.container__callsrecents__infos}>
                            <View style={styles.container__callsrecents__call}>
                                <Image source={require('../../main/assets/icons/contact/calls/icon_last_call.png')} />
                                <Text style={styles.container__callsrecents__names}>Caro</Text>
                            </View>
                            <Text style={styles.container__callsrecents__category}>portable</Text>
                        </View>

                        <View style={styles.container__callsrecents__infotime}>
                            <Text style={styles.container__callsrecents__time}>hier</Text>
                            <Image source={require('../../main/assets/icons/icon_info.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container__callsrecents__border} />

                    <TouchableOpacity style={styles.container__callsrecents__button}
                        onPress={() => this.props.navigation.navigate(
                            'Calling',
                            {
                                firstname: 'Inès',
                                lastname: 'Saurel',
                                category: 'Portable',
                            })}
                    >
                        <View style={styles.container__callsrecents__infos}>
                            <View style={styles.container__callsrecents__call}>
                                <Image source={require('../../main/assets/icons/contact/calls/icon_last_call.png')} />
                                <Text style={styles.container__callsrecents__names}>Inès</Text>
                            </View>
                            <Text style={styles.container__callsrecents__category}>portable</Text>
                        </View>

                        <View style={styles.container__callsrecents__infotime}>
                            <Text style={styles.container__callsrecents__time}>mercredi</Text>
                            <Image source={require('../../main/assets/icons/icon_info.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container__callsrecents__border} />

                    <TouchableOpacity style={styles.container__callsrecents__button}
                        onPress={() => this.props.navigation.navigate(
                            'Calling',
                            {
                                firstname: 'Ben ❤️',
                                category: 'Portable',
                            })}
                    >
                        <View style={styles.container__callsrecents__infos}>
                            <View style={styles.container__callsrecents__call__noIcon}>
                                <Text style={styles.container__callsrecents__names}>Ben ❤️</Text>
                            </View>
                            <Text style={styles.container__callsrecents__category}>portable</Text>
                        </View>

                        <View style={styles.container__callsrecents__infotime}>
                            <Text style={styles.container__callsrecents__time}>mercredi</Text>
                            <Image source={require('../../main/assets/icons/icon_info.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container__callsrecents__border} />

                    <TouchableOpacity style={styles.container__callsrecents__button}
                        onPress={() => this.props.navigation.navigate(
                            'Calling',
                            {
                                firstname: 'Ben ❤️',
                                category: 'Portable',
                            })}
                    >
                        <View style={styles.container__callsrecents__infos}>
                            <View style={styles.container__callsrecents__call__noIcon}>
                                <Text style={styles.container__callsrecents__names}>Ben ❤️</Text>
                            </View>
                            <Text style={styles.container__callsrecents__category}>portable</Text>
                        </View>

                        <View style={styles.container__callsrecents__infotime}>
                            <Text style={styles.container__callsrecents__time}>mardi</Text>
                            <Image source={require('../../main/assets/icons/icon_info.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container__callsrecents__border} />

                    <TouchableOpacity style={styles.container__callsrecents__button}
                        onPress={() => this.props.navigation.navigate(
                            'Calling',
                            {
                                firstname: 'Ben ❤️',
                                category: 'Portable',
                            })}
                    >
                        <View style={styles.container__callsrecents__infos}>
                            <View style={styles.container__callsrecents__call}>
                                <Image source={require('../../main/assets/icons/contact/calls/icon_last_call.png')} />
                                <Text style={styles.container__callsrecents__names}>Ben ❤️</Text>
                            </View>
                            <Text style={styles.container__callsrecents__category}>portable</Text>
                        </View>

                        <View style={styles.container__callsrecents__infotime}>
                            <Text style={styles.container__callsrecents__time}>lundi</Text>
                            <Image source={require('../../main/assets/icons/icon_info.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container__callsrecents__border} />

                    <TouchableOpacity style={styles.container__callsrecents__button}
                        onPress={() => this.props.navigation.navigate(
                            'Calling',
                            {
                                firstname: 'Tim',
                                lastname: 'Brasseur',
                                category: 'Portable',
                            })}
                    >
                        <View style={styles.container__callsrecents__infos}>
                            <View style={styles.container__callsrecents__call__noIcon}>
                                <Text style={styles.container__callsrecents__names}>Tim</Text>
                            </View>
                            <Text style={styles.container__callsrecents__category}>portable</Text>
                        </View>

                        <View style={styles.container__callsrecents__infotime}>
                            <Text style={styles.container__callsrecents__time}>samedi</Text>
                            <Image source={require('../../main/assets/icons/icon_info.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container__callsrecents__border} />

                    <TouchableOpacity style={styles.container__callsrecents__button}
                        onPress={() => this.props.navigation.navigate(
                            'Calling',
                            {
                                firstname: 'Caro',
                                lastname: 'Dupuis',
                                category: 'Portable',
                            })}
                    >
                        <View style={styles.container__callsrecents__infos}>
                            <View style={styles.container__callsrecents__call}>
                                <Image source={require('../../main/assets/icons/contact/calls/icon_last_call.png')} />
                                <Text style={styles.container__callsrecents__names}>Caro</Text>
                            </View>
                            <Text style={styles.container__callsrecents__category}>portable</Text>
                        </View>

                        <View style={styles.container__callsrecents__infotime}>
                            <Text style={styles.container__callsrecents__time}>28/05/2020</Text>
                            <Image source={require('../../main/assets/icons/icon_info.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container__callsrecents__border} />

                    <TouchableOpacity style={styles.container__callsrecents__button}
                        onPress={() => this.props.navigation.navigate(
                            'Calling',
                            {
                                firstname: 'Prorio',
                                category: 'Téléphone',
                            })}
                    >
                        <View style={styles.container__callsrecents__infos}>
                            <View style={styles.container__callsrecents__call__noIcon}>
                                <Text style={styles.container__callsrecents__names}>Proprio</Text>
                            </View>
                            <Text style={styles.container__callsrecents__category}>téléphone</Text>
                        </View>

                        <View style={styles.container__callsrecents__infotime}>
                            <Text style={styles.container__callsrecents__time}>25/05/2020</Text>
                            <Image source={require('../../main/assets/icons/icon_info.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container__callsrecents__border} />

                    <TouchableOpacity style={styles.container__callsrecents__button}
                        onPress={() => this.props.navigation.navigate(
                            'Calling',
                            {
                                firstname: "Pop's",
                                category: 'Portable',
                            })}
                    >
                        <View style={styles.container__callsrecents__infos}>
                            <View style={styles.container__callsrecents__call}>
                                <Image source={require('../../main/assets/icons/contact/calls/icon_last_call.png')} />
                                <Text style={styles.container__callsrecents__names}>Pop's</Text>
                            </View>
                            <Text style={styles.container__callsrecents__category}>portable</Text>
                        </View>

                        <View style={styles.container__callsrecents__infotime}>
                            <Text style={styles.container__callsrecents__time}>21/05/2020</Text>
                            <Image source={require('../../main/assets/icons/icon_info.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container__callsrecents__border} />

                    <TouchableOpacity style={styles.container__callsrecents__button}
                        onPress={() => this.props.navigation.navigate(
                            'Calling',
                            {
                                firstname: 'Ben ❤️',
                                category: 'Portable',
                            })}
                    >
                        <View style={styles.container__callsrecents__infos}>
                            <View style={styles.container__callsrecents__call__noIcon}>
                                <Text style={styles.container__callsrecents__names}>Ben ❤️</Text>
                            </View>
                            <Text style={styles.container__callsrecents__category}>portable</Text>
                        </View>

                        <View style={styles.container__callsrecents__infotime}>
                            <Text style={styles.container__callsrecents__time}>21/05/2020</Text>
                            <Image source={require('../../main/assets/icons/icon_info.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container__callsrecents__border} />

                    <TouchableOpacity style={styles.container__callsrecents__button}
                        onPress={() => this.props.navigation.navigate(
                            'Calling',
                            {
                                firstname: 'Ben ❤️',
                                category: 'Portable',
                            })}
                    >
                        <View style={styles.container__callsrecents__infos}>
                            <View style={styles.container__callsrecents__call__noIcon}>
                                <Text style={styles.container__callsrecents__names}>Ben ❤️</Text>
                            </View>
                            <Text style={styles.container__callsrecents__category}>portable</Text>
                        </View>

                        <View style={styles.container__callsrecents__infotime}>
                            <Text style={styles.container__callsrecents__time}>20/05/2020</Text>
                            <Image source={require('../../main/assets/icons/icon_info.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container__callsrecents__border} />
                    
                    <TouchableOpacity style={styles.container__callsrecents__button}
                        onPress={() => this.props.navigation.navigate(
                            'Calling',
                            {
                                firstname: 'Anouk',
                                lastname: 'Bellefeuille',
                                category: 'Portable',
                            })}
                    >
                        <View style={styles.container__callsrecents__infos}>
                            <View style={styles.container__callsrecents__call__noIcon}>
                                <Text style={styles.container__callsrecents__names}>Anouk</Text>
                            </View>
                            <Text style={styles.container__callsrecents__category}>portable</Text>
                        </View>

                        <View style={styles.container__callsrecents__infotime}>
                            <Text style={styles.container__callsrecents__time}>18/05/2020</Text>
                            <Image source={require('../../main/assets/icons/icon_info.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container__callsrecents__border} />
                    
                    <TouchableOpacity style={styles.container__callsrecents__button}
                        onPress={() => this.props.navigation.navigate(
                            'Calling',
                            {
                                firstname: 'Anouk',
                                lastname: 'Bellefeuille',
                                category: 'Portable',
                            })}
                    >
                        <View style={styles.container__callsrecents__infos}>
                            <View style={styles.container__callsrecents__call}>
                                <Image source={require('../../main/assets/icons/contact/calls/icon_last_call.png')} />
                                <Text style={styles.container__callsrecents__names}>Anouk</Text>
                            </View>
                            <Text style={styles.container__callsrecents__category}>portable</Text>
                        </View>

                        <View style={styles.container__callsrecents__infotime}>
                            <Text style={styles.container__callsrecents__time}>13/05/2020</Text>
                            <Image source={require('../../main/assets/icons/icon_info.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container__callsrecents__border} />

                    <TouchableOpacity style={styles.container__callsrecents__button}
                        onPress={() => this.props.navigation.navigate(
                            'Calling',
                            {
                                firstname: 'Ben ❤️',
                                category: 'Portable',
                            })}
                    >
                        <View style={styles.container__callsrecents__infos}>
                            <View style={styles.container__callsrecents__call}>
                                <Image source={require('../../main/assets/icons/contact/calls/icon_last_call.png')} />
                                <Text style={styles.container__callsrecents__names}>Ben ❤️</Text>
                            </View>
                            <Text style={styles.container__callsrecents__category}>portable</Text>
                        </View>

                        <View style={styles.container__callsrecents__infotime}>
                            <Text style={styles.container__callsrecents__time}>12/05/2020</Text>
                            <Image source={require('../../main/assets/icons/icon_info.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={{marginBottom: '15%'}}/>
                </View>
                </ScrollView>
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
        marginTop: '-9%',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    container__callsrecents__title: {
        width: '100%',
        marginTop: 24,
        fontSize: 25,
        textAlign: 'left',
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        color: R.colors.dark_blue,
    },

    container__callsrecents__button: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        fontSize: 15,
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
