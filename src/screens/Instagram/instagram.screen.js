import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import R from '../../res/R'
import Data from '../../data/instagram'

export default class InstagramScreen extends Component {
    constructor() {
        super()
        this.state = {
            image: <Image style={styles.container__instagram__logo} source={require('../../main/assets/icons/instagram/logo.png')} />,
            text_1: "from",
            text_2: "Instagram",
            isLoaderStory: false,
            isProfil: false,
            isDisplay: true,
            isSelectedGrid: true,
            isSelectedIdentification: false,
            isConnection: false,
            text_connection: "Aucune connexion Internet",
            isStoryName: null,
            isStoryUser: null
        }
    }
    loaderImg() {
        return (
            this.state.image
        )
    }
    loaderText() {
        return (
            <View>
                <Text style={styles.container__instagram__text}>{this.state.text_1}</Text>
                <Text style={styles.container__instagram__label}>{this.state.text_2 }</Text>
            </View>
        )
    }
    componentDidMount() {
        this.loading = setTimeout(() => {
            this.setState({
                image: null,
                text_1: null,
                text_2: null
            })
        }, 1000)
        
        this.connectionView = setTimeout(() => {
           this.setState({
                isConnection: true
            })
        }, 4000)

        this.connection = setTimeout(() => {
           this.setState({
                text_connection: null,
                isConnection: false
            })
        }, 10000)
    }
    loaderStory() {
        return (
            <View style={{width: '100%', height: '100%'}}>
            <TouchableOpacity onPress={() => this.setState({isLoaderStory: false})} >
                    <Image style={{ marginLeft: "2%"}} source={require('../../main/assets/icons/instagram/chevron-down.png')} />
                </TouchableOpacity>
                {this.state.isDisplay
                    ? <View style={{ display: "flex", flexDirection: "row", alignItems: 'baseline', marginTop: 10, marginLeft: 20 }} >
                        <Image style={{ width: 30, height: 30 }} source={{ uri: this.state.isStoryUser }} />
                        <Text style={styles.container__instagram__main__name} >{this.state.isStoryName}</Text>
                    </View>
                    : <View/>
                }
                <Image style={{width: '100%', height: '100%', padding: 0, margin: 0}} source={{ uri: Data.loaders[0].loader }} />
            </View>
        )
    }
    noConnectionView() {
        if(this.state.isConnection) {
            return (
                <View style={{ width: '115%', marginLeft: '-8%', padding: '5%', backgroundColor: R.colors.light_saumon }}>
                    <Text style={{fontFamily: R.fonts.Agrandir_Regular, fontSize: 15, color: R.colors.blue, opacity: 0.5, textAlign: 'center'}}>
                        {this.state.text_connection}
                    </Text>
                </View>
            )
        }
    }
    isStories() {
        const data_users = Data.users
        return (
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <ScrollView horizontal={true}>
                    {data_users.map(item => {
                        return (
                            <TouchableOpacity style={{ display: "flex", flexDirection: "column", alignItems: 'center', marginTop: 10, marginRight: 20 }} onPress={() => this.setState({ isLoaderStory: true, isStoryName: item.name, isStoryUser: item.user  })} >
                                <Image style={{ width: 55, height: 55, borderWidth: 3, borderColor: R.colors.dark_saumon, borderRadius: 50 }} source={{ uri: item.user }} />
                                <Text style={[item.name === "Votre story" ? styles.container__instagram__main__name__you : styles.container__instagram__main__name]} >{item.name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
    isFeed() {
        const data_loaders = Data.loaders
        return (
            <View style={{ width: '100%', height: '100%', marginTop: '-5%', marginBottom: '20%' }}>
                {data_loaders.map(item => {
                    return (
                        <View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: 'center', marginLeft: 10, marginBottom: 10 }} >
                                <TouchableOpacity onPress={() => this.setState({ isLoaderStory: true, isStoryName: item.name, isStoryUser: item.user })}>
                                    <Image style={[item.id === 0 ? { width: 55, height: 55 }: { width: 55, height: 55, borderWidth: 3, borderColor: R.colors.dark_saumon, borderRadius: 50 }]} source={{ uri: item.user }} />
                                </TouchableOpacity>
                                    <Text style={[item.id === 0 ? '' : styles.container__instagram__post__name]} >{item.name}</Text>
                            </View>
                            <Image style={[item.id === 0 ? { display: 'none'} : { width: 412, height: 412, borderWidth: 1, borderColor: R.colors.dark_blue, marginBottom: '10%'}]} source={{ uri: item.loader }} />
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: 'baseline', paddingBottom: 25, marginTop: '-8%' }}>
                                <Text style={[item.id === 0 ? {display: 'none'} : styles.container__instagram__like__text]}> Aimé par </Text>
                                <Text style={[item.id === 0 ? '' : styles.container__instagram__like__text__bold]}>{item.likeby}</Text>
                            </View>
                        </View>
                    )
                })}
            </View> 
        )
    }
    isProfil() {
        const data_profil = Data.profil
        return (
            <View>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", paddingBottom: 10}}>
                    <TouchableOpacity onPress={() => this.setState({ isProfil: false })} >
                        <Image style={{ marginLeft: "2%" }} source={require('../../main/assets/icons/instagram/chevron-down.png')} />
                    </TouchableOpacity>
                    <Text style={styles.container__instagram__profil__name}>{data_profil.name}</Text>
                    <View/>
                </View>
                <View style={styles.container__instagram__border} />

                <View style={{ marginTop: 20}}>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: 'center' }}>
                        <Image style={{ width: 86, height: 86, borderWidth: 3, borderColor: R.colors.dark_saumon, borderRadius: 50 }} source={{ uri: data_profil.photo }} />
                        <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                            <Text style={styles.container__instagram__profil__number}>{data_profil.publications.length}</Text>
                            <Text style={styles.container__instagram__profil__text}>Publications</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                            <Text style={styles.container__instagram__profil__number}>{data_profil.abonnés}</Text>
                            <Text style={styles.container__instagram__profil__text}>Abonnés</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems:'center' }}>
                            <Text style={styles.container__instagram__profil__number}>{data_profil.abonnements}</Text>
                            <Text style={styles.container__instagram__profil__text}>Abonnements</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 20,  marginLeft: 30 }}>
                        <Text style={styles.container__instagram__profil__pseudo}>{data_profil.pseudo}</Text>

                        {data_profil.bio.map(item => {
                            return (
                                <Text style={styles.container__instagram__profil__text}>{item.text}</Text>
                            )
                        })}
                        <Text style={styles.container__instagram__profil__link}>{data_profil.link}</Text>
                    </View>
                </View>
                <View style={styles.container__instagram__border} />

                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", paddingTop: 10, paddingBottom: 10 }}>
                    <TouchableOpacity onPress={() => this.setState({ isSelectedGrid: true, isSelectedIdentification: false })} >
                        <Image style={{ marginLeft: "2%", marginBottom: 10}} source={require('../../main/assets/icons/instagram/icon_grid.png')} />
                        <View style={[this.state.isSelectedGrid ? styles.container__instagram__profil__border_selected : styles.container__instagram__profil__border]} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({ isSelectedGrid: false, isSelectedIdentification: true })}>
                        <Image style={{ marginLeft: "2%", marginBottom: 7}} source={require('../../main/assets/icons/instagram/icon_identification.png')} />
                        <View style={[this.state.isSelectedIdentification ? styles.container__instagram__profil__border_selected : styles.container__instagram__profil__border]} />
                    </TouchableOpacity>
                </View>

                <View style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap', justifyContent: 'flex-start', marginTop: -5}} >
                    {data_profil.publications.map(item => {
                        return (
                            <Image style={{ width: 133, height: 133, borderWidth: 1, borderColor: R.colors.dark_blue, margin: 2 }} source={{ uri: item.post }} />
                        )
                    })}
                </View>
            </View>
        )
    }
    instagram() {
        if (this.state.image != null && this.state.text_1 != null && this.state.text_2 != null) {
            return (
                <View>
                    {this.loaderImg()}
                    {this.loaderText()}
                </View>
            )
        } else {
            return (
                <View style={styles.container__instagram__main}>
                {
                    !this.state.isLoaderStory && !this.state.isProfil
                    ? <View> 
                        <View> 
                            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                                <TouchableOpacity style={{marginTop: 10}} onPress={() => this.setState({ isProfil: true })}>
                                    <Image source={require('../../main/assets/icons/instagram/icon_profil.png')} />
                                </TouchableOpacity>
                                <Text style={styles.container__instagram__main__title}>Instagram</Text>
                                <TouchableOpacity onPress={() => this.setState({ isLoaderStory: true, isDisplay: false })}>
                                    <Image source={require('../../main/assets/icons/instagram/icon_messages.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.container__instagram__border}/>
                        <ScrollView>
                            <View>
                                {this.isStories()}
                            </View>
                            <View style={styles.container__instagram__border}/>
                            <View>
                                {this.noConnectionView()}
                            </View>
                            <View>
                                {this.isFeed()}
                            </View>
                        </ScrollView>
                    </View>
                    : this.state.isLoaderStory && !this.state.isProfil
                    ? this.loaderStory() 
                    : this.isProfil()
                }
                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container__instagram}>
                    {this.instagram()}
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: R.colors.saumon
    },
    container__instagram: {
        width: '100%',
        height: '100%',
        paddingTop: '13%',
        paddingLeft: 1,
        paddingRight: 1,
        display: 'flex',
        justifyContent: 'center',
    },

    container__instagram__logo: {
        display: 'flex',
        alignSelf: 'center',
        marginTop: '50%',
    },

    container__instagram__text: {
        display: 'flex',
        alignSelf: 'center',
        paddingTop: '50%',
        color: R.colors.blue,
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_Regular,
    },

    container__instagram__label: {
        display: 'flex',
        alignSelf: 'center',
        color: R.colors.blue,
        fontSize: 30,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
    },

    container__instagram__main: {
        width: '100%',
        height: '100%',
        display: 'flex',
    },

    container__instagram__main__title: {
        fontSize: 25,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        textAlign: 'center',
        color: R.colors.dark_blue,
        padding: 10,
    },

    container__instagram__main__name: {
        fontSize: 12,
        fontFamily: R.fonts.Agrandir_Regular,
        textAlign: 'center',
        padding: 5,
        color: R.colors.blue,
    },

    container__instagram__main__name__you: {
        fontSize: 12,
        fontFamily: R.fonts.Agrandir_Regular,
        textAlign: 'center',
        padding: 5,
        color: R.colors.blue,
        opacity: 0.5,
    },

    container__instagram__post__name: {
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_TextBold,
        textAlign: 'center',
        marginTop: 5,
        paddingLeft: '3%',
        color: R.colors.blue,
    },

    container__instagram__like__text: {
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_Regular,
        textAlign: 'center',
        paddingLeft: '2%',
        color: R.colors.dark_blue,
    },

    container__instagram__like__text__bold: {
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_TextBold,
        textAlign: 'center',
        color: R.colors.dark_blue,
    },

    container__instagram__profil__name: {
        fontSize: 15,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        textAlign: 'center',
        color: R.colors.dark_blue,
        padding: 2,
    },

    container__instagram__profil__number: {
        fontSize: 20,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        textAlign: 'center',
        color: R.colors.dark_blue,
    },

    container__instagram__profil__text: {
        fontSize: 12,
        fontFamily: R.fonts.Agrandir_Regular,
        color: R.colors.dark_blue,
    },

    container__instagram__profil__pseudo: {
        fontSize: 12,
        fontFamily: R.fonts.Agrandir_GrandHeavy,
        color: R.colors.dark_blue,
    },

    container__instagram__profil__link: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 12,
        fontFamily: R.fonts.Agrandir_Regular,
        color: R.colors.blue,
    },

    container__instagram__profil__border: {
        width: '700%',
        height: 1,
        backgroundColor: R.colors.dark_blue,
        opacity: 0.3,
        // marginTop: 10,
        marginLeft: '-312%',
    },

    container__instagram__profil__border_selected: {
        width: '700%',
        height: 1,
        backgroundColor: R.colors.dark_blue,
        // marginTop: 10,
        marginLeft: '-310%',
    },

    container__instagram__border: {
        width: '115%',
        height: 1,
        backgroundColor: R.colors.dark_blue,
        opacity: 0.3,
        marginLeft: '-8%',
    }
})
