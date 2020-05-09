import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native'
import notesData from '../../data/notes.json';
import moment from 'moment'
import 'moment/locale/fr';

export default class NoteScreen extends Component {
    render() {
        const id = this.props.route.params.id
        const dataList = notesData
        const note = dataList[id]
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.container__note}>
                        <Text style={styles.container__note__date}>{moment(note.date).format('LLLL')}</Text>
                        <Text style={styles.container__note__title}>{note.title}</Text>
                            {
                                !note.content.desc
                                ? <View>
                                    <View style={styles.container__note__content}>
                                    <Text style={styles.container__note__content__title}>{note.content.subtitle1}</Text>
                                    <FlatList
                                        data={note.content.ingredients}
                                        renderItem={({ item }) => <Text style={styles.container__note__content__text}>- {item.ingredient}</Text>}
                                    />
                                    </View>
                                    <View style={styles.container__note__content}>
                                        <Text style={styles.container__note__content__title}>{note.content.subtitle2}</Text>
                                        <Text style={styles.container__note__content__day}>{note.content.preparation.day1}</Text>
                                        <FlatList
                                            data={note.content.preparation.etape1}
                                            renderItem={({ item }) => <Text style={styles.container__note__content__text}>{item.etape}</Text>}
                                        />
                                        <Text style={styles.container__note__content__day}>{note.content.preparation.day2}</Text>
                                        <FlatList
                                            data={note.content.preparation.etape2}
                                            renderItem={({ item }) => <Text style={styles.container__note__content__text}>{item.etape}</Text>}
                                        />
                                    </View>
                                    </View>
                                : <View style={styles.container__note__content}>
                                    <Text>{note.content.desc}</Text>
                                    </View>
                            }
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#FFB99D',
    },

    container__note: {
        width: '100%',
        height: '100%',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
    },

    container__note__date: {
        width: '100%',
        color: '#151C38',
        fontSize: 12,
        opacity: 0.5,
        textAlign: 'center',
    },

    container__note__title: {
        color: '#151C38',
        fontSize: 20,
        fontWeight: '900',
        paddingTop: '3%',
        paddingBottom: '5%',
    },

    container__note__content__title: {
        color: '#151C38',
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: '5%',
        paddingBottom: '3%',
    },

    container__note__content__text: {
        color: '#151C38',
        fontSize: 15,
        paddingTop: '2%',
        paddingLeft: '5%',
    },

    container__note__content__day: {
        color: '#151C38',
        fontSize: 15,
        paddingTop: '5%',
        paddingBottom: '2%',
        paddingLeft: '5%',

    },

})
