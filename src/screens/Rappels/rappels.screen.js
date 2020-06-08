import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList, ScrollView , TouchableOpacity} from 'react-native'
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
        console.log(this.state.isChecked)
    }

    
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.container__rappels}>
                        <Text style={styles.container__rappels__title}>{this.rappels.dossier}</Text>
                        <View>
                            <View style={styles.container__rappels__content}>
                            {
                                this.rappels.lists.map((item, index) => {
                                    return (
                                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10 }} onPress={() => { this.setState(state => {const a = state.isChecked; a[index] = !a[index]; return a;})}}>
                                            <View style={!this.state.isChecked[index] ? { width: '8%', height: 30, borderWidth: 2, borderRadius: 50, borderColor: R.colors.blue } : { width: '8%', height: 30, borderWidth: 2, borderRadius: 50, borderColor: R.colors.blue, backgroundColor: R.colors.blue }} />
                                            <Text style={styles.container__rappels__content__text__list}>{item.list}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                                {/* <FlatList
                                    data={rappels.lists}
                                    renderItem={({ item }) => {
                                        return (
                                            <TouchableOpacity style={{display:'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10}} onPress={() => this.setState({ isChecked: !this.state.isChecked }) }>
                                                <View style={!this.state.isChecked ? { width: '8%', height: 30, borderWidth: 2, borderRadius: 50, borderColor: R.colors.blue } : { width: '8%', height: '100%', borderWidth: 2, borderRadius: 50, borderColor: R.colors.blue, backgroundColor: R.colors.blue }}/>
                                                <Text style={styles.container__rappels__content__text__list}>{item.list}</Text>
                                            </TouchableOpacity>
                                        )
                                    }}
                                /> */}
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
        color: R.colors.dark_blue,
        fontSize: 20,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        paddingTop: '3%',
        paddingBottom: '5%',
    },

    container__rappels__content__title: {
        color: R.colors.dark_blue,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_TextBold,
        paddingTop: '5%',
    },

    container__rappels__content__text__list: {
        color: R.colors.dark_blue,
        fontSize: 16,
        fontFamily: R.fonts.Agrandir_Regular,
        paddingTop: '2%',
        paddingLeft: '5%',
    },

    container__rappels__content__list: {
        color: R.colors.dark_blue,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_Regular,
        paddingTop: 0,
        paddingLeft: 0,
    },

    container__rappels__content__text: {
        color: R.colors.dark_blue,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_Regular,
        paddingTop: '2%',
    },

    container__rappels__content__day: {
        color: R.colors.dark_blue,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_ThinItalic,
        paddingTop: '5%',
        paddingBottom: '2%',
        paddingLeft: '5%',
    },

    container__rappels__content__checkbox: {
        width: '8%',
        height: '100%',
        borderWidth: 2, 
        borderRadius: 50,
        borderColor: R.colors.blue,
    },
    container__rappels__content__checkbox__isChecked: {
        width: '8%',
        height: '100%',
        borderWidth: 2, 
        borderRadius: 50,
        borderColor: R.colors.blue,
        backgroundColor: R.colors.blue,
    },

})
