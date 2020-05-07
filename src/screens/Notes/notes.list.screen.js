import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import notesData from '../../data/notes.json';
import moment from 'moment'

export default class NotesListScreen extends Component {
    render() {
        const dataList = notesData.list
        return (
            <View style={styles.container}>
                <View style={styles.container__noteslist}>
                    <Text style={styles.container__noteslist__title}>Notes</Text>
                    <View style={styles.container__noteslist__border} />
                    <View>
                        {dataList.map(item => <TouchableOpacity style={styles.container__noteslist__main} onPress={() => this.props.navigation.navigate('Note', { id: item.id })}><Text style={styles.container__noteslist__main__title}>{item.title}</Text><Text style={styles.container__noteslist__main__date}>{moment(item.date).format('L')}</Text></TouchableOpacity>)}
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#FFB99D',
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
        fontSize: 30,
        textAlign: 'left',
        fontWeight: 'bold'
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
        color: '#151C38',
        fontSize: 15,
        fontWeight: 'bold',
    },

    container__noteslist__main__date: {
        color: '#151C38',
        fontSize: 12,
        opacity: 0.5,
    },

    container__noteslist__border: {
        width: '100%',
        height: 1,
        marginTop: 6,
        backgroundColor: '#151C38',
        opacity: 0.2
    },

})
