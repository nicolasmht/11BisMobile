import React, { Component } from 'react'
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import R from '../../res/R'
import lydiaData from '../../data/lydia.json'

export default class LydiaScreen extends Component {
    constructor() {
        super()
        this.state = {
            text: <Text style={styles.container__lydia__text}>LYDIA</Text>,
            isJade: false,
            isTransaction: true,
            isCompte: false,
        },
        this.data
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
        }, 2000)
        this.data = lydiaData
    }

    isTransaction() {
        return (
            <View>
                <ScrollView>
                    <Text style={styles.container__lydia__transfert__title}>La semaine dernière</Text>
                    <View style={styles.container__lydia__transfert}>
                        {this.data.transferts1.map(item => {
                            return (
                                <View>
                                    <View style={{ width: '82%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Image source={require('../../main/assets/icons/lydia/pp.png')} />
                                        <View style={{ width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                            <Text style={styles.container__lydia__transfert__person}>{item.person}</Text>
                                            <Text style={styles.container__lydia__transfert__name}>{item.name}</Text>
                                        </View>
                                        <Text style={{ marginRight: '-18%'}}>{item.transaction === '-' ? '-' : ''} {item.somme} €</Text>
                                    </View>
                                    <View style={item.border ? styles.container__lydia__transfert__border : ''} />

                                </View>
                            )
                        })
                        }
                    </View>

                    <Text style={styles.container__lydia__transfert__title}>Semaine du 1 Juin</Text>
                    <View style={styles.container__lydia__transfert}>
                        {this.data.transferts2.map(item => {
                            return (
                                <View>
                                    <View style={{ width: '82%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Image source={require('../../main/assets/icons/lydia/pp.png')} />
                                        <View style={{ width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                            <Text style={styles.container__lydia__transfert__person}>{item.person}</Text>
                                            <Text style={styles.container__lydia__transfert__name}>{item.name}</Text>
                                        </View>
                                        <Text style={{ marginRight: '-18%' }}>{item.transaction === '-' ? '-' : ''} {item.somme} €</Text>
                                    </View>
                                    <View style={item.border ? styles.container__lydia__transfert__border : ''} />

                                </View>
                            )
                        })
                        }
                    </View>

                    <Text style={styles.container__lydia__transfert__title}>Semaine du 16 Mars</Text>
                    <View style={styles.container__lydia__transfert__end}>
                        {this.data.transferts3.map(item => {
                            return (
                                <View>
                                    <View style={{ width: '82%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Image source={require('../../main/assets/icons/lydia/pp.png')} />
                                        <View style={{ width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                            <Text style={styles.container__lydia__transfert__person}>{item.person}</Text>
                                            <Text style={styles.container__lydia__transfert__name}>{item.name}</Text>
                                        </View>
                                        <Text style={{ marginRight: '-18%' }}>{item.transaction === '-' ? '-' : ''} {item.somme} €</Text>
                                    </View>
                                    <View style={item.border ? styles.container__lydia__transfert__border : ''} />

                                </View>
                            )
                        })
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
    isCompte() {
        return (
            <View>
                <Text style={styles.container__lydia__title}>Comptes</Text>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'space-around' }}>
                    <View style={styles.container__lydia__block}>
                        <Image style={{ marginBottom: '10%' }}source={require('../../main/assets/icons/lydia/icon_transaction.png')} />
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.container__lydia__euros}>25</Text>
                            <Text style={styles.container__lydia__centimes}>,73</Text>
                        </View>
                    </View>
                    <View style={styles.container__lydia__block}>
                        <View style={{ height: '65%' }} />
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.container__lydia__euros}>104</Text>
                            <Text style={styles.container__lydia__centimes}>,07</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    lydia() {
        if (this.state.text != null) {
            return (
                <View>
                    {this.loaderText()}
                </View>
            )
        } else {
            return (
                <View style={styles.container__lydia__main}>
                    {
                        this.state.isTransaction 
                        ? <View style={styles.container__lydia__category}>
                            <TouchableOpacity style={{width: '20%'}}>
                                <Image style={{ marginLeft: '20%' }} source={require('../../main/assets/icons/lydia/transaction_selected.png')} />
                                <View style={styles.container__lydia__border__selected} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '20%' }} onPress={() => this.setState({ isTransaction: false, isCompte: true })}>
                                <Image style={{ marginLeft: '20%' }} source={require('../../main/assets/icons/lydia/compte.png')} />
                                <View style={styles.container__lydia__border} />
                            </TouchableOpacity>
                        </View>
                        : <View style={styles.container__lydia__category}>
                            <TouchableOpacity style={{ width: '20%' }}onPress={() => this.setState({ isTransaction: true, isCompte: false, })}>
                                <Image  style={{ marginLeft: '20%' }} source={require('../../main/assets/icons/lydia/transaction.png')} />
                                <View style={styles.container__lydia__border} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{width: '20%'}}>
                                <Image  style={{ marginLeft: '20%' }} source={require('../../main/assets/icons/lydia/compte_selected.png')} />
                                <View style={styles.container__lydia__border__selected} />
                            </TouchableOpacity>
                        </View>
                    }
                    {
                        this.state.isTransaction ? this.isTransaction() : this.isCompte()
                    }
                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../main/assets/fond/Points.png')} style={styles.backgroundImage}>
                    <View style={styles.container__lydia}>
                        {this.lydia()}
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

    container__lydia: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },

    container__lydia__text: {
        display: 'flex',
        alignSelf: 'center',
        color: R.colors.saumon,
        fontSize: 40,
        fontFamily: R.fonts.Agrandir_GrandHeavy,

    },

    container__lydia__main: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    container__lydia__category: {
        width: '100%',
        height: '15%',
        marginTop: '10%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
    },

    container__lydia__border__selected: {
        marginTop: 10,
        borderBottomWidth: 3,
        borderBottomColor: R.colors.saumon,
    },

    container__lydia__border: {
        marginTop: 11,
        borderBottomWidth: 1,
        borderBottomColor: R.colors.saumon,
    },

    container__lydia__title: {
        color: R.colors.saumon,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_TextBold,
        marginBottom: 8,
        marginLeft: 10,
    },

    container__lydia__block: {
        width: 182,
        height: 182,
        backgroundColor: R.colors.saumon,
        borderColor: R.colors.dark_blue,
        borderWidth: 1,
        paddingTop: '20%',
        paddingLeft: 20,
        paddingBottom: 20,
        paddingRight: 20,
        marginRight: 10,
        marginLeft: 10,
    },

    container__lydia__euros: {
        color: R.colors.dark_blue,
        fontSize: 30,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
    },
    
    container__lydia__centimes: {
        color: R.colors.dark_blue,
        fontSize: 18,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
    },

    container__lydia__transfert: {
        width: '100%',
        backgroundColor: R.colors.saumon,
        borderTopColor: R.colors.dark_blue,
        borderTopWidth: 1,
        padding: 20,
        marginBottom: '10%',
    },

    container__lydia__transfert__end: {
        width: '100%',
        backgroundColor: R.colors.saumon,
        borderTopColor: R.colors.dark_blue,
        borderTopWidth: 1,
        padding: 20,
        marginBottom: '50%',
    },

    container__lydia__transfert__title: {
        color: R.colors.saumon,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_TextBold,
        marginBottom: 8,
    },

    container__lydia__transfert__border: {
        borderColor: R.colors.dark_blue,
        borderWidth: 0.5,
        width: '100%',
        marginTop: 20,
        marginBottom: 20
    },

    container__lydia__transfert__person: {
        color: R.colors.dark_blue,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
    },

    container__lydia__transfert__name: {
        color: R.colors.dark_blue,
        fontSize: 12,
        fontFamily: R.fonts.Agrandir_Regular,
    }


})
