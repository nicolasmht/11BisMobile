import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import R from '../../res/R'
import MessagesData from '../../data/messages.json';
import moment from 'moment'
import 'moment/locale/fr';

export default class MessagesListScreen extends Component {
    render() {
        data = MessagesData
        date = data[0].messages[43].date
        return (
            <View style={styles.container}>
                <View style={styles.container__messages}>
                    <Text style={styles.container__messages__title}>Messages</Text>
                    <View style={styles.container__messages__list}>
                        {data.map(item => {
                            const messages_length = item.messages.length - 1
                            const message_date = item.messages[messages_length].date
                            const message_text = item.messages[messages_length].text
                            return (
                                <TouchableOpacity style={styles.container__messages__list__main} onPress={() => this.props.navigation.navigate('Messages', { id: item.id })}>
                                    <Image source={require('../../main/assets/icons/messages/pp.png')}/>
                                    <View style={styles.container__messages__list__main__data}>
                                        <View style={styles.container__messages__list__main__data__firstline}>
                                            <Text style={styles.container__messages__list__main__data__name}>{item.name}</Text>
                                            <View style={styles.container__messages__list__main__data__firstline__date}>
                                                <Text style={styles.container__messages__list__main__data__date}>{moment(message_date).format('dddd')}</Text>
                                                <Image source={require('../../main/assets/icons/messages/chevron.png')} />
                                            </View>
                                        </View>
                                        <Text style={styles.container__messages__list__main__data__text} numberOfLines={1} ellipsizeMode='tail'>{message_text}</Text>
                                        {item.border === true
                                            ? <View style={styles.container__messages__border} />
                                            : <View />
                                        }
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                        }
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

    container__messages: {
        width: '100%',
        height: '100%',
        paddingTop: -10,
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
    },

    container__messages__title: {
        fontSize: 20,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        color: R.colors.dark_blue,
        paddingTop: 20,
        paddingBottom: 20
    },

    container__messages__list: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },

    container__messages__list__main: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: -8

    },
    container__messages__list__main__data: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'baseline',
        alignSelf: 'baseline',
        marginRight: 5,
        marginTop: '5%'
    },
    
    container__messages__list__main__data__firstline: {
        width: 300,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'baseline'
    },

    container__messages__list__main__data__firstline__date: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: -4
    },

    container__messages__list__main__data__name: {
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_TextBold,
        color: R.colors.dark_blue,
    },

    container__messages__list__main__data__date: {
        fontSize: 12,
        fontFamily: R.fonts.Agrandir_Regular,
        color: R.colors.blue,
        paddingRight: 5,
    },

    container__messages__list__main__data__text: {
        width: 300,
        fontSize: 12,
        fontFamily: R.fonts.Agrandir_Regular,
        color: R.colors.dark_blue,
        opacity: 0.5,
    },

    container__messages__border: {
        width: '120%',
        height: 1,
        marginTop: '5%',
        marginLeft: '-20%',
        backgroundColor: R.colors.dark_saumon,
    }
})
