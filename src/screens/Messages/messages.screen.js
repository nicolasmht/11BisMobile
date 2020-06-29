import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView, Image, Dimensions} from 'react-native'
import R from '../../res/R'
import MessagesData from '../../data/messages.json';
import moment from 'moment'
import 'moment/locale/fr';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default class MessagesScreen extends Component {
    render() {
        const id = this.props.route.params.id
        const data = MessagesData[id]
        const height_1 = 3750
        const height_2 = 1640
        const height_3 = 4620
        const height_4 = 2240
        const height_5 = 2540
        const height_6 = 690
        const height_7 = 0
        const height_8 = 690
        return (
            <View style={styles.container}>
                <View style={styles.container__messages}>
                    <View style={styles.container__messages__infos}>
                        <Image source={require('../../main/assets/icons/messages/pp.png')} />
                        <Text style={styles.container__messages__name}>{data.name}</Text>
                        <View style={styles.container__messages__border} />
                    </View>
                    <ScrollView contentOffset={{ 
                        y: id === 0 ? height_1 
                        : id === 1 ? height_2 
                        : id === 2 ? height_3 
                        : id === 3 ? height_4
                        : id === 4 ? height_5
                        : id === 5 ? height_6
                        : id === 6 ? height_7
                        : id === 7 ? height_8
                        : 0 
                    }}>
                        {data.messages.map(item => {
                            return (
                                <View style={{paddingTop: 15}}>
                                    {
                                        item.personne === "Jade" && !item.info && !item.picture
                                            ? <View style={styles.container__messages__right}>
                                                <Text style={styles.container__messages__right__text}>{item.text}</Text>
                                                <Text style={styles.container__messages__right__date}>
                                                    {moment(item.date).format('lll')}
                                                </Text>
                                            </View>
                                            : item.picture
                                            ? <View style={styles.container__messages__right__picture}>
                                                <Image style={{ position: 'absolute', top: '-200%', width: '110%', height: '500%', resizeMode: 'contain', marginBottom: 10 }} source={{uri: item.picture}} />
                                                <Text style={styles.container__messages__right__date__picture}>
                                                    {moment(item.date).format('lll')}
                                                </Text>
                                            </View>
                                            : item.personne != "Jade" && !item.info && !item.notif
                                            ? <View style={styles.container__messages__left}>
                                                <Text style={styles.container__messages__left__name}>
                                                    {item.personne}
                                                </Text>
                                                <Text style={styles.container__messages__left__text}>
                                                    {item.text}
                                                </Text>
                                                <Text style={styles.container__messages__left__date}>
                                                    {moment(item.date).format('lll')}
                                                </Text>
                                            </View>
                                            : item.info
                                            ? <Text style={styles.container__messages__info__text}>
                                                {item.text}
                                            </Text>
                                            : <View/>
                                    }
                                </View>
                            )
                        })
                        }
                    </ScrollView>
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

    container__messages: {
        width: '100%',
        height: '100%',
        marginTop: 20,
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
    },

    container__messages__infos: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
    },

    container__messages__name: {
        fontSize: 12,
        fontFamily: R.fonts.Agrandir_Regular,
        color: R.colors.dark_blue,
        paddingTop: 20,
        paddingBottom: 20
    },

    container__messages__right: {
        width: '70%',
        height: 'auto',
        marginLeft: '30%',
        padding: 8,
        borderColor: R.colors.dark_blue,
        borderWidth: 1,
        borderRightWidth: 1,
        borderRadius: 10,
        backgroundColor: R.colors.blue,
    },

    container__messages__right__picture: {
        width: '70%',
        height: 'auto',
        marginLeft: '30%',
        padding: 8,
        borderColor: R.colors.dark_blue,
        borderWidth: 1,
        borderRightWidth: 1,
        borderRadius: 10,
        backgroundColor: R.colors.blue,
        // marginBottom: '-30%'
    },

    container__messages__right__text: {
        color: R.colors.saumon,
        fontFamily: R.fonts.Agrandir_Regular,
        fontSize: 13,
    },
    
    container__messages__right__date: {
        color: R.colors.saumon,
        opacity: 0.5,
        fontFamily: R.fonts.Agrandir_Regular,
        fontSize: 11,
        paddingTop: 5,
        textAlign: 'right'
    },
    container__messages__right__date__picture: {
        color: R.colors.saumon,
        opacity: 0.5,
        fontFamily: R.fonts.Agrandir_Regular,
        fontSize: 11,
        paddingTop: 5,
        textAlign: 'right',
        marginTop: '60%'
    },

    container__messages__left: {
        width: '70%',
        height: 'auto',
        padding: 8,
        borderColor: R.colors.dark_blue,
        borderWidth: 1,
        borderRightWidth: 1,
        borderRadius: 10,
        backgroundColor: R.colors.saumon,
    },

    container__messages__left__name: {
        color: R.colors.dark_blue,
        fontFamily: R.fonts.Agrandir_TextBold,
        fontSize: 13,
    },

    container__messages__left__text: {
        color: R.colors.dark_blue,
        fontFamily: R.fonts.Agrandir_Regular,
        fontSize: 13,
    },

    container__messages__left__date: {
        color: R.colors.dark_blue,
        opacity: 0.5,
        fontFamily: R.fonts.Agrandir_Regular,
        fontSize: 11,
        paddingTop: 5,
        textAlign: 'right'
    },

    container__messages__info__text: {
        color: R.colors.dark_blue,
        opacity: 0.5,
        fontFamily: R.fonts.Agrandir_Regular,
        fontSize: 13,
        textAlign: 'center'
    },

    container__messages__border: {
        width: '115%',
        height: 1,
        marginTop: '-2%',
        backgroundColor: R.colors.dark_saumon,
    }
})
