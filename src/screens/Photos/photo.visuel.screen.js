import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import photosData from '../../data/photos.json'

export default class PhotVisuelScreen extends Component {


    render() {
        const photos = photosData
        const name = this.props.route.params.name

        const recents = photos.recents
        const pro = photos.pro
        const favoris = photos.favoris
        const screenshot = photos.screenshot
        const personnes = photos.personnes
        const masked = photos.masked
        const deleted = photos.deleted

        const result_recents = recents.find(recents => recents.id === this.props.route.params.id);
        const result_pro = pro.find(pro => pro.id === this.props.route.params.id);
        const result_favoris = favoris.find(favoris => favoris.id === this.props.route.params.id);
        const result_screenshot = screenshot.find(screenshot => screenshot.id === this.props.route.params.id);
        const result_personnes = personnes.find(personnes => personnes.id === this.props.route.params.id);
        const result_masked = masked.find(masked => masked.id === this.props.route.params.id);
        const result_deleted = deleted.find(deleted => deleted.id === this.props.route.params.id);
        
        return (
            <View style={styles.container}>
                <View style={styles.container__photos}>
                    <View style={styles.container__photos__album}>
                        <View style={styles.container__photos__album__pers}>
                        {
                           name ===  'recents' 
                            ? <Image style={styles.container__photos__album__img} source={{ uri: result_recents.photo }} />
                            : name ===  'pro' 
                            ? <Image style={styles.container__photos__album__img} source={{ uri: result_pro.photo }} />
                            : name == 'favoris'
                            ? <Image style={styles.container__photos__album__img} source={{ uri: result_favoris.photo }} />
                            : name == 'screenshot'
                            ? <Image style={styles.container__photos__album__img} source={{ uri: result_screenshot.photo }} />
                            : name == 'personnes'
                            ? <Image style={styles.container__photos__album__img} source={{ uri: result_personnes.photo }} />
                            : name == 'masked'
                            ? <Image style={styles.container__photos__album__img} source={{ uri: result_masked.photo }} />
                            : name == 'deleted'
                            ? <Image style={styles.container__photos__album__img} source={{ uri: result_deleted.photo }} />
                            : <View/>
                        }
                        </View>
                    </View>
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

    container__photos: {
        width: '100%',
        height: '100%',
        padding: 24,
    },

    container__photos__album__img: {
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderColor: '#151C38'
    }
})
