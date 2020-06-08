import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native'
import notesData from '../../data/notes.json';
import moment from 'moment'
import 'moment/locale/fr';
import R from '../../res/R'

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
                            !note.content.servir && !note.subtitle3 && !note.content.list
                                ? <View>
                                    <View style={styles.container__note__content}>
                                    <Text style={styles.container__note__content__title}>{note.content.subtitle1}</Text>
                                    <FlatList
                                        data={note.content.ingredients}
                                        renderItem={({ item }) => <Text style={styles.container__note__content__text__list}>- {item.ingredient}</Text>}
                                    />
                                    </View>
                                    {
                                        note.title === "Pain pita"
                                        ? <View style={styles.container__note__content}>
                                            <Text style={styles.container__note__content__title}>{note.content.subtitle2}</Text>
                                            <Text style={styles.container__note__content__day}>{note.content.preparation.day1}</Text>
                                            <FlatList
                                                data={note.content.preparation.etape1}
                                                renderItem={({ item }) => <Text style={styles.container__note__content__text__list}>{item.etape}</Text>}
                                            />
                                            <Text style={styles.container__note__content__day}>{note.content.preparation.day2}</Text>
                                            <FlatList
                                                data={note.content.preparation.etape2}
                                                renderItem={({ item }) => <Text style={styles.container__note__content__text__list}>{item.etape}</Text>}
                                            />
                                        </View>
                                        : <View style={styles.container__note__content}>
                                            <Text style={styles.container__note__content__title}>{note.content.subtitle2}</Text>
                                            <FlatList
                                                data={note.content.preparation.etapes}
                                                renderItem={({ item }) => <Text style={styles.container__note__content__text__list}>{item.etape}</Text>}
                                            />
                                        </View>
                                    }
                                    
                                </View>
                                :  !note.content.list
                                ? <View>
                                    <View style={styles.container__note__content}>
                                        <Text style={styles.container__note__content__title}>{note.content.subtitle1}</Text>
                                        <FlatList
                                            data={note.content.ingredients}
                                            renderItem={({ item }) => <Text style={styles.container__note__content__text__list}>- {item.ingredient}</Text>}
                                        />
                                    </View>
                                    <View style={styles.container__note__content}>
                                        <Text style={styles.container__note__content__title}>{note.content.subtitle2}</Text>
                                        <FlatList
                                            data={note.content.servir.etapes}
                                            renderItem={({ item }) => <Text style={styles.container__note__content__text__list}>{item.etape}</Text>}
                                        />
                                        <Text style={styles.container__note__content__title}>{note.content.subtitle3}</Text>
                                        <FlatList
                                            data={note.content.preparation.etapes}
                                            renderItem={({ item }) => <Text style={styles.container__note__content__text__list}>{item.etape}</Text>}
                                        />
                                    </View>
                                </View>
                                : <View style={styles.container__note__content}>
                                    {
                                        note.content.list.length <= 4
                                        ? <FlatList
                                            data={note.content.list}
                                            renderItem={({ item }) => <Text style={styles.container__note__content__list}>{item.list1}</Text>}
                                        />
                                        : <View>
                                            <FlatList
                                                data={note.content.list}
                                                renderItem={({ item }) => <Text style={styles.container__note__content__list}>{item.list1}</Text>}
                                            />
                                        <FlatList
                                            data={note.content.list}
                                            renderItem={({ item }) => <Text style={styles.container__note__content__list}>{item.list2}</Text>}
                                            style={{marginTop: '-80%'}}
                                        />
                                        <FlatList
                                            data={note.content.list}
                                            renderItem={({ item }) => <Text style={styles.container__note__content__list}>{item.list3}</Text>}
                                            style={{marginTop: '-80%'}}
                                        />
                                        <FlatList
                                            data={note.content.list}
                                            renderItem={({ item }) => <Text style={styles.container__note__content__list}>{item.list4}</Text>}
                                            style={{marginTop: '-80%'}}
                                        />
                                        <FlatList
                                            data={note.content.list}
                                            renderItem={({ item }) => <Text style={styles.container__note__content__list}>{item.list5}</Text>}
                                            style={{marginTop: '-80%'}}
                                        />
                                        <FlatList
                                            data={note.content.list}
                                            renderItem={({ item }) => <Text style={styles.container__note__content__list}>{item.list6}</Text>}
                                            style={{marginTop: '-80%'}}
                                        />
                                    </View>
                                    }
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
        backgroundColor: R.colors.saumon
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
        color: R.colors.dark_blue,
        fontSize: 12,
        opacity: 0.5,
        textAlign: 'center',
        fontFamily: R.fonts.Agrandir_Regular,
    },

    container__note__title: {
        color: R.colors.dark_blue,
        fontSize: 20,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        paddingTop: '3%',
        paddingBottom: '5%',
    },

    container__note__content__title: {
        color: R.colors.dark_blue,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_TextBold,
        paddingTop: '5%',
    },

    container__note__content__text__list: {
        color: R.colors.dark_blue,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_Regular,
        paddingTop: '2%',
        paddingLeft: '5%',
    },

    container__note__content__list: {
        color: R.colors.dark_blue,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_Regular,
        paddingTop: 0,
        paddingLeft: 0,
    },

    container__note__content__text: {
        color: R.colors.dark_blue,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_Regular,
        paddingTop: '2%',
    },

    container__note__content__day: {
        color: R.colors.dark_blue,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_ThinItalic,
        paddingTop: '5%',
        paddingBottom: '2%',
        paddingLeft: '5%',

    },

})
