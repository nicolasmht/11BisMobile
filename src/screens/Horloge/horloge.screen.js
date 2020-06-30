import React, { Component } from 'react'
import { StyleSheet, View, Text, Switch, ScrollView } from 'react-native'
import R from '../../res/R'

export default class HorlogeScreen extends Component {
    state = { switchValueAlarme1: false, switchValueAlarme2: false, switchValueAlarme3: true, switchValueAlarme4: true, switchValueAlarme5: true, switchValueAlarme6: true, switchValueAlarme7: true }
    toggleSwitchAlarme1 = (valueAlarme1 ) => {
        this.setState({ switchValueAlarme1: valueAlarme1 })
    }
    toggleSwitchAlarme2 = ( valueAlarme2 ) => {
        this.setState({ switchValueAlarme2: valueAlarme2 })
    }
    toggleSwitchAlarme3 = ( valueAlarme3 ) => {
        this.setState({ switchValueAlarme3: valueAlarme3 })
    }
    toggleSwitchAlarme4 = ( valueAlarme4 ) => {
        this.setState({ switchValueAlarme4: valueAlarme4 })
    }
    toggleSwitchAlarme5 = ( valueAlarme5 ) => {
        this.setState({ switchValueAlarme5: valueAlarme5 })
    }
    toggleSwitchAlarme6 = ( valueAlarme6 ) => {
        this.setState({ switchValueAlarme6: valueAlarme6 })
    }
    toggleSwitchAlarme7 = ( valueAlarme7 ) => {
        this.setState({ switchValueAlarme7: valueAlarme7 })
    }
    
