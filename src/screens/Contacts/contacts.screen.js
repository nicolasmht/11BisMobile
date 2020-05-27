import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native'
import contactsData from '../../data/contacts.json';
import R from '../../res/R'

export default class ContactsScreen extends Component {
    render() {
        const contactsList = contactsData
        const lettre_a = contactsList.a
        const lettre_b = contactsList.b
        const lettre_c = contactsList.c
        const lettre_d = contactsList.d
        const lettre_e = contactsList.e
        const lettre_f = contactsList.f
        const lettre_g = contactsList.g
        const lettre_i = contactsList.i
        const lettre_j = contactsList.j
        const lettre_l = contactsList.l
        const lettre_m = contactsList.m
        const lettre_n = contactsList.n
        const lettre_p = contactsList.p
        const lettre_r = contactsList.r
        const lettre_s = contactsList.s
        const lettre_t = contactsList.t
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.container__contacts}>
                        <Text style={styles.container__contacts__title}>Contacts</Text>
                        <View style={styles.container__contacts__block}>
                            <View style={styles.container__contacts__block__background}>
                                <Text style={styles.container__contacts__block__letter}>A</Text>
                            </View>
                            {lettre_a.map(item => {
                                return (
                                    <TouchableOpacity style={styles.container__contacts__block__person} 
                                    onPress={() => this.props.navigation.navigate(
                                        'FicheContact', 
                                        { firstname: item.firstname, lastname: item.lastname, portable: item.portable, fixe: item.fixe, mail: item.mail, address: item.address }
                                    )}>
                                    <View style={styles.container__contacts__block__person__column}>
                                        <View style={styles.container__contacts__block__person__row}>
                                            <Text style={styles.container__contacts__block__person__firstname}>{item.firstname}</Text>
                                            <Text style={styles.container__contacts__block__person__lastname}>{item.lastname}</Text>
                                        </View>
                                        {item.border === true 
                                            ? <View style={styles.container__contacts__border}></View>
                                            : <View />
                                        }
                                    </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <View style={styles.container__contacts__block}>
                            <View style={styles.container__contacts__block__background}>
                                <Text style={styles.container__contacts__block__letter}>B</Text>
                            </View>
                            {lettre_b.map(item => {
                                return (
                                    <TouchableOpacity style={styles.container__contacts__block__person} 
                                    onPress={() => this.props.navigation.navigate(
                                        'FicheContact', 
                                        { firstname: item.firstname, lastname: item.lastname, portable: item.portable, fixe: item.fixe, mail: item.mail, address: item.address }
                                    )}>
                                    <View style={styles.container__contacts__block__person__column}>
                                        <View style={styles.container__contacts__block__person__row}>
                                            <Text style={styles.container__contacts__block__person__firstname}>{item.firstname}</Text>
                                            <Text style={styles.container__contacts__block__person__lastname}>{item.lastname}</Text>
                                        </View>
                                        {item.border === true 
                                            ? <View style={styles.container__contacts__border}></View>
                                            : <View />
                                        }
                                    </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <View style={styles.container__contacts__block}>
                            <View style={styles.container__contacts__block__background}>
                                <Text style={styles.container__contacts__block__letter}>C</Text>
                            </View>
                            {lettre_c.map(item => {
                                return (
                                    <TouchableOpacity style={styles.container__contacts__block__person} 
                                    onPress={() => this.props.navigation.navigate(
                                        'FicheContact', 
                                        { firstname: item.firstname, lastname: item.lastname, portable: item.portable, fixe: item.fixe, mail: item.mail, address: item.address }
                                    )}>
                                    <View style={styles.container__contacts__block__person__column}>
                                        <View style={styles.container__contacts__block__person__row}>
                                            <Text style={styles.container__contacts__block__person__firstname}>{item.firstname}</Text>
                                            <Text style={styles.container__contacts__block__person__lastname}>{item.lastname}</Text>
                                        </View>
                                        {item.border === true 
                                            ? <View style={styles.container__contacts__border}></View>
                                            : <View />
                                        }
                                    </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <View style={styles.container__contacts__block}>
                            <View style={styles.container__contacts__block__background}>
                                <Text style={styles.container__contacts__block__letter}>D</Text>
                            </View>
                            {lettre_d.map(item => {
                                return (
                                    <TouchableOpacity style={styles.container__contacts__block__person} 
                                    onPress={() => this.props.navigation.navigate(
                                        'FicheContact', 
                                        { firstname: item.firstname, lastname: item.lastname, portable: item.portable, fixe: item.fixe, mail: item.mail, address: item.address }
                                    )}>
                                    <View style={styles.container__contacts__block__person__column}>
                                        <View style={styles.container__contacts__block__person__row}>
                                            <Text style={styles.container__contacts__block__person__firstname}>{item.firstname}</Text>
                                            <Text style={styles.container__contacts__block__person__lastname}>{item.lastname}</Text>
                                        </View>
                                        {item.border === true 
                                            ? <View style={styles.container__contacts__border}></View>
                                            : <View />
                                        }
                                    </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <View style={styles.container__contacts__block}>
                            <View style={styles.container__contacts__block__background}>
                                <Text style={styles.container__contacts__block__letter}>E</Text>
                            </View>
                            {lettre_e.map(item => {
                                return (
                                    <TouchableOpacity style={styles.container__contacts__block__person} 
                                    onPress={() => this.props.navigation.navigate(
                                        'FicheContact', 
                                        { firstname: item.firstname, lastname: item.lastname, portable: item.portable, fixe: item.fixe, mail: item.mail, address: item.address }
                                    )}>
                                    <View style={styles.container__contacts__block__person__column}>
                                        <View style={styles.container__contacts__block__person__row}>
                                            <Text style={styles.container__contacts__block__person__firstname}>{item.firstname}</Text>
                                            <Text style={styles.container__contacts__block__person__lastname}>{item.lastname}</Text>
                                        </View>
                                        {item.border === true 
                                            ? <View style={styles.container__contacts__border}></View>
                                            : <View />
                                        }
                                    </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <View style={styles.container__contacts__block}>
                            <View style={styles.container__contacts__block__background}>
                                <Text style={styles.container__contacts__block__letter}>F</Text>
                            </View>
                            {lettre_f.map(item => {
                                return (
                                    <TouchableOpacity style={styles.container__contacts__block__person} 
                                    onPress={() => this.props.navigation.navigate(
                                        'FicheContact', 
                                        { firstname: item.firstname, lastname: item.lastname, portable: item.portable, fixe: item.fixe, mail: item.mail, address: item.address }
                                    )}>
                                    <View style={styles.container__contacts__block__person__column}>
                                        <View style={styles.container__contacts__block__person__row}>
                                            <Text style={styles.container__contacts__block__person__firstname}>{item.firstname}</Text>
                                            <Text style={styles.container__contacts__block__person__lastname}>{item.lastname}</Text>
                                        </View>
                                        {item.border === true 
                                            ? <View style={styles.container__contacts__border}></View>
                                            : <View />
                                        }
                                    </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <View style={styles.container__contacts__block}>
                            <View style={styles.container__contacts__block__background}>
                                <Text style={styles.container__contacts__block__letter}>G</Text>
                            </View>
                            {lettre_g.map(item => {
                                return (
                                    <TouchableOpacity style={styles.container__contacts__block__person} 
                                    onPress={() => this.props.navigation.navigate(
                                        'FicheContact', 
                                        { firstname: item.firstname, lastname: item.lastname, portable: item.portable, fixe: item.fixe, mail: item.mail, address: item.address }
                                    )}>
                                    <View style={styles.container__contacts__block__person__column}>
                                        <View style={styles.container__contacts__block__person__row}>
                                            <Text style={styles.container__contacts__block__person__firstname}>{item.firstname}</Text>
                                            <Text style={styles.container__contacts__block__person__lastname}>{item.lastname}</Text>
                                        </View>
                                        {item.border === true 
                                            ? <View style={styles.container__contacts__border}></View>
                                            : <View />
                                        }
                                    </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <View style={styles.container__contacts__block}>
                            <View style={styles.container__contacts__block__background}>
                                <Text style={styles.container__contacts__block__letter}>I</Text>
                            </View>
                            {lettre_i.map(item => {
                                return (
                                    <TouchableOpacity style={styles.container__contacts__block__person} 
                                    onPress={() => this.props.navigation.navigate(
                                        'FicheContact', 
                                        { firstname: item.firstname, lastname: item.lastname, portable: item.portable, fixe: item.fixe, mail: item.mail, address: item.address }
                                    )}>
                                    <View style={styles.container__contacts__block__person__column}>
                                        <View style={styles.container__contacts__block__person__row}>
                                            <Text style={styles.container__contacts__block__person__firstname}>{item.firstname}</Text>
                                            <Text style={styles.container__contacts__block__person__lastname}>{item.lastname}</Text>
                                        </View>
                                        {item.border === true 
                                            ? <View style={styles.container__contacts__border}></View>
                                            : <View />
                                        }
                                    </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <View style={styles.container__contacts__block}>
                            <View style={styles.container__contacts__block__background}>
                                <Text style={styles.container__contacts__block__letter}>J</Text>
                            </View>
                            {lettre_j.map(item => {
                                return (
                                    <TouchableOpacity style={styles.container__contacts__block__person} 
                                    onPress={() => this.props.navigation.navigate(
                                        'FicheContact', 
                                        { firstname: item.firstname, lastname: item.lastname, portable: item.portable, fixe: item.fixe, mail: item.mail, address: item.address }
                                    )}>
                                    <View style={styles.container__contacts__block__person__column}>
                                        <View style={styles.container__contacts__block__person__row}>
                                            <Text style={styles.container__contacts__block__person__firstname}>{item.firstname}</Text>
                                            <Text style={styles.container__contacts__block__person__lastname}>{item.lastname}</Text>
                                        </View>
                                        {item.border === true 
                                            ? <View style={styles.container__contacts__border}></View>
                                            : <View />
                                        }
                                    </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <View style={styles.container__contacts__block}>
                            <View style={styles.container__contacts__block__background}>
                                <Text style={styles.container__contacts__block__letter}>L</Text>
                            </View>
                            {lettre_l.map(item => {
                                return (
                                    <TouchableOpacity style={styles.container__contacts__block__person} 
                                    onPress={() => this.props.navigation.navigate(
                                        'FicheContact', 
                                        { firstname: item.firstname, lastname: item.lastname, portable: item.portable, fixe: item.fixe, mail: item.mail, address: item.address }
                                    )}>
                                    <View style={styles.container__contacts__block__person__column}>
                                        <View style={styles.container__contacts__block__person__row}>
                                            <Text style={styles.container__contacts__block__person__firstname}>{item.firstname}</Text>
                                            <Text style={styles.container__contacts__block__person__lastname}>{item.lastname}</Text>
                                        </View>
                                        {item.border === true 
                                            ? <View style={styles.container__contacts__border}></View>
                                            : <View />
                                        }
                                    </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <View style={styles.container__contacts__block}>
                            <View style={styles.container__contacts__block__background}>
                                <Text style={styles.container__contacts__block__letter}>M</Text>
                            </View>
                            {lettre_m.map(item => {
                                return (
                                    <TouchableOpacity style={styles.container__contacts__block__person} 
                                    onPress={() => this.props.navigation.navigate(
                                        'FicheContact', 
                                        { firstname: item.firstname, lastname: item.lastname, portable: item.portable, fixe: item.fixe, mail: item.mail, address: item.address }
                                    )}>
                                    <View style={styles.container__contacts__block__person__column}>
                                        <View style={styles.container__contacts__block__person__row}>
                                            <Text style={styles.container__contacts__block__person__firstname}>{item.firstname}</Text>
                                            <Text style={styles.container__contacts__block__person__lastname}>{item.lastname}</Text>
                                        </View>
                                        {item.border === true 
                                            ? <View style={styles.container__contacts__border}></View>
                                            : <View />
                                        }
                                    </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <View style={styles.container__contacts__block}>
                            <View style={styles.container__contacts__block__background}>
                                <Text style={styles.container__contacts__block__letter}>N</Text>
                            </View>
                            {lettre_n.map(item => {
                                return (
                                    <TouchableOpacity style={styles.container__contacts__block__person} 
                                    onPress={() => this.props.navigation.navigate(
                                        'FicheContact', 
                                        { firstname: item.firstname, lastname: item.lastname, portable: item.portable, fixe: item.fixe, mail: item.mail, address: item.address }
                                    )}>
                                    <View style={styles.container__contacts__block__person__column}>
                                        <View style={styles.container__contacts__block__person__row}>
                                            <Text style={styles.container__contacts__block__person__firstname}>{item.firstname}</Text>
                                            <Text style={styles.container__contacts__block__person__lastname}>{item.lastname}</Text>
                                        </View>
                                        {item.border === true 
                                            ? <View style={styles.container__contacts__border}></View>
                                            : <View />
                                        }
                                    </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <View style={styles.container__contacts__block}>
                            <View style={styles.container__contacts__block__background}>
                                <Text style={styles.container__contacts__block__letter}>P</Text>
                            </View>
                            {lettre_p.map(item => {
                                return (
                                    <TouchableOpacity style={styles.container__contacts__block__person} 
                                    onPress={() => this.props.navigation.navigate(
                                        'FicheContact', 
                                        { firstname: item.firstname, lastname: item.lastname, portable: item.portable, fixe: item.fixe, mail: item.mail, address: item.address }
                                    )}>
                                    <View style={styles.container__contacts__block__person__column}>
                                        <View style={styles.container__contacts__block__person__row}>
                                            <Text style={styles.container__contacts__block__person__firstname}>{item.firstname}</Text>
                                            <Text style={styles.container__contacts__block__person__lastname}>{item.lastname}</Text>
                                        </View>
                                        {item.border === true 
                                            ? <View style={styles.container__contacts__border}></View>
                                            : <View />
                                        }
                                    </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <View style={styles.container__contacts__block}>
                            <View style={styles.container__contacts__block__background}>
                                <Text style={styles.container__contacts__block__letter}>R</Text>
                            </View>
                            {lettre_r.map(item => {
                                return (
                                    <TouchableOpacity style={styles.container__contacts__block__person} 
                                    onPress={() => this.props.navigation.navigate(
                                        'FicheContact', 
                                        { firstname: item.firstname, lastname: item.lastname, portable: item.portable, fixe: item.fixe, mail: item.mail, address: item.address }
                                    )}>
                                    <View style={styles.container__contacts__block__person__column}>
                                        <View style={styles.container__contacts__block__person__row}>
                                            <Text style={styles.container__contacts__block__person__firstname}>{item.firstname}</Text>
                                            <Text style={styles.container__contacts__block__person__lastname}>{item.lastname}</Text>
                                        </View>
                                        {item.border === true 
                                            ? <View style={styles.container__contacts__border}></View>
                                            : <View />
                                        }
                                    </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <View style={styles.container__contacts__block}>
                            <View style={styles.container__contacts__block__background}>
                                <Text style={styles.container__contacts__block__letter}>S</Text>
                            </View>
                            {lettre_s.map(item => {
                                return (
                                    <TouchableOpacity style={styles.container__contacts__block__person} 
                                    onPress={() => this.props.navigation.navigate(
                                        'FicheContact', 
                                        { firstname: item.firstname, lastname: item.lastname, portable: item.portable, fixe: item.fixe, mail: item.mail, address: item.address }
                                    )}>
                                    <View style={styles.container__contacts__block__person__column}>
                                        <View style={styles.container__contacts__block__person__row}>
                                            <Text style={styles.container__contacts__block__person__firstname}>{item.firstname}</Text>
                                            <Text style={styles.container__contacts__block__person__lastname}>{item.lastname}</Text>
                                        </View>
                                        {item.border === true 
                                            ? <View style={styles.container__contacts__border}></View>
                                            : <View />
                                        }
                                    </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <View style={styles.container__contacts__block}>
                            <View style={styles.container__contacts__block__background}>
                                <Text style={styles.container__contacts__block__letter}>T</Text>
                            </View>
                            {lettre_t.map(item => {
                                return (
                                    <TouchableOpacity style={styles.container__contacts__block__person} 
                                    onPress={() => this.props.navigation.navigate(
                                        'FicheContact', 
                                        { firstname: item.firstname, lastname: item.lastname, portable: item.portable, fixe: item.fixe, mail: item.mail, address: item.address }
                                    )}>
                                    <View style={styles.container__contacts__block__person__column}>
                                        <View style={styles.container__contacts__block__person__row}>
                                            <Text style={styles.container__contacts__block__person__firstname}>{item.firstname}</Text>
                                            <Text style={styles.container__contacts__block__person__lastname}>{item.lastname}</Text>
                                        </View>
                                        {item.border === true 
                                            ? <View style={styles.container__contacts__border}></View>
                                            : <View />
                                        }
                                    </View>
                                    </TouchableOpacity>
                                )
                            })}
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

    container__contacts: {
        width: '100%',
        paddingBottom: '10%',
        paddingTop: -10,
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },

    container__contacts__title: {
        fontSize: 25,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        color: R.colors.dark_blue,
        paddingTop: 20,
        paddingBottom: 10,
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
        backgroundColor: R.colors.blue,
        marginBottom: 5
    },

    container__contacts__block__letter: {
        fontSize: 15,
        color: R.colors.saumon,
        fontFamily: R.fonts.Agrandir_TextBold,
        paddingTop: 5, 
    },

    container__contacts__block__person: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        paddingTop: 12, 
    },

    container__contacts__block__person__firstname: {
        color: R.colors.dark_blue,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_TextBold,
        paddingRight: 5,
        marginTop: 2,
    },

    container__contacts__block__person__Lastname: {
        color: R.colors.dark_blue,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_Regular,
    },

    container__contacts__block__person__column: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },

    container__contacts__block__person__row: {
        display: 'flex',
        flexDirection: 'row'
    },

    container__contacts__border: {
        width: '100%',
        height: 1,
        marginTop: 15,
        backgroundColor: '#ad7761',
    }
})
