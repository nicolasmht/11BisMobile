import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default class ContactsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container__contacts}>
                    <Text style={styles.container__contacts__text}>Contacts</Text>
                    <View style={styles.container__contacts__block}>
                        <View style={styles.container__contacts__block__background}>
                            <Text style={styles.container__contacts__block__letter}>A</Text>
                        </View>
                        <TouchableOpacity style={styles.container__contacts__block__person} onPress={() => this.props.navigation.navigate('FicheContact', {names:'Agathe Fradet'})}>
                            <Text style={styles.container__contacts__block__person__firstname}>Agathe</Text>
                            <Text style={styles.container__contacts__block__person__lastname}>Fradet</Text>
                        </TouchableOpacity>
                        <View style={styles.container__contacts__border} />
                        
                        <TouchableOpacity style={styles.container__contacts__block__person}>
                            <Text style={styles.container__contacts__block__person__firstname}>Agathe</Text>
                            <Text style={styles.container__contacts__block__person__lastname}>Fradet</Text>
                        </TouchableOpacity>
                        <View style={styles.container__contacts__border} />

                        <TouchableOpacity style={styles.container__contacts__block__person}>
                            <Text style={styles.container__contacts__block__person__firstname}>Agathe</Text>
                            <Text style={styles.container__contacts__block__person__lastname}>Fradet</Text>
                        </TouchableOpacity>
                        <View style={styles.container__contacts__border} />

                        <TouchableOpacity style={styles.container__contacts__block__person}>
                            <Text style={styles.container__contacts__block__person__firstname}>Agathe</Text>
                            <Text style={styles.container__contacts__block__person__lastname}>Fradet</Text>
                        </TouchableOpacity>
                        <View style={styles.container__contacts__border} />

                        <TouchableOpacity style={styles.container__contacts__block__person}>
                            <Text style={styles.container__contacts__block__person__firstname}>Agathe</Text>
                            <Text style={styles.container__contacts__block__person__lastname}>Fradet</Text>
                        </TouchableOpacity>
                        <View style={styles.container__contacts__border} />

                        <TouchableOpacity style={styles.container__contacts__block__person}>
                            <Text style={styles.container__contacts__block__person__firstname}>Agathe</Text>
                            <Text style={styles.container__contacts__block__person__lastname}>Fradet</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container__contacts__block}>
                        <View style={styles.container__contacts__block__background}>
                            <Text style={styles.container__contacts__block__letter}>B</Text>
                        </View>
                        <TouchableOpacity style={styles.container__contacts__block__person}>
                            <Text style={styles.container__contacts__block__person__firstname}>Bastien</Text>
                            <Text style={styles.container__contacts__block__person__lastname}>Robert</Text>
                        </TouchableOpacity>
                        <View style={styles.container__contacts__border} />

                        <TouchableOpacity style={styles.container__contacts__block__person}>
                            <Text style={styles.container__contacts__block__person__firstname}>Baptiste</Text>
                            <Text style={styles.container__contacts__block__person__lastname}>Lefebvre</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container__contacts__block}>
                        <View style={styles.container__contacts__block__background}>
                            <Text style={styles.container__contacts__block__letter}>C</Text>
                        </View>
                        <TouchableOpacity style={styles.container__contacts__block__person}>
                            <Text style={styles.container__contacts__block__person__firstname}>Charlotte</Text>
                            <Text style={styles.container__contacts__block__person__lastname}>Mandinaud</Text>
                        </TouchableOpacity>
                        <View style={styles.container__contacts__border} />

                        <TouchableOpacity style={styles.container__contacts__block__person}>
                            <Text style={styles.container__contacts__block__person__firstname}>Clément</Text>
                            <Text style={styles.container__contacts__block__person__lastname}>Roche</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container__contacts__block}>
                        <View style={styles.container__contacts__block__background}>
                            <Text style={styles.container__contacts__block__letter}>D</Text>
                        </View>
                        <TouchableOpacity style={styles.container__contacts__block__person}>
                            <Text style={styles.container__contacts__block__person__firstname}>Damien</Text>
                            <Text style={styles.container__contacts__block__person__lastname}>Montastier</Text>
                        </TouchableOpacity>
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

    container__contacts: {
        width: '100%',
        height: '100%',
        marginTop: '4%',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },

    container__contacts__text: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 20
    },

    container__contacts__block: {
        width: '100%',
        height: 'auto',
        marginBottom: 10,
    },

    container__contacts__block__background: {
        width: '120%',
        marginBottom: 10,
        marginLeft: -24,
        paddingLeft: 24,
        paddingTop: 2,
        backgroundColor: '#2A3669',
        marginBottom: 5
    },

    container__contacts__block__letter: {
        fontSize: 15,
        color: '#FFB99D',
        fontWeight: 'bold',
    },

    container__contacts__block__person: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        paddingTop: 10,
    },

    container__contacts__block__person__firstname: {
        color: '#151C38',
        fontSize: 15,
        fontWeight: 'bold',
        paddingRight: 5,
    },

    container__contacts__block__person__Lastname: {
        color: '#151C38',
        fontSize: 15,
        fontWeight: 'bold',
    },

    container__contacts__border: {
        width: '100%',
        height: 1,
        marginTop: 10,
        backgroundColor: '#ad7761',
    }
})
