import React, { Component } from 'react'
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native'
import moment from 'moment'
import nextDays from './utils/nextDays.js'
import isDay from './utils/isDay.js'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            temp: '',
            temp_min: '',
            temp_max: '',
            city: '',
            weather_desc: '',
            weather: '',

            h1: '',
            temp_h1: '',
            weather_h1: '',

            h2: '',
            temp_h2: '',
            weather_h2: '',

            h3: '',
            temp_h3: '',
            weather_h3: '',

            h4: '',
            temp_h4: '',
            weather_h4: '',

            h5: '',
            temp_h5: '',

            weather_h5: '',
            h6: '',
            temp_h6: '',
            weather_h6: '',
        }
    }

    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/forecast?q=Paris,FR&appid=64a8bf5eecdce6f1d587956dd2bf8024&units=metric&lang=fr')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    temp: Math.round(responseJson.list[0].main.temp),
                    temp_min: Math.round(responseJson.list[0].main.temp_min),
                    temp_max: Math.round(responseJson.list[0].main.temp_max),
                    city: responseJson.city.name,
                    weather_desc: responseJson.list[0].weather[0].description,
                    weather: responseJson.list[0].weather[0].main,

                    h1: responseJson.list[1].dt_txt,
                    temp_h1: Math.round(responseJson.list[1].main.temp),
                    weather_h1: responseJson.list[1].weather[0].main,

                    h2: responseJson.list[2].dt_txt,
                    temp_h2: Math.round(responseJson.list[2].main.temp),
                    weather_h2: responseJson.list[2].weather[0].main,

                    h3: responseJson.list[3].dt_txt,
                    temp_h3: Math.round(responseJson.list[3].main.temp),
                    weather_h3: responseJson.list[3].weather[0].main,

                    h4: responseJson.list[4].dt_txt,
                    temp_h4: Math.round(responseJson.list[4].main.temp),
                    weather_h4: responseJson.list[4].weather[0].main,

                    h5: responseJson.list[5].dt_txt,
                    temp_h5: Math.round(responseJson.list[5].main.temp),
                    weather_h5: responseJson.list[5].weather[0].main,

                    h6: responseJson.list[6].dt_txt,
                    temp_h6: Math.round(responseJson.list[6].main.temp),
                    weather_h6: responseJson.list[6].weather[0].main,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    isWeather(weather) {
        if (weather === 'Clouds') return <Image source={require('../../main/assets/icons/meteo/icon_cloud.png')} />
        if (weather === 'Rain') return <Image source={require('../../main/assets/icons/meteo/icon_rain.png')} />
        if (weather === 'Clear') return <Image source={require('../../main/assets/icons/meteo/icon_clear.png')} />
        if (weather === 'Sun') return <Image source={require('../../main/assets/icons/meteo/icon_sun.png')} />
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../main/assets/fond/Points.png')} style={styles.backgroundImage}>
                    <View style={styles.container__meteo}>
                        <View style={styles.container__meteo__main}>
                            <Text style={styles.container__meteo__city}>{this.state.city}</Text>
                            <Text style={styles.container__meteo__weather}>{this.state.weather_desc}</Text>
                            <Text style={styles.container__meteo__temp}>{this.state.temp}°</Text>
                        </View>

                        <View style={styles.container__meteo__now}>
                            <View style={styles.container__meteo__now__day}>
                                <Text style={styles.container__meteo__now__day__bold}>{isDay()}</Text>
                                <Text style={styles.container__meteo__now__day__text}>Aujourd'hui</Text>
                            </View>
                            <View style={styles.container__meteo__now__temp} >
                                <Text style={styles.container__meteo__now__temp__max}>{this.state.temp_max}</Text>
                                <Text style={styles.container__meteo__now__temp__min}>{this.state.temp_min}</Text>
                            </View>
                        </View>
                        <View style={styles.container__meteo__border} />

                        <View style={styles.container__meteo__hours}>
                            <View style={styles.container__meteo__hours__weather}>
                                <Text style={styles.container__meteo__hours__text}>Maint.</Text>
                                <View>{this.isWeather(this.state.weather.toString())}</View>
                                <Text style={styles.container__meteo__hours__temp}>{this.state.temp}°</Text>
                            </View>

                            <View style={styles.container__meteo__hours__weather}>
                                <Text style={styles.container__meteo__hours__text}>{moment(this.state.h1).format('HH:mm')}</Text>
                                <View>{this.isWeather(this.state.weather_h1.toString())}</View>
                                <Text style={styles.container__meteo__hours__temp}>{this.state.temp_h1}°</Text>
                            </View>

                            <View style={styles.container__meteo__hours__weather}>
                                <Text style={styles.container__meteo__hours__text}>{moment(this.state.h2).format('HH:mm')}</Text>
                                <View>{this.isWeather(this.state.weather_h2.toString())}</View>
                                <Text style={styles.container__meteo__hours__temp}>{this.state.temp_h2}°</Text>
                            </View>

                            <View style={styles.container__meteo__hours__weather}>
                                <Text style={styles.container__meteo__hours__text}>{moment(this.state.h3).format('HH:mm')}</Text>
                                <View>{this.isWeather(this.state.weather_h3.toString())}</View>
                                <Text style={styles.container__meteo__hours__temp}>{this.state.temp_h3}°</Text>
                            </View>

                            <View style={styles.container__meteo__hours__weather}>
                                <Text style={styles.container__meteo__hours__text}>{moment(this.state.h4).format('HH:mm')}</Text>
                                <View>{this.isWeather(this.state.weather_h4.toString())}</View>
                                <Text style={styles.container__meteo__hours__temp}>{this.state.temp_h4}°</Text>
                            </View>

                            <View style={styles.container__meteo__hours__weather}>
                                <Text style={styles.container__meteo__hours__text}>{moment(this.state.h5).format('HH:mm')}</Text>
                                <View>{this.isWeather(this.state.weather_h5.toString())}</View>
                                <Text style={styles.container__meteo__hours__temp}>{this.state.temp_h5}°</Text>
                            </View>

                            <View style={styles.container__meteo__hours__weather}>
                                <Text style={styles.container__meteo__hours__text}>{moment(this.state.h6).format('HH:mm')}</Text>
                                <View>{this.isWeather(this.state.weather_h6.toString())}</View>
                                <Text style={styles.container__meteo__hours__temp}>{this.state.temp_h6}°</Text>
                            </View>
                        </View>
                        <View style={styles.container__meteo__border} />
                        <View>
                            {nextDays(isDay())}
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#2A3669',

    },

    container__meteo: {
        width: '100%',
        height: '30%',
        marginTop: '8%',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
    },

    container__meteo__main: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center'
    },

    container__meteo__city: {
        color: '#FFB99D',
        fontSize: 50,
        fontWeight: 'bold',
    },

    container__meteo__weather: {
        color: '#FFB99D',
        fontSize: 20,
    },

    container__meteo__temp: {
        color: '#FFB99D',
        fontSize: 70,
        fontWeight: 'bold',
    },

    container__meteo__now: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginTop: '15%',
    },

    container__meteo__now__day: {
        width: '82%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
    },

    container__meteo__now__day__bold: {
        color: '#FFB99D',
        fontSize: 20,
        fontWeight: 'bold',
    },

    container__meteo__now__day__text: {
        color: '#FFB99D',
        fontSize: 15,
        paddingLeft: '5%',
    },

    container__meteo__now__temp: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
    },

    container__meteo__now__temp__max: {
        color: '#FFB99D',
        fontSize: 13,
        paddingLeft: '5%',
    },

    container__meteo__now__temp__min: {
        color: '#FFB99D',
        fontSize: 13,
        paddingLeft: '5%',
        opacity: 0.5,
    },

    container__meteo__hours: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginTop: '2%',
    },

    container__meteo__hours__weather: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
    },

    container__meteo__hours__text: {
        color: '#FFB99D',
        fontSize: 13,
        paddingBottom: '2%',
    },

    container__meteo__hours__temp: {
        color: '#FFB99D',
        fontSize: 13,
        paddingTop: '2%',
    },

    container__meteo__border: {
        width: '120%',
        height: 1,
        marginTop: 15,
        marginLeft: -20,
        backgroundColor: '#151C38',
        opacity: 0.7
    },

    backgroundImage: {
        width: '100%',
        height: '100%'
    },
})
