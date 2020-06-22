import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native'
import R from '../res/R'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../main/assets/fond/Points.png')} style={styles.backgroundImage}>
                    <View style={styles.container__buttonApp}>
                        <TouchableOpacity style={styles.container__buttonApp__icon} onPress={() => this.props.navigation.navigate('RappelsList')}>
                            <Image source={require('../main/assets/icons/app/rappels.png')}/>
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
                        <TouchableOpacity style={styles.container__buttonApp__icon} onPress={() => onPress()}>
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
        marginTop: '-25%',
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
