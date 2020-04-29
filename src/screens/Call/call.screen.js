
import React from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Image } from 'react-native';

export default class CallScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../main/assets/fond/Points.png')} style={styles.backgroundImage}>
                <View style={styles.container__call__infos}>
                    <Text style={styles.container__call__infos__name}>{this.props.route.params.names}</Text>
                    <Text style={styles.container__call__infos__category}>{this.props.route.params.category}</Text>
                </View>
                    <View style={styles.container__call__events}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../../main/assets/icons/cancel_call.png')} />
                        <Text style={styles.container__call__text}>Refuser</Text>
                    </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AcceptCall',{names: 'Agathe Fradet'})}>
                        <Image source={require('../../main/assets/icons/accept_call.png')} />
                        <Text style={styles.container__call__text}>Accepter</Text>
                    </TouchableOpacity>
                </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#2A3669'
    },
    backgroundImage: {
        width: '100%',
        height: '100%'
    },

    container__call__infos: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40%'
    },

    container__call__infos__name: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 10,
        color: '#FFB99D',
    },

    container__call__infos__category: {
        fontSize: 20,
        color: '#FFB99D',
    },

    container__call__events: {
        width: '100%',
        height: '62%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },

    container__call__text: {
        marginTop: 10,
        display: 'flex',
        alignSelf: 'center',
        fontSize: 15,
        color: '#FFB99D',
    }
})