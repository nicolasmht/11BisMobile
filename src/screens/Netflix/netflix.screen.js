import React, { Component } from 'react'
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import R from '../../res/R'

export default class NetflixScreen extends Component {
    constructor() {
        super()
        this.state = {
            text: <Text style={styles.container__netflix__text}>NETFLIX</Text>,
            isJade: false
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
        }, 2000)
    }

    isJade() {
        return (
            <View>
                <ScrollView>
                    <Image style={styles.container__netflix__logo} source={require('../../main/assets/icons/netflix/N.png')} />
                    <View style={styles.container__netflix__fiche}>
                        <Image style={styles.container__netflix__affiche} source={require('../../main/assets/images/netflix/fenetre_sur_cour.png')} />
                        <View style={styles.container__netflix__infos}>
                            <Text style={{color: R.colors.saumon, fontSize: 12, fontFamily: R.fonts.Agrandir_TextBold}}>Recommandé à 98%</Text>
                            <View style={{ marginTop: '-1%', display: 'flex', flexDirection: 'row', alignItems: 'baseline'}}>
                                <Image source={require('../../main/assets/icons/netflix/thumb_up.png')} />
                                <Text style={{marginLeft: 5, color: R.colors.saumon, fontSize: 12, fontFamily: R.fonts.Agrandir_Regular, opacity: 0.5}}>197 654</Text>
                            </View>
                            <Text style={{color: R.colors.saumon, fontSize: 12, fontFamily: R.fonts.Agrandir_Regular, opacity: 0.5}}>16+</Text>
                            <View style={{ marginTop: '-1.5%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ marginTop: '3.5%', marginRight: 5,color: R.colors.saumon, fontSize: 12, fontFamily: R.fonts.Agrandir_Regular, opacity: 0.5}}>1h52 mins</Text>
                                <Image source={require('../../main/assets/icons/netflix/HD.png')} />
                            </View>
                        </View>
                        <View style={styles.container__netflix__desc}>
                            <Text style={{ color: R.colors.saumon, fontSize: 12, fontFamily: R.fonts.Agrandir_Regular, textAlign: 'justify'}}>Reporter-photographe coincé sur une chaise roulante après un accident, L.B. Jeffries passe ses journées à observer son voisinage depuis sa fenêtre. Un soir, il entend un cri venant de l’appartement d’en face et voit sortir son voisin, Thorwald , chargé d’une lourde valise. Il le soupçonne d’avoir tué sa femme, et confie ses soupçons à un ami détective, Doyle ...</Text>
                            <Text style={{color: R.colors.saumon, fontSize: 12, fontFamily: R.fonts.Agrandir_Regular, opacity: 0.7, paddingTop: 8}}>Réalisé par : Alfred Hitchcock</Text>
                            <Text style={{ color: R.colors.saumon, fontSize: 12, fontFamily: R.fonts.Agrandir_Regular, opacity: 0.7, paddingTop: 8}}>Distribution : James Stewart, Grace Kelly, Wendell Corey, Thelma Ritter, Raymond Burr, Judith Evelyn, Ross Bagdasarian</Text>
                        </View>
                        <View style={{width: '98%', paddingTop: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                            <Image style={{ borderColor: R.colors.dark_blue, borderWidth: 1 }} source={require('../../main/assets/images/netflix/cache.png')} />
                            <Image style={{ borderColor: R.colors.dark_blue, borderWidth: 1 }} source={require('../../main/assets/images/netflix/dans_la_maison.png')} />
                            <Image style={{ borderColor: R.colors.dark_blue, borderWidth: 1 }} source={require('../../main/assets/images/netflix/la_vie_des_autres.png')} />
                        </View>
                        <View style={{ width: '98%', paddingTop: 8, marginBottom: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Image style={{ borderColor: R.colors.dark_blue, borderWidth: 1 }} source={require('../../main/assets/images/netflix/lhomme.png')} />
                            <Image style={{ borderColor: R.colors.dark_blue, borderWidth: 1 }} source={require('../../main/assets/images/netflix/face_cache.png')} />
                            <Image style={{ borderColor: R.colors.dark_blue, borderWidth: 1 }} source={require('../../main/assets/images/netflix/vie_cache.png')} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }

    netflix() {
        if (this.state.text != null) {
            return (
                <View>
                    {this.loaderText()}
                </View>
            )
        } else {
            return (
                <View style={styles.container__netflix__main}>
                {
                    !this.state.isJade
                    ? <View>
                        <Text style={styles.container__netflix__main__text}>Qui est ce ?</Text>
                        <View style={{ width: '50%', height: '40%', paddingTop: '20%', marginLeft: '10%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={styles.container__netflix__main__button__saumon} onPress={() => this.setState({ isJade: true })}>
                                <Image source={require('../../main/assets/icons/netflix/blue_mask.png')} />
                                <Text style={styles.container__netflix__main__name}>Jade</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.container__netflix__main__button__blue}>
                                <Image source={require('../../main/assets/icons/netflix/saumon_mask.png')} />
                                <Text style={styles.container__netflix__main__name}>Ben</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '50%', paddingTop: '15%', marginLeft: '10%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={styles.container__netflix__main__button__blue}>
                                <Image source={require('../../main/assets/icons/netflix/saumon_mask.png')} />
                                <Text style={styles.container__netflix__main__name}>Parasite 1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.container__netflix__main__button__saumon}>
                                <Image source={require('../../main/assets/icons/netflix/blue_mask.png')} />
                                <Text style={styles.container__netflix__main__name}>Parasite 2</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    : this.isJade()
                }
                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../main/assets/fond/Points.png')} style={styles.backgroundImage}>
                    <View style={styles.container__netflix}>
                        {this.netflix()}
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

    container__netflix: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },

    container__netflix__text: {
        display: 'flex',
        alignSelf: 'center',
        color: R.colors.saumon,
        fontSize: 40,
        fontFamily: R.fonts.Agrandir_GrandHeavy,

    },

    container__netflix__main: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    container__netflix__main__text: {
        color: R.colors.saumon,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_Regular,
        textAlign: 'center',
        position: 'absolute', 
        top: '-18%',
        left: '24%',
    },

    container__netflix__main__button__saumon: {
        width: 82, 
        height: 82, 
        backgroundColor: R.colors.saumon,
        borderColor: R.colors.dark_blue,
        borderWidth: 1,
    },

    container__netflix__main__button__blue: {
        width: 82, 
        height: 82, 
        backgroundColor: R.colors.blue,
        borderColor: R.colors.dark_blue,
        borderWidth: 1,
    },

    container__netflix__main__name: {
        color: R.colors.saumon,
        fontSize: 15, 
        fontFamily: R.fonts.Agrandir_Regular,
        textAlign: 'center',
    },

    container__netflix__fiche: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '5%',
    },

    container__netflix__logo: {
        marginTop: '10%',
        marginLeft: '2%',
    },
    container__netflix__affiche: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: R.colors.dark_blue,
        paddingBottom: 10,
    },

    container__netflix__infos: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        paddingTop: '5%',
    },
    container__netflix__desc: {
        width: '96%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: '5%',
    },
    
})