    render() {
            return (
                <View style={styles.container}>
                    <ScrollView>
                        <View style={styles.container__alarme}>
                            <Text style={styles.container__alarme__title}>Alarme</Text>
                            <View style={styles.container__alarme__border} />

                            <View style={styles.container__alarme__list}>
                                <View style={styles.container__alarme__active}>
                                    <Text style={this.state.switchValueAlarme1 ? styles.container__alarme__heure : styles.container__alarme__heure__disable}>05:30</Text>
                                    <Switch
                                        trackColor={{ true: R.colors.blue, false: R.colors.dark_blue }}
                                        thumbColor={this.state.switchValueAlarme1 ? R.colors.saumon : R.colors.blue}
                                        style={{ marginTop: 30}}
                                        onValueChange={this.toggleSwitchAlarme1}
                                        value={this.state.switchValueAlarme1} />
                                </View>
                                <Text style={this.state.switchValueAlarme1 ? styles.container__alarme__text : styles.container__alarme__text__disable}>Train Bayonne</Text>
                                <View style={styles.container__alarme__border} />
                            </View>

                            <View style={styles.container__alarme__list}>
                                <View style={styles.container__alarme__active}>
                                    <Text style={this.state.switchValueAlarme2 ? styles.container__alarme__heure : styles.container__alarme__heure__disable}>05:45</Text>
                                    <Switch
                                        trackColor={{ true: R.colors.blue, false: R.colors.dark_blue }}
                                        thumbColor={this.state.switchValueAlarme2 ? R.colors.saumon : R.colors.blue}
                                        style={{ marginTop: 30}}
                                        onValueChange={this.toggleSwitchAlarme2}
                                        value={this.state.switchValueAlarme2} />
                                </View>
                                <Text style={this.state.switchValueAlarme2 ? styles.container__alarme__text : styles.container__alarme__text__disable}>Randoooo</Text>
                            </View>

                            <View style={styles.container__alarme__list}>
                                <View style={styles.container__alarme__active}>
                                    <Text style={this.state.switchValueAlarme3 ? styles.container__alarme__heure : styles.container__alarme__heure__disable}>08:30</Text>
                                    <Switch
                                        trackColor={{ true: R.colors.blue, false: R.colors.dark_blue }}
                                        thumbColor={this.state.switchValueAlarme3 ? R.colors.saumon : R.colors.blue}
                                        style={{ marginTop: 30 }}
                                        onValueChange={this.toggleSwitchAlarme3}
                                        value={this.state.switchValueAlarme3} />
                                </View>
                                <Text style={this.state.switchValueAlarme3 ? styles.container__alarme__text : styles.container__alarme__text__disable}>Debout la dedans</Text>
                                <View style={styles.container__alarme__border} />
                            </View>

                            <View style={styles.container__alarme__list}>
                                <View style={styles.container__alarme__active}>
                                    <Text style={this.state.switchValueAlarme4 ? styles.container__alarme__heure : styles.container__alarme__heure__disable}>08:35</Text>
                                    <Switch
                                        trackColor={{ true: R.colors.blue, false: R.colors.dark_blue }}
                                        thumbColor={this.state.switchValueAlarme4 ? R.colors.saumon : R.colors.blue}
                                        style={{ marginTop: 30 }}
                                        onValueChange={this.toggleSwitchAlarme4}
                                        value={this.state.switchValueAlarme4} />
                                </View>
                                <Text style={this.state.switchValueAlarme4 ? styles.container__alarme__text : styles.container__alarme__text__disable}>Debout la dedans</Text>
                                <View style={styles.container__alarme__border} />
                            </View>

                            <View style={styles.container__alarme__list}>
                                <View style={styles.container__alarme__active}>
                                    <Text style={this.state.switchValueAlarme5 ? styles.container__alarme__heure : styles.container__alarme__heure__disable}>08:40</Text>
                                    <Switch
                                        trackColor={{ true: R.colors.blue, false: R.colors.dark_blue }}
                                        thumbColor={this.state.switchValueAlarme5 ? R.colors.saumon : R.colors.blue}
                                        style={{ marginTop: 30 }}
                                        onValueChange={this.toggleSwitchAlarme5}
                                        value={this.state.switchValueAlarme5} />
                                </View>
                                <Text style={this.state.switchValueAlarme5 ? styles.container__alarme__text : styles.container__alarme__text__disable}>Debout la dedans</Text>
                                <View style={styles.container__alarme__border} />
                            </View>

                            <View style={styles.container__alarme__list}>
                                <View style={styles.container__alarme__active}>
                                    <Text style={this.state.switchValueAlarme6 ? styles.container__alarme__heure : styles.container__alarme__heure__disable}>08:45</Text>
                                    <Switch
                                        trackColor={{ true: R.colors.blue, false: R.colors.dark_blue }}
                                        thumbColor={this.state.switchValueAlarme6 ? R.colors.saumon : R.colors.blue}
                                        style={{ marginTop: 30 }}
                                        onValueChange={this.toggleSwitchAlarme6}
                                        value={this.state.switchValueAlarme6} />
                                </View>
                                <Text style={this.state.switchValueAlarme6 ? styles.container__alarme__text : styles.container__alarme__text__disable}>Debout la dedans</Text>
                                <View style={styles.container__alarme__border} />
                            </View>

                            <View style={styles.container__alarme__list}>
                                <View style={styles.container__alarme__active}>
                                    <Text style={this.state.switchValueAlarme7 ? styles.container__alarme__heure : styles.container__alarme__heure__disable}>08:50</Text>
                                    <Switch
                                        trackColor={{ true: R.colors.blue, false: R.colors.dark_blue }}
                                        thumbColor={this.state.switchValueAlarme7 ? R.colors.saumon : R.colors.blue}
                                        style={{ marginTop: 30 }}
                                        onValueChange={this.toggleSwitchAlarme7}
                                        value={this.state.switchValueAlarme7} />
                                </View>
                                <Text style={this.state.switchValueAlarme7 ? styles.container__alarme__text : styles.container__alarme__text__disable}>Debout la dedans</Text>
                                <View style={styles.container__alarme__border} />
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
        backgroundColor: R.colors.saumon,
    },
    container__alarme: {
        width: '100%',
        height: '100%',
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: '20%',
    },

    container__alarme__list: {
        width: '100%',
        paddingTop: '10%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignSelf: 'center'
    },
    
    container__alarme__title: {
        fontSize: 25,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        textAlign: 'left',
        color: R.colors.dark_blue,
        marginBottom: -10,
    },

    container__alarme__active: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'baseline'
        
    },

    container__alarme__heure: {
        fontSize: 50,
        fontFamily: R.fonts.Agrandir_GrandLight,
        color: R.colors.dark_blue,
    },

    container__alarme__heure__disable: {
        fontSize: 50,
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
