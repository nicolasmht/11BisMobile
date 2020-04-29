
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class ComponentFicheContactScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container__contact}>
                    <View style={styles.container__contact__photo}></View>
                    <Text style={styles.container__contact__name}>{this.props.route.params.names}</Text>
                    <View style={styles.container__contact__icons}>
                        <TouchableOpacity style={styles.container__contact__icons__join} >
                            <Image source={require('../../main/assets/icons/icon_message.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.container__contact__icons__join} 
                        onPress={() => this.props.navigation.navigate(
                            'AcceptCall', 
                            { names: 'Agathe Fradet', 
                              category:'portable'
                            })}
                        >
                            <Image source={require('../../main/assets/icons/icon_call.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container__contact__icons__join}>
                            <Image source={require('../../main/assets/icons/icon_mail.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container__contact__border} />
                    <TouchableOpacity 
                    style={styles.container__contact__infos} 
                    onPress={() => this.props.navigation.navigate(
                        'AcceptCall',
                        {
                            names: 'Agathe Fradet',
                            category: 'portable'
                        })}
                    >
                        <Text style={styles.container__contacts__infos__category}>Portable</Text>
                        <Text style={styles.container__contacts__infos_number}>06 56 78 97 03</Text>
                    </TouchableOpacity>
                    <View style={styles.container__contact__infos__border} />
                    <TouchableOpacity 
                    style={styles.container__contact__infos} 
                    onPress={() => this.props.navigation.navigate(
                        'AcceptCall',
                        {
                            names: 'Agathe Fradet',
                            category: 'domicile'
                        })}
                    >
                        <Text style={styles.container__contacts__infos__category}>Bureau</Text>
                        <Text style={styles.container__contacts__infos_number}>02 41 78 97 03</Text>
                    </TouchableOpacity>
                    <View style={styles.container__contact__infos__border} />
                    <TouchableOpacity style={styles.container__contact__infos}>
                        <Text style={styles.container__contacts__infos__category}>E-mail</Text>
                        <Text style={styles.container__contacts__infos_number}>agathe.fradet@gmail.com</Text>
                    </TouchableOpacity>
                    <View style={styles.container__contact__infos__border} />
                    <TouchableOpacity style={styles.container__contact__infos}>
                        <Text style={styles.container__contacts__infos__category}>Domicile</Text>
                        <Text style={styles.container__contacts__infos_address}>11</Text>
                        <Text style={styles.container__contacts__infos_address}>Rue Jaques Coeur</Text>
                        <Text style={styles.container__contacts__infos_address}>75011 Paris</Text>
                        <Text style={styles.container__contacts__infos_address}>France</Text>
                        <Image style={styles.container__contact__infos__map} source={require('../../main/assets/icons/map.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#FFB99D',
    },

    container__contact: {
        width: '100%',
        height: '100%',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    container__contact__photo: {
        width: '21%',
        height: '11%',
        backgroundColor: '#2A3669',
        borderRadius: 50,
        marginTop: 15,
    },

    container__contact__name: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',
    },

    container__contact__icons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 20
    },

    container__contact__icons__join: {
        marginRight: 20
    },

    container__contact__border: {
        width: '115%',
        height: 1,
        marginTop: 20,
        backgroundColor: '#ad7761',
    },

    container__contact__infos: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 10
    },

    container__contacts__infos__category: {
        fontSize: 13
    },

    container__contacts__infos_number: {
        fontSize: 15,
        fontWeight: 'bold'
    },

    container__contacts__infos_address: {
        fontSize: 15,
        fontWeight: 'bold'
    },

    container__contact__infos__map: {
        position: 'absolute',
        right: 0
    },

    container__contact__infos__border: {
        width: '100%',
        height: 1,
        marginTop: 20,
        backgroundColor: '#ad7761',
    }
})
