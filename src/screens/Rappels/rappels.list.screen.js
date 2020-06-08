import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import rappelsData from '../../data/rappels.json';
import moment from 'moment'
import R from '../../res/R'

export default class RappelsListScreen extends Component {
    render() {
        const dataList = rappelsData
        return (
            <View style={styles.container}>
                <View style={styles.container__rappelslist}>
                    <Text style={styles.container__rappelslist__title}>Mes listes</Text>
                        <View style={styles.container__rappelslist__block}>
                            {dataList.map(item => {
                                return (
                                    <TouchableOpacity style={styles.container__rappelslist__main} onPress={() => this.props.navigation.navigate('Rappels', { id: item.id })}>
                                        <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Image source={require('../../main/assets/icons/rappels/icon_list.png')} />
                                            {
                                                item.share 
                                                ?  <View style={{ width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                                                    <Text style={styles.container__rappelslist__main__dossier}>{item.dossier}</Text>
                                                    <Text style={styles.container__container__rappelslist__main__share}>{item.share}</Text>
                                                </View>
                                                : <View style={{ width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingTop: 5}}>
                                                    <Text style={styles.container__rappelslist__main__dossier}>{item.dossier}</Text>
                                                </View>
                                            }
                                           
                                            <Text style={styles.container__rappelslist__main__length}>{item.lists.length}</Text>
                                            <Image source={require('../../main/assets/icons/rappels/icon_chevron.png')} />
                                        </View>
                                        <View style={item.border ? styles.container__rappelslist__border : ''} />

                                    </TouchableOpacity>
                                )
                            })}
                    </View>
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

    container__rappelslist: {
        width: '100%',
        height: '100%',
        marginTop: '4%',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },

    container__rappelslist__title: {
        width: '100%',
        marginTop: 24,
        fontSize: 25,
        textAlign: 'left',
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        color: R.colors.dark_blue,
    },

    container__rappelslist__main: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 5,
        paddingBottom: 5,

    },

    container__rappelslist__main__dossier: {
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        color: R.colors.dark_blue,
        width: '90%',
    },

    container__container__rappelslist__main__share: {
        fontFamily: R.fonts.Agrandir_Regular,
        color: R.colors.dark_blue,
        fontSize: 12,
        opacity: 0.5,
    },

    container__rappelslist__main__length: {
        fontFamily: R.fonts.Agrandir_Regular,
        color: R.colors.dark_blue,
        fontSize: 15,
        opacity: 0.5,
        marginTop: 8,
        marginLeft: 10
    },

    container__rappelslist__border: {
        width: '92%',
        height: 1,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: '14%',
        backgroundColor: R.colors.dark_blue,
        opacity: 0.2,
    },

    container__rappelslist__block: {
        width: '100%',
        backgroundColor: R.colors.saumon,
        borderColor: R.colors.dark_blue,
        borderWidth: 2,
        borderRadius: 10,
        padding: 20,
        marginTop: '5%',
    },

})
