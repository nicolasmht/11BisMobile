
import _ from 'lodash';
import React, { Component } from 'react';
import { Platform, Alert, StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import { ExpandableCalendar, AgendaList, CalendarProvider, WeekCalendar } from 'react-native-calendars';
import testIDs from './testIDs'
import R from '../../res/R'
import { LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
    today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';

const today = new Date().toISOString().split('T')[0];
const fastDate = getPastDate(3);
const futureDates = getFutureDates(9);
const dates = [fastDate, today].concat(futureDates);
const themeColor = R.colors.blue;
const lightThemeColor = R.colors.saumon;

function getFutureDates(days) {
    const array = [];
    for (let index = 1; index <= days; index++) {
        const date = new Date(Date.now() ); // 864e5 == 86400000 == 24*60*60*1000
        const dateString = date.toISOString().split('T')[0];
        array.push(dateString);
    }
    return array;
}

function getPastDate(days) {
    return new Date(Date.now() - (864e5 * days)).toISOString().split('T')[0];
}

const ITEMS = [
    { title: '2020-06-27', data: [{ hour_start: '20h', hour_end: '23h30', title: 'Concert de Céline (reporté)', location: 'Stade de France' }]},
    { title: '2020-07-07', data: [{ duration: 'jour entier', title: "anniversaire pop's" }]},
    { title: '2020-07-29', data: [{ duration: 'jour entier', title: 'Fêtes de Bayonne (annulées)', location: 'Bayonne' }]},
    { title: '2020-07-30', data: [{ duration: 'jour entier', title: 'Fêtes de Bayonne (annulées)', location: 'Bayonne' }]},
    { title: '2020-07-31', data: [{ duration: 'jour entier', title: 'Fêtes de Bayonne (annulées)', location: 'Bayonne' }]},
    { title: '2020-03-16', data: [{ hour_start: '19h', title: 'apéro avec le breakfast club', location: 'coworking' }]},
    { title: '2020-04-11', data: [{ duration: 'jour entier', title: 'Déconfinement' }]},
    { title: '2020-06-14', data: [{ duration: 'jour entier', title: 'Dead line contrat Vittel' }]},
    { title: '2020-06-16', data: [{ hour_start: '19h', title: 'apéro à moins de 10', location: 'chez X' }]},
    { title: '2020-06-18', data: [{ hour_start: '16h', title: 'Balade en forêt', location: '25 bosses de Fontainebleau' }]},
    { title: '2020-06-23', data: [{ hour_start: '17h30', hour_end: '18h30', title: 'Rdv Dentiste', location: 'Meudon Val-Fleury' }]},
    { title: '2020-08-01', data: [{ duration: 'jour entier', title: 'Fêtes de Bayonne (annulées)', location: 'Bayonne' }]},
    { title: '2020-08-02', data: [{ duration: 'jour entier', title: 'Fêtes de Bayonne (annulées)', location: 'Bayonne' }]},
    { title: '2020-08-08', data: [{ duration: 'jour entier', title: 'Le gratin en vacances ❤️', location: 'Cassis' }]},
    { title: '2020-08-09', data: [{ duration: 'jour entier', title: 'Le gratin en vacances ❤️', location: 'Cassis' }]},
    { title: '2020-08-10', data: [{ duration: 'jour entier', title: 'Le gratin en vacances ❤️', location: 'Cassis' }]},
    { title: '2020-08-11', data: [{ duration: 'jour entier', title: 'Le gratin en vacances ❤️', location: 'Cassis' }]},
    { title: '2020-08-12', data: [{ duration: 'jour entier', title: 'Le gratin en vacances ❤️', location: 'Cassis' }]},
    { title: '2020-08-13', data: [{ duration: 'jour entier', title: 'Le gratin en vacances ❤️', location: 'Cassis' }]},
    { title: '2020-08-14', data: [{ duration: 'jour entier', title: 'Le gratin en vacances ❤️', location: 'Cassis' }]},
    { title: '2020-08-15', data: [{ duration: 'jour entier', title: 'Le gratin en vacances ❤️', location: 'Cassis' }]},
    { title: '2020-08-16', data: [{ duration: 'jour entier', title: 'Le gratin en vacances ❤️', location: 'Cassis' }]},
    { title: '2020-08-21', data: [{ duration: 'jour entier', title: 'Fêtes Itxassou (annulées)', location: 'Itxassou' }]},
    { title: '2020-08-22', data: [{ duration: 'jour entier', title: 'Fêtes Itxassou (annulées)', location: 'Itxassou' }]},
    { title: '2020-08-23', data: [{ duration: 'jour entier', title: 'Fêtes Itxassou (annulées)', location: 'Itxassou' }]},
    { title: '2020-08-24', data: [{ duration: 'jour entier', title: 'Fêtes Itxassou (annulées)', location: 'Itxassou' }]},
    { title: '2020-08-25', data: [{ duration: 'jour entier', title: 'Fêtes Itxassou (annulées)', location: 'Itxassou' }]},
    { title: '2020-08-26', data: [{ duration: 'jour entier', title: 'Fêtes Itxassou (annulées)', location: 'Itxassou' }]},
];

export default class CalendrierScreen extends Component {
    renderEmptyItem() {
        return (
            <View style={styles.emptyItem}>
                <Text style={styles.emptyItemText}>No Events Planned</Text>
            </View>
        );
    }

    renderItem = ({ item }) => {
        if (_.isEmpty(item)) {
            return this.renderEmptyItem();
        }

        return (
            <TouchableOpacity style={styles.item}>
                <View>
                    <Text style={styles.itemHourText}>{item.hour_start}</Text>
                    <Text style={styles.itemHourText}>{item.hour_end}</Text>
                    <Text style={styles.itemDurationText}>{item.duration}</Text>
                </View>
                <View style={{height: 40, marginLeft: 15, marginTop: -5, borderRightColor: R.colors.blue, borderRightWidth: 3}}/>
                <View>
                    <Text style={styles.itemTitleText}>{item.title}</Text>
                    <Text style={styles.itemTitleLocation}>{item.location}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    getMarkedDates = () => {
        const marked = {};
        ITEMS.forEach(item => {
            if (item.data && item.data.length > 0 && !_.isEmpty(item.data[0])) {
                marked[item.title] = { marked: true };
            }
        });
        return marked;
    }

    render() {
        return (
            <View style={styles.container}>
                <CalendarProvider
                    // showTodayButton
                    disabledOpacity={0.6}
                >
                    {this.props.weekView ?
                        <WeekCalendar
                            testID={testIDs.weekCalendar.CONTAINER}
                            firstDay={1}
                            markedDates={this.getMarkedDates()}
                        /> :
                        <ExpandableCalendar
                            testID={testIDs.expandableCalendar.CONTAINER}
                            horizontal={false}
                            // hideArrows
                            // disablePan
                            // hideKnob
                            initialPosition={ExpandableCalendar.positions.OPEN}
                            calendarStyle={styles.calendar}
                            headerStyle={styles.calendar}
                            // disableWeekScroll
                            theme={{
                                backgroundColor: R.colors.light_saumon,
                                calendarBackground: R.colors.saumon,
                                textSectionTitleColor: R.colors.dark_saumon,
                                textSectionTitleDisabledColor: R.colors.dark_blue,
                                selectedDayBackgroundColor: R.colors.blue,
                                todayBackgroundColor: R.colors.blue,
                                selectedDayTextColor: R.colors.saumon,

                                selectedDayTextColor: R.colors.saumon,
                                todayTextColor: R.colors.saumon,
                                dayTextColor: R.colors.dark_blue,

                                dotColor: R.colors.blue,
                                selectedDotColor: R.colors.saumon,
                                dotStyle: { marginTop: -2 },
                                arrowColor: R.colors.dark_blue,
                                arrowStyle: { padding: 0 },
                                monthTextColor: R.colors.dark_blue,
                                indicatorColor: 'red',

                                textDayFontFamily: R.fonts.Agrandir_Regular,
                                textMonthFontFamily: R.fonts.Agrandir_GrandHeavy,
                                textDayHeaderFontFamily: R.fonts.Agrandir_Regular,

                                textDayFontWeight: '300',
                                textMonthFontWeight: '900',
                                textDayHeaderFontWeight: '300',

                                textDayFontSize: 16,
                                textMonthFontSize: 16,
                                textDayHeaderFontSize: 16,
                            }}
                            firstDay={1}
                            markedDates={this.getMarkedDates()}
                        />
                    }
                    <AgendaList
                        sections={ITEMS}
                        extraData={this.state}
                        renderItem={this.renderItem}
                        sectionStyle={styles.section}
                    />
                </CalendarProvider>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: R.colors.saumon,
    },

    calendar: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    section: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: R.colors.saumon,
        color: R.colors.blue,

    },
    item: {
        padding: 20,
        backgroundColor: R.colors.light_saumon,
        borderBottomWidth: 1,
        borderBottomColor: R.colors.dark_blue,
        flexDirection: 'row'
    },
    itemHourText: {
        color: R.colors.blue,
        fontFamily: R.fonts.Agrandir_Regular,
        fontSize: 15,
        paddingLeft: 28
    },
    itemDurationText: {
        color: R.colors.blue,
        fontFamily: R.fonts.Agrandir_Regular,
        fontSize: 15,
        marginTop: '-40%',
    },
    itemTitleText: {
        color: R.colors.blue,
        marginLeft: 16,
        fontFamily: R.fonts.Agrandir_TextBold,
        fontSize: 16
    },
    itemTitleLocation: {
        color: R.colors.dark_blue,
        opacity: 0.5,
        marginLeft: 16,
        fontFamily: R.fonts.Agrandir_Regular,
        fontSize: 12
    },
    itemButtonContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    emptyItem: {
        paddingLeft: 20,
        height: 52,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: R.colors.dark_blue
    },
    emptyItemText: {
        color: R.colors.dark_blue,
        fontSize: 14
    }
});


