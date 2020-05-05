
import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

export default class CallsMessagerieScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container__callsmessagerie}>
                    <Text style={styles.container__callsmessagerie__title}>Messagerie</Text>
                    <View style={styles.container__callsmessagerie__border} />
                    <TouchableOpacity style={styles.container__callsmessagerie__button}>
                        <Text style={styles.container__callsmessagerie__text}>Appeler la messagerie</Text>
                    </TouchableOpacity>
                    <View style={styles.container__bottom__bar}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CallsFavoris')}>
                            <Image source={require('../../main/assets/icons/contact/calls/favoris.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CallsRecents')}>
                            <Image source={require('../../main/assets/icons/contact/calls/recents.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CallsContacts')}>
                            <Image source={require('../../main/assets/icons/contact/calls/contacts.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CallsClavier')}>
                            <Image source={require('../../main/assets/icons/contact/calls/clavier.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../main/assets/icons/contact/calls/messagerie_clicked.png')} />
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

    container__callsmessagerie: {
        width: '100%',
        height: '100%',
        marginTop: '3%',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    container__callsmessagerie__title: {
        width: '100%',
        marginTop: 24,
        fontSize: 30,
        textAlign: 'left',
        fontWeight: 'bold'
    },

    container__callsmessagerie__button: {
        width: '50%',
        height: '5%',
        marginTop: '70%',
        textAlign: 'center',
        fontSize: 30,
        color: '#151C38',
        borderWidth: 1,
        borderRadius: 5,
    },

    container__callsmessagerie__text: {
        textAlign: 'center',
        color: '#151C38',
        padding: 8,
    },

    container__callsmessagerie__border: {
        width: '100%',
        height: 1,
        marginTop: 6,
        backgroundColor: '#151C38',
        opacity: 0.2
    },

    container__bottom__bar: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        marginTop: '80%'
    }
})
