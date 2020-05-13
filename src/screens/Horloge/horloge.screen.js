import React, { Component } from 'react'
import { StyleSheet, View, Text, Switch } from 'react-native'
import R from '../../res/R'

export default class HorlogeScreen extends Component {
    state = { switchValueAlarme1: false, switchValueAlarme2: true, switchValueAlarme3: false }
    toggleSwitchAlarme1 = (valueAlarme1 ) => {
        this.setState({ switchValueAlarme1: valueAlarme1 })
    }
    toggleSwitchAlarme2 = ( valueAlarme2 ) => {
        this.setState({ switchValueAlarme2: valueAlarme2 })
    }
    toggleSwitchAlarme3 = ( valueAlarme3 ) => {
        this.setState({ switchValueAlarme3: valueAlarme3 })
    }
    
    render() {
            return (
                <View style={styles.container}>
                    <View style={styles.container__alarme}>
                        <View style={styles.container__alarme__active}>
                            <Text style={this.state.switchValueAlarme1 ? styles.container__alarme__heure : styles.container__alarme__heure__disable}>08:00</Text>
                            <Switch
                                trackColor={{ true: R.colors.blue, false: R.colors.dark_blue }}
                                thumbColor={this.state.switchValueAlarme1 ? R.colors.saumon : R.colors.blue}
                                style={{ marginTop: 30}}
                                onValueChange={this.toggleSwitchAlarme1}
                                value={this.state.switchValueAlarme1} />
                        </View>
                        <Text style={this.state.switchValueAlarme1 ? styles.container__alarme__text : styles.container__alarme__text__disable} >Alarme</Text>
                        <View style={styles.container__alarme__border} />
                    </View>

                    <View style={styles.container__alarme}>
                        <View style={styles.container__alarme__active}>
                            <Text style={this.state.switchValueAlarme2 ? styles.container__alarme__heure : styles.container__alarme__heure__disable}>08:30</Text>
                            <Switch
                                trackColor={{ true: R.colors.blue, false: R.colors.dark_blue }}
                                thumbColor={this.state.switchValueAlarme2 ? R.colors.saumon : R.colors.blue}
                                style={{ marginTop: 30}}
                                onValueChange={this.toggleSwitchAlarme2}
                                value={this.state.switchValueAlarme2} />
                        </View>
                        <Text style={this.state.switchValueAlarme2 ? styles.container__alarme__text : styles.container__alarme__text__disable} >Alarme, chaque jour</Text>
                        <View style={styles.container__alarme__border} />
                    </View>

                    <View style={styles.container__alarme}>
                        <View style={styles.container__alarme__active}>
                            <Text style={this.state.switchValueAlarme3 ? styles.container__alarme__heure : styles.container__alarme__heure__disable}>09:00</Text>
                            <Switch
                                trackColor={{ true: R.colors.blue, false: R.colors.dark_blue }}
                                thumbColor={this.state.switchValueAlarme3 ? R.colors.saumon : R.colors.blue}
                                style={{ marginTop: 30}}
                                onValueChange={this.toggleSwitchAlarme3}
                                value={this.state.switchValueAlarme3} />
                        </View>
                        <Text style={this.state.switchValueAlarme3 ? styles.container__alarme__text : styles.container__alarme__text__disable} >Alarme</Text>
                        <View style={styles.container__alarme__border} />
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
    container__alarme: {
        width: '100%',
        height: '22%',
        paddingTop: '20%',
        paddingLeft: 24,
        paddingRight: 24,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
    },

    container__alarme__active: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
    },

    container__alarme__heure: {
        fontSize: 60,
        fontFamily: R.fonts.Agrandir_GrandLight,
        color: R.colors.dark_blue,
    },

    container__alarme__heure__disable: {
        fontSize: 60,
        opacity: 0.3,
        fontFamily: R.fonts.Agrandir_GrandLight,
        color: R.colors.dark_blue,
    },

    container__alarme__text: {
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_Regular,
        color: R.colors.dark_blue,
        marginTop: -8,
    },

    container__alarme__text__disable: {
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_Regular,
        color: R.colors.dark_blue,
        marginTop: -8,
        opacity: 0.3
    },

    container__alarme__border: {
        width: '100%',
        height: 1,
        marginTop: 15,
        backgroundColor: R.colors.dark_blue,
        opacity: 0.3
    }
})
