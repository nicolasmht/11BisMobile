import React  from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class SanteScreen extends React.Component {
    render() {
            return (
                <View style={styles.container}>
                    <View style={styles.container__sante}>
                        <Text style={styles.container__sante__text}>Aujourd'hui</Text>
                        <View style={styles.container__sante__block}>
                            <View style={styles.container__sante__block__title}>
                                <Image source={require('../../main/assets/icons/flame.png')} />
                                <Text style={styles.container__sante__block__text}>Distance (marche et course)</Text>
                            </View>
                            <View style={styles.container__sante__block__infos}>
                                <Text style={styles.container__sante__block__infos__number}>1,7</Text>
                                <Text style={styles.container__sante__block__infos__unity}>km</Text>
                            </View>
                        </View>

                        <View style={styles.container__sante__block}>
                            <View style={styles.container__sante__block__title}>
                                <Image source={require('../../main/assets/icons/flame.png')} />
                                <Text style={styles.container__sante__block__text}>Nombre de pas</Text>
                            </View>
                            <View style={styles.container__sante__block__infos}>
                                <Text style={styles.container__sante__block__infos__number}>2 475</Text>
                                <Text style={styles.container__sante__block__infos__unity}>pas</Text>
                            </View>
                        </View>

                        <View style={styles.container__sante__block}>
                            <View style={styles.container__sante__block__title}>
                                <Image source={require('../../main/assets/icons/flame.png')} />
                                <Text style={styles.container__sante__block__text}>Etage montés</Text>
                            </View>
                            <View style={styles.container__sante__block__infos}>
                                <Text style={styles.container__sante__block__infos__number}>18</Text>
                                <Text style={styles.container__sante__block__infos__unity}>étages</Text>
                            </View>
                        </View>

                        <Text style={styles.container__sante__text}>Plus ancien</Text>
                        <View style={styles.container__sante__block}>
                            <View style={styles.container__sante__block__title}>
                                <Image source={require('../../main/assets/icons/walking.png')} />
                                <Text style={styles.container__sante__block__text}>Poids</Text>
                            </View>
                            <View style={styles.container__sante__block__infos}>
                                <Text style={styles.container__sante__block__infos__number}>53</Text>
                                <Text style={styles.container__sante__block__infos__unity}>kg</Text>
                            </View>
                        </View>

                        <View style={styles.container__sante__block}>
                            <View style={styles.container__sante__block__title}>
                                <Image source={require('../../main/assets/icons/walking.png')} />
                                <Text style={styles.container__sante__block__text}>Taille</Text>
                            </View>
                            <View style={styles.container__sante__block__infos}>
                                <Text style={styles.container__sante__block__infos__number}>164</Text>
                                <Text style={styles.container__sante__block__infos__unity}>cm</Text>
                            </View>
                        </View>
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

    container__sante: {
        width: '100%',
        height: '100%',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },

    container__sante__text: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 20
    },

    container__sante__block: {
        width: '100%',
        height: 'auto',
        borderColor: '#151C38',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
    },

    container__sante__block__title: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10
    },

    container__sante__block__text: {
        color: '#2A3669',
        fontSize: 15,
        marginLeft: 10
    },

    container__sante__block__infos: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 10,
        alignItems: 'baseline',
        paddingBottom: 5
    },

    container__sante__block__infos__number: {
        color: '#151C38',
        fontSize: 30,
        fontWeight: 'bold'
    },

    container__sante__block__infos__text: {
        color: '#151C38',
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 10,
    },

    container__sante__block__infos__unity: {
        color: '#ad7761',
        fontSize: 15,
    }
})
