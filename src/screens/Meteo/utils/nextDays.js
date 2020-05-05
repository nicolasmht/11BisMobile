import React from 'react'
import { View, Text, Image } from 'react-native'

function nextDays(current) {
    if (current === 'Lundi') {
        return (
            <View style={{ width: '100%', height: '120%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '3%' }}>
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Mardi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Mercredi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Jeudi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Vendredi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Samedi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Dimanche</Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: '25%', paddingRight: '35%' }}>
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />

                </View>

                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                </View>
            </View>
        )
    }
    if (current === 'Mardi') {
        return (
            <View style={{ width: '100%', height: '120%',  display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '3%' }}>
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#FFB99D', fontSize: 18}}>Mercredi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Jeudi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Vendredi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Samedi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Dimanche</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Lundi</Text>
                </View>

                <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: '25%', paddingRight: '35%'}}>
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />

                </View>

                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                </View>
            </View>
        )
    }
    if (current === 'Mercredi') {
        return (
            <View style={{ width: '100%', height: '120%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '3%' }}>
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Jeudi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Vendredi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Samedi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Dimanche</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Lundi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Mardi</Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: '25%', paddingRight: '35%' }}>
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />

                </View>

                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                </View>
            </View>
        )
    }
    if (current === 'Jeudi') {
        return (
            <View style={{ width: '100%', height: '120%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '3%' }}>
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Vendredi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Samedi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Dimanche</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Lundi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Mardi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Mercredi</Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: '25%', paddingRight: '35%' }}>
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />

                </View>

                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                </View>
            </View>
        )
    }
    if (current === 'Vendredi') {
        return (
            <View style={{ width: '100%', height: '120%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '3%' }}>
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Samedi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Dimanche</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Lundi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Mardi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Mercredi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Jeudi</Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: '25%', paddingRight: '35%' }}>
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />

                </View>

                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                </View>
            </View>
        )
    }
    if (current === 'Samedi') {
        return (
            <View style={{ width: '100%', height: '120%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '3%' }}>
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Dimanche</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Lundi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Mardi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Mercredi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Jeudi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Vendredi</Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: '25%', paddingRight: '35%' }}>
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />

                </View>

                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                </View>
            </View>
        )
    }
    if (current === 'Dimanche') {
        return (
            <View style={{ width: '100%', height: '120%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '3%' }}>
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Lundi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Mardi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Mercredi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Jeudi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Vendredi</Text>
                    <Text style={{ color: '#FFB99D', fontSize: 18 }}>Samedi</Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: '25%', paddingRight: '35%' }}>
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />
                    <Image source={require('../../../main/assets/icons/meteo/icon_cloud.png')} />

                </View>

                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                    <View style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <Text style={{ color: '#FFB99D', fontSize: 13 }}>12</Text>
                        <Text style={{ color: '#FFB99D', fontSize: 13, opacity: 0.5 }}>4</Text>
                    </View>
                </View>
            </View>
        )
    }
}
export default nextDays
