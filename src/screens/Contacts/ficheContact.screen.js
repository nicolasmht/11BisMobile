
import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

export default class ComponentFicheContactScreen extends Component {
    render() {
        const { firstname, lastname, portable, fixe, mail, address } = this.props.route.params
        return (
            <View style={styles.container}>
                <View style={styles.container__contact}>
                    <View style={styles.container__contact__photo}></View>
                    <View style={styles.container__contact__names}>
                        <Text style={styles.container__contact__name}>{!firstname ? '' : firstname}</Text>
                        <Text style={styles.container__contact__name}>{!lastname ? '' : lastname}</Text>
                    </View>
                    <View style={styles.container__contact__icons}>
                        <TouchableOpacity style={styles.container__contact__icons__join} >
                            <Image source={require('../../main/assets/icons/contact/icon_message.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.container__contact__icons__join} 
                        onPress={() => this.props.navigation.navigate(
                            'Calling', 
                            {
                                firstname: firstname, 
                                lastname: lastname || '', 
                                category: 'Portable', 
                            })}
                        >
                            <Image source={require('../../main/assets/icons/contact/icon_call.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container__contact__icons__join}>
                            <Image source={require('../../main/assets/icons/contact/icon_mail.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container__contact__border} />
                    {
                        !portable
                        ? <View />
                        : <TouchableOpacity
                            style={styles.container__contact__infos}
                            onPress={() => this.props.navigation.navigate(
                                'Calling',
                                {
                                    firstname: firstname,
                                    lastname: lastname,
                                    category: 'Portable', 
                                })}
                        >
                            <Text style={styles.container__contacts__infos__category}>Portable</Text>
                            <Text style={styles.container__contacts__infos_number}>{portable}</Text>
                            <View style={styles.container__contact__infos__border} />
                        </TouchableOpacity>
                    }
                    {
                        !fixe 
                        ? <View/>
                        : <TouchableOpacity
                            style={styles.container__contact__infos}
                            onPress={() => this.props.navigation.navigate(
                                'Calling',
                                {
                                    firstname: firstname,
                                    lastname: lastname,
                                    category: 'Domicile', 
                                })}
                        >
                            <Text style={styles.container__contacts__infos__category}>Domicile</Text>
                            <Text style={styles.container__contacts__infos_number}>{fixe}</Text>
                            <View style={styles.container__contact__infos__border} />
                        </TouchableOpacity>
                    }
                    {
                        !mail
                        ? <View />
                        : <TouchableOpacity style={styles.container__contact__infos}>
                            <Text style={styles.container__contacts__infos__category}>E-mail</Text>
                            <Text style={styles.container__contacts__infos_number}>{mail}</Text>
                            <View style={styles.container__contact__infos__border} />
                        </TouchableOpacity>
                    } 
                    {
                        !address
                        ? <View />
                        :  <TouchableOpacity style={styles.container__contact__infos}>
                            <Text style={styles.container__contacts__infos__category}>Domicile</Text>
                            <Text style={styles.container__contacts__infos_address}>{address.numero}</Text>
                            <Text style={styles.container__contacts__infos_address}>{address.rue}</Text>
                            <Text style={styles.container__contacts__infos_address}>{address.departement}</Text>
                            <Image style={styles.container__contact__infos__map} source={require('../../main/assets/icons/contact/map.png')} />
                        </TouchableOpacity>
                    }
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

    container__contact: {
        width: '100%',
        height: '100%',
        marginTop: '12%',
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

    container__contact__names: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    container__contact__name: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',
        paddingRight: 10
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
        marginTop: 15,
    },

    container__contacts__infos__category: {
        fontSize: 13
    },

    container__contacts__infos_number: {
        fontSize: 15,
        fontWeight: 'bold',
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
        marginTop: 15,
        backgroundColor: '#ad7761',

    }
})
