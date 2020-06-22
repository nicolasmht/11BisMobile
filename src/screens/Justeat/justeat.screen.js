import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import R from '../../res/R'
import commandesData from '../../data/justeat.json';

export default class JusteatScreen extends Component {
    render() {
        const id = this.props.route.params.id
        const justeat = commandesData[id]
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.container__justeat}>
                        <Image style={styles.container__justeat__cover} source={{ uri: justeat.cover }} />
                        <View style={{width: '100%', display: 'flex', flexDirection: 'column' , alignItems: 'center', marginTop: -23}}>
                            <Image style={styles.container__justeat__photo} source={{ uri: justeat.photo }} />
                            <Text style={{ marginTop: 20, color: R.colors.dark_blue, opacity: 0.5, fontFamily: R.fonts.Agrandir_Regular, fontSize: 13 }}>Votre commande chez</Text>
                            <Text style={{ color: R.colors.blue, fontFamily: R.fonts.Agrandir_Regular, fontSize: 13 }}>{justeat.name}</Text>
                            <Text style={styles.container__justeat__date}>{justeat.date}</Text>
                            <View style={{width: '100%', marginTop: 20, borderColor: R.colors.dark_blue, borderWidth: 1}}>
                                <Text style={{ marginTop: 20, color: R.colors.dark_blue, opacity: 0.5, fontFamily: R.fonts.Agrandir_Regular, fontSize: 13, textAlign: 'center' }}>Livraison à :</Text>
                                <Text style={{ color: R.colors.blue, fontFamily: R.fonts.Agrandir_Regular, fontSize: 13, textAlign: 'center', marginBottom: 15 }}>{justeat.address}</Text>
                            </View>
                            <View style={{ width: '90%', marginTop: 20, borderBottomColor: R.colors.dark_blue, borderBottomWidth: 1 }}>
                                <Text style={{ color: R.colors.dark_blue, fontFamily: R.fonts.Agrandir_Regular, fontSize: 13 }}>Récapitulatif de la commande</Text>
                                <Text style={{ color: R.colors.dark_blue, opacity: 0.5, fontFamily: R.fonts.Agrandir_Regular, fontSize: 13, marginBottom: 10 }}>N° de commande {justeat.n_commande}</Text>
                            </View>
                            <View style={{ width: '90%', marginTop: 20, borderBottomColor: R.colors.dark_blue, borderBottomWidth: 1 }}>
                                {
                                    justeat.commande.map(item => {
                                        return (
                                            <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ color: R.colors.dark_blue, opacity: 0.5, fontFamily: R.fonts.Agrandir_Regular, fontSize: 13, marginBottom: 10 }}>{item.plat}</Text>
                                                <Text style={{ color: R.colors.dark_blue, opacity: 0.5, fontFamily: R.fonts.Agrandir_Regular, fontSize: 13, marginBottom: 10 }}>{item.prix} €</Text>
                                            </View>
                                        )
                                    })
                                }
                                </View>
                                <View style={{ width: '90%', marginTop: 20, borderBottomColor: R.colors.dark_blue, borderBottomWidth: 1 }}>
                                    <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ color: R.colors.dark_blue, opacity: 0.5, fontFamily: R.fonts.Agrandir_Regular, fontSize: 13, marginBottom: 10 }}>Sous-total</Text>
                                        <Text style={{ color: R.colors.dark_blue, opacity: 0.5, fontFamily: R.fonts.Agrandir_Regular, fontSize: 13, marginBottom: 10 }}>{justeat.total} €</Text>
                                    </View>
                                    <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ color: R.colors.dark_blue, opacity: 0.5, fontFamily: R.fonts.Agrandir_Regular, fontSize: 13, marginBottom: 10 }}>Frais de livraison</Text>
                                    <Text style={{ color: R.colors.dark_blue, opacity: 0.5, fontFamily: R.fonts.Agrandir_Regular, fontSize: 13, marginBottom: 10 }}>{justeat.livraison} {justeat.livraison != "Gratuit" ? '€' : ''}</Text>
                                    </View>
                            </View>
                            <View style={{ width: '90%', marginTop: 20 }}>
                                <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: R.colors.dark_blue, fontFamily: R.fonts.Agrandir_Regular, fontSize: 13, marginBottom: 10 }}>Payé par</Text>
                                    <Text style={{ color: R.colors.dark_blue, fontFamily: R.fonts.Agrandir_Regular, fontSize: 13, marginBottom: 10 }}>Carte bancaire</Text>
                                </View>
                                <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: R.colors.dark_blue, fontFamily: R.fonts.Agrandir_TextBold, fontSize: 13, marginBottom: 10 }}>Total</Text>
                                    <Text style={{ color: R.colors.dark_blue, fontFamily: R.fonts.Agrandir_TextBold, fontSize: 13, marginBottom: 10 }}>{justeat.total} €</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: R.colors.saumon
    },

    container__justeat: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },

    container__justeat__cover: {
        width: 450,
        height: 100,
        borderColor: R.colors.dark_blue,
    },
    container__justeat__photo: {
        width: 65,
        height: 65,
        borderColor: R.colors.dark_blue,
        borderWidth: 1,
        borderRadius: 8,
    },
    container__justeat__date: {
        color: R.colors.blue,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        fontSize: 13,
        borderColor: R.colors.dark_blue,
        borderWidth: 1,
        padding: 15,
        marginTop: 20
    },
})
