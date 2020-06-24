import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import R from '../res/R'
import Data_Notificaton from '../data/notifications.json'
import moment from 'moment'
import 'moment/locale/fr';

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            isNotifications: false,
            isHome: true,
            isWidget: false,
        }
    }
    Notifications() {
        return (
            <View style={styles.container__notifications__main}>
                <ScrollView>
                    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10%' }}>
                        <Text style={{ fontFamily: R.fonts.Agrandir_GrandLight, fontSize: 80, color: R.colors.saumon }}>{moment().format('LT')}</Text>
                        <Text style={{ marginTop: '-5%', fontFamily: R.fonts.Agrandir_Regular, fontSize: 20, color: R.colors.saumon }}>{moment().format('dddd LL')}</Text>
                    </View>
                    {
                        Data_Notificaton.map(item => {
                            return (
                                <View style={styles.container__notifications__main__content}>
                                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: 10 }} >
                                        <Image style={{ width: 20, height: 20, padding: 10 }} source={{ uri: item.logo }} />
                                        <Text style={{ marginTop: 4, paddingLeft: 10, textTransform: 'uppercase', fontFamily: R.fonts.Agrandir_TextBold, fontSize: 13, color: R.colors.dark_blue }}>{item.app}</Text>
                                        <Text style={{ width: '30%', marginTop: 4, marginLeft: '40%', textAlign: 'right', fontFamily: R.fonts.Agrandir_Regular, fontSize: 13, color: R.colors.dark_blue, opacity: 0.5 }}>{item.time}</Text>
                                    </View>
                                    <View style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
                                        <Text style={{ fontFamily: R.fonts.Agrandir_TextBold, fontSize: 13, color: R.colors.dark_blue }}>{item.name}</Text>
                                        <Text style={{ paddingTop: 8, marginBottom: 8, fontFamily: R.fonts.Agrandir_Regular, fontSize: 13, color: R.colors.dark_blue }}>{item.text}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }
    isHome() {
        return (
            <View>
                <TouchableOpacity style={styles.container__button__notifications} onPress={() => this.setState({ isNotifications: !this.state.isNotifications })} />
                <View style={styles.container__buttonApp}>
                    <TouchableOpacity style={styles.container__buttonApp__icon} onPress={() => this.props.navigation.navigate('RappelsList')}>
                        <Image source={require('../main/assets/icons/app/rappels.png')} />
                        <Text style={styles.container__buttonApp__icon__text}>Rappels</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container__buttonApp__icon} onPress={() => this.props.navigation.navigate('GoogleMaps')}>
                        <Image source={require('../main/assets/icons/app/maps.png')} />
                        <Text style={styles.container__buttonApp__icon__text}>Google Maps</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container__buttonApp__icon} onPress={() => this.props.navigation.navigate('Contacts')}>
                        <Image source={require('../main/assets/icons/app/contacts.png')} />
                        <Text style={styles.container__buttonApp__icon__text}>Contacts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container__buttonApp__icon} onPress={() => this.props.navigation.navigate('Horloge')}>
                        <Image source={require('../main/assets/icons/app/horloge.png')} />
                        <Text style={styles.container__buttonApp__icon__text}>Horloge</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.container__buttonApp__icon} onPress={() => this.props.navigation.navigate('Calendrier')}>
                        <Image source={require('../main/assets/icons/app/calendar.png')} />
                        <Text style={styles.container__buttonApp__icon__text}>Calendrier</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container__buttonApp__icon} onPress={() => this.props.navigation.navigate('Meteo')}>
                        <Image source={require('../main/assets/icons/app/meteo.png')} />
                        <Text style={styles.container__buttonApp__icon__text}>Météo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container__buttonApp__icon} onPress={() => this.props.navigation.navigate('Sante')}>
                        <Image source={require('../main/assets/icons/app/sante.png')} />
                        <Text style={styles.container__buttonApp__icon__text}>Santé</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container__buttonApp__icon} onPress={() => this.props.navigation.navigate('Lydia')}>
                        <Image source={require('../main/assets/icons/app/lydia.png')} />
                        <Text style={styles.container__buttonApp__icon__text}>Lydia</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.container__buttonApp__icon} onPress={() => this.props.navigation.navigate('Photos')}>
                        <Image source={require('../main/assets/icons/app/photo.png')} />
                        <Text style={styles.container__buttonApp__icon__text}>Photos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container__buttonApp__icon} onPress={() => this.props.navigation.navigate('Instagram')}>
                        <Image source={require('../main/assets/icons/app/instagram.png')} />
                        <Text style={styles.container__buttonApp__icon__text}>Instagram</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container__buttonApp__icon} onPress={() => this.props.navigation.navigate('Netflix')}>
                        <Image source={require('../main/assets/icons/app/netflix.png')} />
                        <Text style={styles.container__buttonApp__icon__text}>Netflix</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container__buttonApp__icon} onPress={() => this.props.navigation.navigate('GoogleHome')}>
                        <Image source={require('../main/assets/icons/app/home.png')} />
                        <Text style={styles.container__buttonApp__icon__text}>Google Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container__buttonApp__icon} onPress={() => this.props.navigation.navigate('JusteatList')}>
                        <Image source={require('../main/assets/icons/app/justeat.png')} />
                        <Text style={styles.container__buttonApp__icon__text}>Just Eat</Text>
                    </TouchableOpacity>
                    <View style={styles.container__buttonApp__noIcon} />
                    <View style={styles.container__buttonApp__noIcon} />
                    <View style={styles.container__buttonApp__noIcon} />
                </View>
                <View style={styles.container__button__bubbles}>
                    <TouchableOpacity style={[this.state.isWidget ? styles.container__button__bubble__selected : styles.container__button__bubble]} onPress={() => this.setState({ isHome: false, isWidget: true })} />
                    <TouchableOpacity style={[this.state.isHome ? styles.container__button__bubble__selected : styles.container__button__bubble]} onPress={() => this.setState({ isHome: true, isWidget: false })} />
                </View>
                {/* icon fav */}
                <View style={styles.container__buttonAppFav}>
                    <View style={styles.container__buttonAppFav__background}></View>
                    <TouchableOpacity style={styles.container__buttonApp__iconFav} onPress={() => this.props.navigation.navigate('CallsClavier')}>
                        <Image source={require('../main/assets/icons/app/call.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container__buttonApp__iconFav} onPress={() => this.props.navigation.navigate('MessagesList')}>
                        <Image source={require('../main/assets/icons/app/messagerie.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container__buttonApp__iconFav} onPress={() => this.props.navigation.navigate('NotesList')}>
                        <Image source={require('../main/assets/icons/app/notes.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container__buttonApp__iconFav} onPress={() => this.props.navigation.navigate('Spotify')}>
                        <Image source={require('../main/assets/icons/app/spotify.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    isWidget() {
        return (
            <View style={{ width: '100%', height: '100.65%' }}>
                <TouchableOpacity style={styles.container__button__notifications} onPress={() => this.setState({ isNotifications: !this.state.isNotifications })} />
                <View style={styles.container__block__main}>
                    <View style={styles.container__block__main__content}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: 10 }} >
                            <Image style={{ width: 20, height: 20, padding: 10 }} source={require('../main/assets/icons/app/calendar.png')} />
                            <Text style={{ marginTop: 4, paddingLeft: 10, textTransform: 'uppercase', fontFamily: R.fonts.Agrandir_TextBold, fontSize: 13, color: R.colors.dark_blue }}>à venir</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', padding: 10 }}>
                            <View style={{ width: 4, height: '90%', backgroundColor: R.colors.blue, borderRadius: 10 }} />
                            <View style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
                                <Text style={{ fontFamily: R.fonts.Agrandir_TextBold, fontSize: 13, color: R.colors.dark_blue }}>{moment('08/01/2020').format('LL')}</Text>
                                <Text style={{ paddingTop: 8, marginBottom: 8, fontFamily: R.fonts.Agrandir_Regular, fontSize: 13, color: R.colors.dark_blue }}>Fêtes de Bayonne (annulées)</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.container__block__main__content}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'baseline', padding: 10 }}>
                            <Image style={{ width: 20, height: 20, padding: 10 }} source={require('../main/assets/icons/app/call.png')} />
                            <Text style={{ marginTop: 4, paddingLeft: 10, textTransform: 'uppercase', fontFamily: R.fonts.Agrandir_TextBold, fontSize: 13, color: R.colors.dark_blue }}>favoris</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'baseline' }}>
                            <TouchableOpacity 
                                style={{ display: 'flex', flexDirection: 'column', padding: 10 }}
                                onPress={() => this.props.navigation.navigate(
                                'Calling',
                                {
                                    firstname: 'La Mama',
                                    category: 'Portable',
                                })}
                            >
                                <View style={{ width: '94%', height: '57%', backgroundColor: R.colors.blue, borderRadius: 100, borderColor: R.colors.dark_blue, borderWidth: 1 }} />
                                <Text style={{ paddingTop: 8, fontFamily: R.fonts.Agrandir_Regular, fontSize: 13, color: R.colors.dark_blue }}>La Mama</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'baseline', padding: 10 }}
                                onPress={() => this.props.navigation.navigate(
                                'Calling',
                                {
                                    firstname: 'Ben ❤️',
                                    category: 'Portable',
                                })}
                            >
                                <View style={{ width: '122%', height: '57%', backgroundColor: R.colors.blue, borderRadius: 100, borderColor: R.colors.dark_blue, borderWidth: 1 }} />
                                <Text style={{ marginTop: 2, fontFamily: R.fonts.Agrandir_Regular, fontSize: 13, color: R.colors.dark_blue }}>Ben ❤️</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.container__button__bubbles}>
                    <TouchableOpacity style={[this.state.isWidget ? styles.container__button__bubble__selected : styles.container__button__bubble]} onPress={() => this.setState({ isHome: false, isWidget: true })} />
                    <TouchableOpacity style={[this.state.isHome ? styles.container__button__bubble__selected : styles.container__button__bubble]} onPress={() => this.setState({ isHome: true, isWidget: false })} />
                </View>
                {/* icon fav */}
                <View style={styles.container__buttonAppFav}>
                    <View style={styles.container__buttonAppFav__background}></View>
                    <TouchableOpacity style={styles.container__buttonApp__iconFav} onPress={() => this.props.navigation.navigate('CallsClavier')}>
                        <Image source={require('../main/assets/icons/app/call.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container__buttonApp__iconFav} onPress={() => this.props.navigation.navigate('MessagesList')}>
                        <Image source={require('../main/assets/icons/app/messagerie.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container__buttonApp__iconFav} onPress={() => this.props.navigation.navigate('NotesList')}>
                        <Image source={require('../main/assets/icons/app/notes.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container__buttonApp__iconFav} onPress={() => this.props.navigation.navigate('Spotify')}>
                        <Image source={require('../main/assets/icons/app/spotify.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    render() {
        console.log('home:', this.state.isHome)
        console.log('widget:', this.state.isWidget)
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../main/assets/fond/Points.png')} style={styles.backgroundImage}>
                    {
                        !this.state.isNotifications
                            ? <View>
                                {this.state.isHome
                                    ? this.isHome()
                                    : this.state.isWidget
                                        ? this.isWidget()
                                        : <View />
                                }
                            </View>
                            : <View>
                                <ImageBackground source={require('../main/assets/fond/Points.png')} style={styles.backgroundImage}>
                                    <TouchableOpacity style={styles.container__button__notifications} onPress={() => this.setState({ isNotifications: !this.state.isNotifications })} />
                                    <View>
                                        {this.Notifications()}
                                    </View>
                                </ImageBackground>
                            </View>
                    }
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: R.colors.blue,
    },

    container__button__notifications: {
        width: '15%',
        height: 6,
        top: 35,
        left: '43%',
        right: 0,
        bottom: 0,
        marginBottom: '3%',
        backgroundColor: 'rgba(255, 185, 157,0.7)',
        borderRadius: 10,
        position: 'relative',
        zIndex: 999999999,
    },

    container__notifications__main: {
        width: '100%',
        height: '100%',
        marginTop: '6%',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    container__notifications__main__content: {
        width: '100%',
        height: 'auto',
        marginTop: '5%',
        backgroundColor: R.colors.saumon,
        opacity: 0.7,
        borderRadius: 10,
    },

    container__block__main: {
        width: '100%',
        height: '100%',
        position: 'relative',
        top: '-20%',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    container__block__main__content: {
        width: '100%',
        height: '20%',
        marginTop: '5%',
        backgroundColor: 'rgba(255, 185, 157,0.7)',
        borderRadius: 10,
    },

    container__button__bubbles: {
        width: '100%',
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: '75%',
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        zIndex: 10,
    },

    container__button__bubble: {
        width: '2.5%',
        height: '13%',
        backgroundColor: 'rgba(255, 185, 157,0.5)',
        borderRadius: 100,
        marginRight: 10
    },

    container__button__bubble__selected: {
        width: '2.5%',
        height: '13%',
        backgroundColor: 'rgb(255, 185, 157)',
        borderRadius: 100,
        marginRight: 10
    },

    container__buttonApp: {
        width: '100%',
        height: '100%',
        padding: 24,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    container__buttonApp__icon: {
        marginTop: '10%',
        display: 'flex',
        alignItems: 'center',
    },

    container__buttonApp__noIcon: {
        width: 75,
        height: 75
    },

    container__buttonAppFav: {
        width: '100%',
        height: '15%',
        marginTop: '-30%',
        padding: 24,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    container__buttonAppFav__background: {
        width: '114%',
        height: '35%',
        marginTop: '-230%',
        marginLeft: -8,
        position: 'absolute',
        backgroundColor: R.colors.saumon,
        opacity: 0.7,
    },
    container__buttonApp__icon__text: {
        fontSize: 12,
        fontFamily: R.fonts.Agrandir_Regular,
        color: R.colors.saumon,
        paddingTop: 8,
    },

    backgroundImage: {
        width: '100%',
        height: '100%'
    },
})
