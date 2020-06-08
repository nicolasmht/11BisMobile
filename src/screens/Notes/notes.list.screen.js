import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import notesData from '../../data/notes.json';
import moment from 'moment'
import R from '../../res/R'

export default class NotesListScreen extends Component {
    render() {
        const dataList = notesData
        return (
            <View style={styles.container}>
            <ScrollView>
                <View style={styles.container__noteslist}>
                    <Text style={styles.container__noteslist__title}>Notes</Text>
                    <View style={styles.container__noteslist__border} />
                    <View>
                        {dataList.map(item => {
                            return (
                                <TouchableOpacity style={styles.container__noteslist__main} onPress={() => this.props.navigation.navigate('Note', { id: item.id })}>
                                    <Text style={styles.container__noteslist__main__title}>{item.title}</Text><Text style={styles.container__noteslist__main__date}>{moment(item.date).format('L')}</Text>
                                </TouchableOpacity>
                            )})
                        }
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

    container__noteslist: {
        width: '100%',
        height: '100%',
        marginTop: '4%',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },

    container__noteslist__title: {
        width: '100%',
        marginTop: 24,
        fontSize: 25,
        textAlign: 'left',
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        color: R.colors.dark_blue,
    },

    container__noteslist__main: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(21, 28, 56, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 15,
        paddingBottom: 15,

    },

    container__noteslist__main__title: {
        fontSize: 18,
        fontFamily: R.fonts.Agrandir_TextBold,
        color: R.colors.dark_blue,
    },

    container__noteslist__main__date: {
        fontFamily: R.fonts.Agrandir_Regular,
        color: R.colors.dark_blue,
        fontSize: 12,
        opacity: 0.5,
    },

    container__noteslist__border: {
        width: '100%',
        height: 1,
        marginTop: 6,
        backgroundColor: R.colors.dark_blue,
        opacity: 0.2,
    },

})
