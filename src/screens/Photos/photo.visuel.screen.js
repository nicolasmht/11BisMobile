import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import photosData from '../../data/photos.json'
import R from '../../res/R'

export default class PhotVisuelScreen extends Component {


    render() {
        const photos = photosData
        const name = this.props.route.params.name
        const format = this.props.route.params.format

        const recents = photos.recents
        const plantes = photos.plantes
        const favoris = photos.favoris
        const screenshot = photos.screenshot
        const personnes = photos.personnes

        const result_recents = recents.find(recents => recents.id === this.props.route.params.id);
        const result_plantes = plantes.find(plantes => plantes.id === this.props.route.params.id);
        const result_favoris = favoris.find(favoris => favoris.id === this.props.route.params.id);
        const result_screenshot = screenshot.find(screenshot => screenshot.id === this.props.route.params.id);
        const result_personnes = personnes.find(personnes => personnes.id === this.props.route.params.id);
        

        console.log(format)

        return (
            <View style={styles.container}>
                <View style={styles.container__photos}>
                    <View style={format === "paysage" ? {marginTop: '50%' } : ''}>
                        {
                            name === 'recents' 
                            ? <Image style={[format === "paysage" ? styles.container__photos__album__img__paysage : styles.container__photos__album__img__portrait]} source={{ uri: result_recents.photo }} />
                            : name ===  'plantes' 
                            ? <Image style={[format === "paysage" ? styles.container__photos__album__img__paysage : styles.container__photos__album__img__portrait]} source={{ uri: result_plantes.photo }} />
                            : name == 'favoris'
                            ? <Image style={[format === "paysage" ? styles.container__photos__album__img__paysage : styles.container__photos__album__img__portrait]} source={{ uri: result_favoris.photo }} />
                            : name == 'screenshot'
                            ? <Image style={[format === "paysage" ? styles.container__photos__album__img__paysage : styles.container__photos__album__img__portrait]} source={{ uri: result_screenshot.photo }} />
                            : name == 'personnes'
                            ? <Image style={[format === "paysage" ? styles.container__photos__album__img__paysage : styles.container__photos__album__img__portrait]} source={{ uri: result_personnes.photo }} />
                            : <View/>
                        }
                    </View>
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

    container__photos: {
        width: '100%',
        minHeight: '100%',
        padding: 1,
    },

    container__photos__album__img__portrait: {
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderColor: R.colors.dark_blue,
    },

    container__photos__album__img__paysage: {
        width: '100%',
        height: '70%',
        borderWidth: 1,
        borderColor: R.colors.dark_blue,
    }


})
