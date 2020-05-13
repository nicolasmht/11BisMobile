
import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import R from '../../res/R'

export default class CallsClavierScreen extends Component {
    constructor() {
        super()
        this.state = {
            numbers: []
        }
    }

    addNumber(n) {
        const numbersArr = this.state.numbers
        numbersArr.push(n)
        this.setState({
            numbers: numbersArr
        })
    }

    removeNumber() {
        const numbersArr = this.state.numbers
        numbersArr.pop()
        this.setState({
            numbers: numbersArr
        })
    }

    render() {
        const numbers = this.state.numbers
        return (
            <View style={styles.container}>
                <View style={styles.container__calls}>
                    <View>
                        <Text style={styles.container__numbers__digit}>
                            {numbers}
                        </Text>
                    </View>
                    <View style={styles.container__touch}>
                        <TouchableOpacity style={styles.container__touch__icon} onPress={() => this.addNumber('1')}>
                            <Image source={require('../../main/assets/icons/contact/calls/touch/touch_1.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container__touch__icon} onPress={() => this.addNumber('2')}>
                            <Image source={require('../../main/assets/icons/contact/calls/touch/touch_2.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container__touch__icon} onPress={() => this.addNumber('3')}>
                            <Image source={require('../../main/assets/icons/contact/calls/touch/touch_3.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container__touch__icon} onPress={() => this.addNumber('4')}>
                            <Image source={require('../../main/assets/icons/contact/calls/touch/touch_4.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container__touch__icon} onPress={() => this.addNumber('5')}>
                            <Image source={require('../../main/assets/icons/contact/calls/touch/touch_5.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container__touch__icon} onPress={() => this.addNumber('6')}>
                            <Image source={require('../../main/assets/icons/contact/calls/touch/touch_6.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container__touch__icon} onPress={() => this.addNumber('7')}>
                            <Image source={require('../../main/assets/icons/contact/calls/touch/touch_7.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container__touch__icon} onPress={() => this.addNumber('8')}>
                            <Image source={require('../../main/assets/icons/contact/calls/touch/touch_8.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container__touch__icon} onPress={() => this.addNumber('9')}>
                            <Image source={require('../../main/assets/icons/contact/calls/touch/touch_9.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container__touch__icon} onPress={() => this.addNumber('*')}>
                            <Image source={require('../../main/assets/icons/contact/calls/touch/touch_*.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container__touch__icon} onPress={() => this.addNumber('0')}>
                            <Image source={require('../../main/assets/icons/contact/calls/touch/touch_0.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container__touch__icon} onPress={() => this.addNumber('#')}>
                            <Image source={require('../../main/assets/icons/contact/calls/touch/touch_hash.png')} />
                        </TouchableOpacity>
                        {
                            numbers.length > 0
                            ? <TouchableOpacity style={styles.container__touch__call} onPress={() => this.props.navigation.navigate('Calling', { names: numbers, category: '...' })}>
                                <Image source={require('../../main/assets/icons/contact/calls/touch/touch_call.png')} />
                            </TouchableOpacity>
                            : <TouchableOpacity style={styles.container__touch__call}>
                                <Image source={require('../../main/assets/icons/contact/calls/touch/touch_call.png')} />
                            </TouchableOpacity>
                        }
                        {
                            numbers.length > 0
                            ? <TouchableOpacity style={styles.container__touch__icons__remove} onPress={() => this.removeNumber()}>
                                    <Image source={require('../../main/assets/icons/contact/calls/touch/touch_remove.png')} />
                                </TouchableOpacity>
                            : <View/>
                        }
                    </View>

                </View>
                <View style={styles.container__bottom__bar}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CallsFavoris')}>
                        <Image source={require('../../main/assets/icons/contact/calls/favoris.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CallsRecents')}>
                        <Image source={require('../../main/assets/icons/contact/calls/recents.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CallsContacts')}>
                        <Image source={require('../../main/assets/icons/contact/calls/contacts.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Image source={require('../../main/assets/icons/contact/calls/clavier_clicked.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CallsMessagerie')}>
                        <Image source={require('../../main/assets/icons/contact/calls/messagerie.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: R.colors.saumon,
    },

    container__calls: {
        width: '100%',
        height: '100%',
        marginTop: '1%',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    container__numbers__digit: {
        height: '30%',
        fontSize: 40,
        marginTop: 24,
        paddingTop: 24,
        padding: 2,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        color: R.colors.dark_blue,
    },

    container__touch: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: '-35%'
    },

    container__touch__icon: {
        padding: 10
    },

    container__touch__call: {
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: '5%',
        marginLeft: '20%'
    },

    container__touch__icons__remove: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: '5%',
        marginLeft: '-4%'
    },

    container__bottom__bar: {
        width: '100%',
        height: '8%',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        bottom: 0,
        backgroundColor: R.colors.saumon,
    }
})
