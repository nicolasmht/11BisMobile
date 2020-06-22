import React, { Component } from 'react'
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import R from '../../res/R'
import commandesData from '../../data/justeat.json';
import moment from 'moment'
import 'moment/locale/fr';

export default class JusteatListScreen extends Component {
    constructor() {
        super()
        this.state = {
            text: <Text style={styles.container__justeat__text}>JUST EAT</Text>,
        }
    }

    loaderText() {
        return (
            this.state.text
        )
    }
    componentDidMount() {
        this.loading = setTimeout(() => {
            this.setState({
                text: null
            })
        }, 0)
    }

    justeat() {
        if (this.state.text != null) {
            return (
                <View>
                    {this.loaderText()}
                </View>
            )
        } else {
            return (
                <View style={styles.container__justeat__main}>
                    <Text style={styles.container__justeat__main__title}>Commandes</Text>
                    <View style={styles.container__justeat__main__border}/>
                    <View>
                        {
                            commandesData.map(item => {
                                return (
                                    <TouchableOpacity style={styles.container__justeat__block} onPress={() => this.props.navigation.navigate('Justeat', { id: item.id })}>
                                        <View style={styles.container__justeat__block__title}>
                                            <Image style={styles.container__justeat__photo} source={{ uri: item.photo }} />
                                            <Text style={styles.container__justeat__block__text}>{item.name}</Text>
                                        </View>
                                        <View style={styles.container__justeat__block__infos}>
                                            <Text style={styles.container__justeat__block__infos__date}>{moment(item.date).format('L')}</Text>
                                            <Text style={styles.container__justeat__block__infos__somme}>{item.total} €</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })

                        }
                    </View>
                    

                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../main/assets/fond/Points.png')} style={styles.backgroundImage}>
                    <View style={styles.container__justeat}>
                        {this.justeat()}
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

    container__justeat: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },

    container__justeat__text: {
        display: 'flex',
        alignSelf: 'center',
        color: R.colors.saumon,
        fontSize: 40,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
    },

    container__justeat__main: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: R.colors.saumon,
    },

    container__justeat__main__title: {
        height: '10%',
        color: R.colors.dark_blue,
        fontSize: 25,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        marginBottom: '-8%',
    },
    container__justeat__main__border: {
        width: '100%',
        borderColor: R.colors.dark_blue,
        borderWidth: 0.5,
        marginBottom: '8%',
        opacity: 0.5,
    },

    container__justeat__block: {
        width: '100%',
        borderColor: R.colors.dark_blue,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    container__justeat__photo: {
        width: 65,
        height: 65,
        borderColor: R.colors.dark_blue,
        borderWidth: 1,
        borderRadius: 8,
    },

    container__justeat__block__title: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10
    },

    container__justeat__block__text: {
        color: R.colors.blue,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_Regular,
        marginLeft: 10,
        marginTop: -20
    },

    container__justeat__block__infos: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: '20%',
        marginTop: '-10%',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        paddingBottom: 5
    },

    container__justeat__block__infos__date: {
        color: R.colors.dark_blue,
        opacity: 0.5,
        fontSize: 13,
        fontFamily: R.fonts.Agrandir_Regular,
        marginBottom: '8%',
    },

    container__justeat__block__infos__somme: {
        color: R.colors.blue,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        marginLeft: '40%',
        paddingRight: '5%',
    }


})
