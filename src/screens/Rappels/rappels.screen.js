import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView , TouchableOpacity} from 'react-native'
import rappelsData from '../../data/rappels.json';
import R from '../../res/R'

export default class RappelsScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isChecked: [],
        }
        this.id = this.props.route.params.id
        this.dataList = rappelsData
        this.rappels = this.dataList[this.id]
    }

    componentDidMount() {
        this.rappels.lists.map((item, index) => {
            this.state.isChecked.push(false)
        })
    }

    
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.container__rappels}>
                        <Text style={styles.container__rappels__title}>{this.rappels.dossier}</Text>
                        <Text style={styles.container__rappels__share}>{this.rappels.share ? `Partagé avec ${this.rappels.share }` : ''}</Text>
                        <View>
                            <View style={styles.container__rappels__content}>
                                {
                                    this.rappels.lists.map((item, index) => {
                                        return (
                                            <TouchableOpacity
                                            style={styles.container__rappels__content__item}
                                            onPress={() => {
                                                this.setState(state => {const a = state.isChecked; a[index] = !a[index]; return a;})
                                            }}>
                                                <View style={
                                                    !this.state.isChecked[index] 
                                                    ? { width: '8%', height: 29, borderWidth: 2, borderRadius: 100, borderColor: R.colors.blue } 
                                                    : { width: '8%', height: 29, borderWidth: 2, borderRadius: 100, borderColor: R.colors.blue, backgroundColor: R.colors.blue }} 
                                                />
                                                <View style={{width: '90%', display: 'flex', flexDirection: 'column'}}>
                                                <Text style={styles.container__rappels__content__list}>{item.list}</Text>
                                                <View style={styles.container__rappelslist__border} />
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
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

    container__rappels: {
        width: '100%',
        height: '100%',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
    },

    container__rappels__date: {
        width: '100%',
        color: R.colors.dark_blue,
        fontSize: 12,
        opacity: 0.5,
        textAlign: 'center',
        fontFamily: R.fonts.Agrandir_Regular,
    },

    container__rappels__title: {
        color: R.colors.blue,
        fontSize: 20,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        paddingTop: '3%',
        paddingBottom: '5%',
    },    

    container__rappels__share: {
        color: R.colors.dark_blue,
        fontSize: 15,
        opacity: 0.5,
        fontFamily: R.fonts.Agrandir_TextBold,
        marginTop: -5,
        paddingBottom: '2%',
    },

    container__rappels__content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    container__rappels__content__item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    container__rappels__content__list: {
        width: '90%',
        color: R.colors.dark_blue,
        fontSize: 16,
        fontFamily: R.fonts.Agrandir_Regular,
        paddingTop: '6%',
        paddingLeft: '5%',
    },

    container__rappelslist__border: {
        width: '100%',
        height: 1,
        marginTop: 15,
        backgroundColor: R.colors.dark_blue,
        opacity: 0.2,
    },
})
