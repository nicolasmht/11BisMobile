import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, ImageBackground, View, Text, Button, StatusBar, Image, Modal, AppState } from 'react-native'

import Auth from '@react-native-firebase/auth'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import R from './res/R'
import Sound from 'react-native-sound'

// Screens
import CodeScreen from './screens/code.screen'
import HomeScreen from './screens/home.screen'
import AlarmeScreen from './screens/Horloge/alarme.screen'

import HorlogeScreen from './screens/Horloge/horloge.screen'
import SanteScreen from './screens/Sante/sante.screen'
import ContactsScreen from './screens/Contacts/contacts.screen'
import FicheContactScreen from './screens/Contacts/ficheContact.screen'
import MeteoScreen from './screens/Meteo/meteo.screen'
import SpotifyScreen from './screens/Spotify/spotify.screen'
import NetflixScreen from './screens/Netflix/netflix.screen'
import LydiaScreen from './screens/Lydia/lydia.screen'
import CalendrierScreen from './screens/Calendrier/calendrier.screen'
import InstagramScreen from './screens/Instagram/instagram.screen'
import FinScreen from './screens/Fin/fin.screen'

import JusteatListScreen from './screens/Justeat/justeat.list.screen'
import JusteatScreen from './screens/Justeat/justeat.screen'

import GoogleHomeScreen from './screens/Google/google.home.screen'
import GoogleMapsScreen from './screens/Google/google.maps.screen'

import RappelsListScreen from './screens/Rappels/rappels.list.screen'
import RappelsScreen from './screens/Rappels/rappels.screen'

import NotesListScreen from './screens/Notes/notes.list.screen'
import NoteScreen from './screens/Notes/note.screen'

import MessagesListScreen from './screens/Messages/messages.list.screen'
import MessagesScreen from './screens/Messages/messages.screen'

import PhotosScreen from './screens/Photos/photos.screen'
import PhotosRecentsScreen from './screens/Photos/photos.recents.screen'
import PhotoVisuelScreen from './screens/Photos/photo.visuel.screen'
import PhotosFavorisScreen from './screens/Photos/photos.favoris.screen'
import PhotosAlbum1Screen from './screens/Photos/photos.album1.screen'
import PhotosScreenshotScreen from './screens/Photos/photos.screenshot.screen'
import PhotosPersonnesScreen from './screens/Photos/photos.personnes.screen'
import PhotosMaskedScreen from './screens/Photos/photos.masked.screen'
import PhotosDeletedScreen from './screens/Photos/photos.deleted.screen'
import PhotoMapScreen from './screens/Photos/photo.map.screen'

import CallsFavorisScreen from './screens/Call/calls.favoris.screen'
import CallsRecentsScreen from './screens/Call/calls.recents.screen'
import CallsContactsScreen from './screens/Call/calls.contacts.screen'
import CallsClavierScreen from './screens/Call/calls.clavier.screen'
import CallsMessagerieScreen from './screens/Call/calls.messagerie.screen'

import CallingScreen from './screens/Call/calling.screen'
import IncomingCallScreen from './screens/Call/incomingCall.screen'

const Stack = createStackNavigator()
const navigationRef = React.createRef()

navigate = (name) => {
	navigationRef.current && navigationRef.current.navigate(name)
}

const useInterval = (callback, delay) => {
	const savedCallback = useRef();

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}

App = () => {
	// Set an initializing state whilst Firebase connects
	const [initializing, setInitializing] = useState(true)
	const [user, setUser] = useState()
	const [alarm, setAlarm] = useState(false)
	const [alarmStop, setAlarmStop] = useState(false)
	const [minutes, setMinutes] = useState(0);
	const [heures, setHeures] = useState(18);
	const [playing, setPlaying] = useState(false);

	// Handle user state changes
	function onAuthStateChanged(user) {
		setUser(user)
		if (initializing) setInitializing(false)
	}

	useEffect(() => {
		AppState.addEventListener("change", (status) => {
			if (status == 'inactive') {
				Auth().signOut();
			}
		});
	}, []);

	const myTimer = useInterval(() => {
		if(user) {
			if (minutes >= 0) {
				setMinutes(minutes + 1)
			}
			if (minutes === 59) {
				setMinutes(0);
				if (heures === 0 && minutes === 0) {
					clearInterval(myTimer)
				} else {
					setHeures(heures + 1);
					setMinutes(0);
				}
			}
		}
	}, 820)

	function playNotif() {
		this.whoosh = new Sound("https://res.cloudinary.com/dn32la6ny/video/upload/v1590505833/11bis/sound/notification.mp3", null, (error) => {
			if (!error) {
				this.whoosh.play((success) => {
					if (success) {
						stop()
					}
				})
			}
		})
	}

	function playLowBattery() {
		this.whoosh = new Sound("https://res.cloudinary.com/dn32la6ny/video/upload/v1590505830/11bis/sound/baterrie_faible.mp3", null, (error) => {
			if (!error) {
				this.whoosh.play((success) => {
					if (success) {
						stop()
					}
				})
			}
		})
	}

	function stop() {
		if (!this.whoosh) return
		this.whoosh.stop()
		this.whoosh.release()
		this.whoosh = null
		clearTimer()
		setPlaying(false)
	}


	function clearTimer() {
		if (this.timer) {
			clearInterval(this.timer)
			this.timer = null
		}
	}

	function clearSound() {
		stop()
		if (this.timer) {
			clearInterval(this.timer)
			this.timer = null
		}
		setPlaying(false)
	}

	useEffect(() => {
		const subscriber = Auth().onAuthStateChanged(onAuthStateChanged)
		return (
			subscriber, // unsubscribe on unmount
			clearSound(),
			clearTimer()
		)
	}, [])

	if (initializing) return null

	const config = {
		animation: 'spring',
		config: {
			stiffness: 1000000,
			damping: 50,
			mass: 3,
			overshootClamping: true,
			restDisplacementThreshold: 0.01,
			restSpeedThreshold: 0.01,
		},
	}

	function timerCall() {
		return (
			<Text style={{ backgroundColor: 'transparent', fontFamily: R.fonts.Agrandir_TextBold, color: R.colors.dark_blue, fontSize: 15 }}>
				{heures < 10 ? `0${heures}` : heures}: {minutes < 10 ? `0${minutes}` : minutes}
			</Text>
		)
	}


	function isAlarm() {
		return (
			<View style={{ height: '100%' }}>
				<AlarmeScreen />
			</View>
		)
	}

	function isNotifications(app, name, text ) {
		return (
			<Modal transparent={true} animationType={'fade'}>
				{playNotif()}
				<View style={{ width: '90%', height: 'auto', marginTop: '5%', marginLeft: 22, marginRight: 22, backgroundColor: R.colors.saumon, borderRadius: 10, borderWidth: 1, borderColor: R.colors.dark_blue }} >
					<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: 10 }} >
						{
							app === 'lydia'
							? <Image style={{ width: 20, height: 20, padding: 10 }} source={require('./main/assets/icons/app/lydia.png')} />
							: app === 'messagerie'
							? <Image style={{ width: 20, height: 20, padding: 10 }} source={require('./main/assets/icons/app/messagerie.png')} />
							: app === 'horloge'
							? <Image style={{ width: 20, height: 20, padding: 10 }} source={require('./main/assets/icons/app/horloge.png')} />
							: null
						}
						<Text style={{ marginTop: 4, paddingLeft: 10, textTransform: 'uppercase', fontFamily: R.fonts.Agrandir_TextBold, fontSize: 13, color: R.colors.dark_blue }}>{app}</Text>
						<Text style={{ width: '30%', marginTop: 4, marginLeft: '40%', textAlign: 'right', fontFamily: R.fonts.Agrandir_Regular, fontSize: 13, color: R.colors.dark_blue, opacity: 0.5 }}>maintenant</Text>
					</View>
					<View style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
						<Text style={{ fontFamily: R.fonts.Agrandir_TextBold, fontSize: 13, color: R.colors.dark_blue }}>{name}</Text>
						<Text style={{ paddingTop: 8, marginBottom: 8, fontFamily: R.fonts.Agrandir_Regular, fontSize: 13, color: R.colors.dark_blue }}>{text}</Text>
					</View>
				</View>
			</Modal>
		)
	}

	function isLowBattery() {
		return (
			<Modal transparent={true} animationType={'fade'}>
				<View style={{ width: '60%', height: '12%', marginTop: '65%', marginLeft: '20%', marginRight: 22, backgroundColor: R.colors.saumon, borderRadius: 10, borderWidth: 1, borderColor: R.colors.dark_blue }} >
					<View style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
						<Text style={{ marginTop: 4, textAlign: 'center', textTransform: 'uppercase', fontFamily: R.fonts.Agrandir_TextBold, fontSize: 16, color: R.colors.blue }}>Batterie faible</Text>
						<View style={{ marginTop: 4, borderBottomColor: R.colors.blue, borderBottomWidth: 1 }}/>
						<Text style={{ marginTop: 13, textAlign: 'center', fontFamily: R.fonts.Agrandir_Regular, fontSize: 14, color: R.colors.dark_blue }}>Il vous reste 5% de batterie</Text>
					</View>
				</View>
			</Modal>
		)
	}

	console.disableYellowBox = true;

	return (
		<NavigationContainer ref={navigationRef}>
			<View style={{ position: 'absolute', zIndex: 1, top: 0}}>
				<StatusBar hidden={true} />
				{
					user 
					?  <View>
						<View style={{ width: '78%', marginLeft: 38, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
							<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'baseline' }}>
								<Image source={require('./main/assets/icons/icon_reseau.png')}/>
								<Text> Free 4G</Text>
							</View>
							<View style={{ marginTop: 5}}>
								{timerCall()}
							</View>
							<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
							{
								heures >= 20 && heures <= 23
								? <Text>5% </Text>
								: heures >= 23 && minutes <= 20
								? <Text>2% </Text>
								: heures >= 23 && minutes >= 20
								? <Text>1% </Text>
								: <Text>9% </Text>
							}
								
								<Image source={require('./main/assets/icons/icon_batterie.png')}/>
							</View>

						</View>
							<View>
								{
									heures === 20  && minutes <= 2
									? <View>{isLowBattery()}</View>
									: null
								}
								{
									heures === 20 && minutes === 0
									? <View>{playLowBattery()}</View>
									: null
								}
								{/* {!alarmStop && heures === 19 && minutes >= 30 && minutes <= 50
								? <View>
									{isAlarm()}
									<TouchableOpacity style={styles.container__alarme__stop} onPress={() => { setAlarm(false), setAlarmStop(true) }}>
										<Text style={styles.container__alarme__stop__text}>Arrêter</Text>
									</TouchableOpacity>
								</View>
								: null
								} */}
								{
									heures === 18 && minutes === 7
									? <View>{isNotifications(app = 'lydia', name = 'Ben ❤️', text = 'charges loc juin + 57,38€')}</View>
									: heures === 18 && minutes === 13
									? <View>{isNotifications(app = 'messagerie', name = 'Ben ❤️', text = 't’as quelque chose en tete pour ce soir?')}</View>
									: heures === 18 && minutes === 14
									? <View>{isNotifications(app = 'messagerie', name = 'Ben ❤️', text = 'Un poulet coco du chef du chef ça te tente?')}</View>
									: heures === 18 && minutes === 27
									? <View>{isNotifications(app = 'messagerie', name = 'Ben ❤️', text = "Ma présentation s'est bien passée j'ai très envie de fêter ça avec toi ce soir!")}</View>
									: heures === 18 && minutes === 52
									? <View>{isNotifications(app = 'messagerie', name = 'Ben ❤️', text = "ok, on minimise les sorties donc je vais pas chez monop’ que pour un poulet, même fermier 😉...")}</View>
									: heures === 18 && minutes === 54
									? <View>{isNotifications(app = 'messagerie', name = 'Ben ❤️', text = "Tu réponds pas? Tu veux manger autre chose? t'en peux plus de mon poulet coco c'est ça? Je le savais :p")}</View>
									: heures === 19 && minutes === 6
									? <View>{isNotifications(app = 'messagerie', name = 'Ben ❤️', text = "Haha en vrai répond Jade")}</View>
									: heures === 19 && minutes === 7
									? <View>{isNotifications(app = 'messagerie', name = 'Ben ❤️', text = "Allez c'est pas drôle ^^")}</View>
									: heures === 19 && minutes === 22
									? <View>{isNotifications(app = 'messagerie', name = 'Ben ❤️', text = "T'es une gamine, j'arrive...")}</View>
									: heures === 19 && minutes === 37
									? <View>{isNotifications(app = 'messagerie', name = 'Caro - Weekend Espelette', text = "Caroline a nommé le groupe \"Espelette aout ?\"")}</View>
									: heures === 19 && minutes === 38
									? <View>{isNotifications(app = 'messagerie', name = 'Caro - Weekend Espelette', text = "Show must go on!")}</View>
									: heures === 20 && minutes === 2
									? <View>{isNotifications(app = 'messagerie', name = 'Ben ❤️', text = "Bonjour cher voyeur, comment le tel de ma copine est arrivé entre tes mains?")}</View>
									: heures === 21 && minutes === 46
									? <View>{isNotifications(app = 'messagerie', name = 'Ben - Weekend Espelette', text = "Ca tomberait pas pendant les férias cette histoire? 😆 Dans tous les cas avec Jade on est o-pé-ra-tio-nels!!")}</View>
									: heures === 23 && minutes === 16
									? <View>{isNotifications(app = 'messagerie', name = 'Ben ❤️', text = "Répond connard arrête de lacher des vues, je vais porter plainte ")}</View>
									: null
								}
							</View>
							<View>
								{
									heures >= 24
									? <View style={{backgroundColor: R.colors.blue, position: 'relative', top: 0, left: 0, Zindex: 222222, width: '100%', height: '100%' }}>
										<ImageBackground source={require('./main/assets/fond/Points.png')} style={styles.backgroundImage}>
										{
											heures === 24 && minutes >= 2
											? <Image style={{marginTop: '6%', marginLeft: 1}} source={require('./main/assets/fond/fin_batterie.png')}/>
											: null
										}
										{
											heures === 24 && minutes <= 2
											? <Image style={{marginTop: '68%', marginLeft: '23%'}} source={require('./main/assets/fond/batterie.png')}/>
											: null
										}
										</ImageBackground>
									</View>
									: null
								}
							</View>
						</View>
					: null
				}
			</View>
			
			<Stack.Navigator headerMode="screen" initialRouteName="HomeScreen">
				{/* {
						!user
					? 
						<Stack.Screen name="Code" component={ CodeScreen } />
					:
						<Stack.Screen name="Home" component={ HomeScreen } />
					} */}

					{
						!user
					?
						<Stack.Screen 
							name="Code" 
							component={ CodeScreen }
							options={{
								headerBackTitleVisible: false,
								headerTintColor: R.colors.dark_blue,
								headerTitle: '',
								headerTransparent: true
							}}
						/>
					:
						<>
							<Stack.Screen
								name="Home"
								component={HomeScreen}
								options={{
									headerBackTitleVisible: false,
									headerTintColor: R.colors.dark_blue,
									headerTitle: '',
									headerTransparent: true
								}}
								initialParams={{ user: user }}
							/>

							<Stack.Screen
								name="Fin"
								component={FinScreen}
								options={{
									headerRight: '',
									headerLeft: '',
									headerBackTitleVisible: false,
									headerTitle: '',
									headerTransparent: true,
									gestureEnabled: false,
									transitionSpec: { open: config, close: config }
								}}

							/>
							<Stack.Screen
								name="Instagram"
								component={InstagramScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									headerLeft: '',
									gestureEnabled: false,
									headerBackTitleVisible: false,
									headerTitle: '',
									headerTransparent: true
								}}
							/>
							<Stack.Screen
								name="Justeat"
								component={JusteatScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									gestureEnabled: true,
									headerBackTitleVisible: true,
									headerTintColor: R.colors.dark_blue,
									headerTitle: 'Détails',
									headerTransparent: false,
									headerStyle: { backgroundColor: R.colors.saumon },
									headerBackTitleStyle: { fontSize: 12 }
								}}
							/>
							<Stack.Screen
								name="JusteatList"
								component={JusteatListScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									headerLeft: '',
									gestureEnabled: false,
									headerBackTitleVisible: false,
									headerTitle: '',
									headerTransparent: true
								}}
							/>
							<Stack.Screen
								name="Calendrier"
								component={CalendrierScreen}
								component={CalendrierScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									headerLeft: '',
									gestureEnabled: false,
									headerTransparent: true,
									headerTitle: '',
									headerBackTitleVisible: true,
									headerTintColor: R.colors.dark_blue,
									headerTitle: '',
									headerTransparent: false,
									headerStyle: { backgroundColor: R.colors.saumon },
									transitionSpec: { open: config, close: config }
								}}
							/>
							<Stack.Screen
								name="Rappels"
								component={RappelsScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									gestureEnabled: true,
									headerBackTitleVisible: true,
									headerTintColor: R.colors.dark_blue,
									headerTitle: '',
									headerTransparent: false,
									headerStyle: { backgroundColor: R.colors.saumon },
									headerBackTitleStyle: { fontSize: 12 }
								}}
							/>
							<Stack.Screen
								name="RappelsList"
								component={RappelsListScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									headerLeft: '',
									gestureEnabled: false,
									headerBackTitleVisible: false,
									headerTitle: '',
									headerTransparent: true
								}}
							/>
							<Stack.Screen
								name="Lydia"
								component={LydiaScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									headerLeft: '',
									gestureEnabled: false,
									headerBackTitleVisible: false,
									headerTitle: '',
									headerTransparent: true
								}}
							/>
							<Stack.Screen
								name="Netflix"
								component={NetflixScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									headerLeft: '',
									gestureEnabled: false,
									headerBackTitleVisible: false,
									headerTitle: '',
									headerTransparent: true
								}}
							/>
							<Stack.Screen
								name="Alarme"
								component={AlarmeScreen}
								options={{
									headerRight: '',
									headerLeft: '',
									gestureEnabled: false,
									headerBackTitleVisible: false,
									headerTitle: '',
									headerTransparent: true
								}}

							/>
							<Stack.Screen
								name="Messages"
								component={MessagesScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									gestureEnabled: true,
									headerBackTitleVisible: true,
									headerTintColor: R.colors.dark_blue,
									headerTitle: '',
									headerTransparent: true,
									headerStyle: { backgroundColor: R.colors.saumon },
									headerBackTitleStyle: { fontSize: 12 }
								}}
							/>
							<Stack.Screen
								name="MessagesList"
								component={MessagesListScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									headerLeft: '',
									gestureEnabled: false,
									headerTransparent: true,
									headerTitle: '',
									headerBackTitleVisible: true,
									headerTintColor: R.colors.dark_blue,
									headerTitle: '',
									headerTransparent: false,
									headerStyle: { backgroundColor: R.colors.saumon },
								}}
							/>
							<Stack.Screen
								name="Spotify"
								component={SpotifyScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									headerLeft: '',
									gestureEnabled: false,
									headerBackTitleVisible: false,
									headerTitle: '',
									headerTransparent: true
								}}
							/>
							<Stack.Screen
								name="PhotoMap"
								component={PhotoMapScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									gestureEnabled: true,
									headerBackTitleVisible: true,
									headerTintColor: R.colors.dark_blue,
									headerTitle: '',
									headerTransparent: false,
									headerStyle: { backgroundColor: R.colors.saumon },
									headerBackTitleStyle: { fontSize: 12 },
									transitionSpec: { open: config, close: config }
								}}
							/>
							<Stack.Screen
								name="PhotoVisuel"
								component={PhotoVisuelScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									gestureEnabled: true,
									headerBackTitleVisible: true,
									headerTintColor: R.colors.dark_blue,
									headerTitle: '',
									headerTransparent: false,
									headerStyle: { backgroundColor: R.colors.saumon },
									headerBackTitleStyle: { fontSize: 12 },
									transitionSpec: { open: config, close: config }
								}}
							/>
							<Stack.Screen
								name="PhotosDeleted"
								component={PhotosDeletedScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									gestureEnabled: true,
									headerBackTitleVisible: true,
									headerTintColor: R.colors.dark_blue,
									headerTitle: 'Suppr. récemment',
									headerTransparent: false,
									headerStyle: { backgroundColor: R.colors.saumon },
									headerBackTitleStyle: { fontSize: 12 },
									transitionSpec: { open: config, close: config }
								}}
							/>
							<Stack.Screen
								name="PhotosMasked"
								component={PhotosMaskedScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									gestureEnabled: true,
									headerBackTitleVisible: true,
									headerTintColor: R.colors.dark_blue,
									headerTitle: 'Masqués',
									headerTransparent: false,
									headerStyle: { backgroundColor: R.colors.saumon },
									headerBackTitleStyle: { fontSize: 12 },
									transitionSpec: { open: config, close: config }
								}}
							/>
							<Stack.Screen
								name="PhotosAlbum1"
								component={PhotosAlbum1Screen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									gestureEnabled: true,
									headerBackTitleVisible: true,
									headerTintColor: R.colors.dark_blue,
									headerTitle: 'Plantes',
									headerTransparent: false,
									headerStyle: { backgroundColor: R.colors.saumon },
									headerBackTitleStyle: { fontSize: 12 },
									transitionSpec: { open: config, close: config }
								}}
							/>
							<Stack.Screen
								name="PhotosPersonnes"
								component={PhotosPersonnesScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									gestureEnabled: true,
									headerBackTitleVisible: true,
									headerTintColor: R.colors.dark_blue,
									headerTitle: 'Personnes',
									headerTransparent: false,
									headerStyle: { backgroundColor: R.colors.saumon },
									headerBackTitleStyle: { fontSize: 12 },
									transitionSpec: { open: config, close: config }
								}}
							/>
							<Stack.Screen
								name="PhotosScreenshot"
								component={PhotosScreenshotScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									gestureEnabled: true,
									headerBackTitleVisible: true,
									headerTintColor: R.colors.dark_blue,
									headerTitle: 'Screenshot',
									headerTransparent: false,
									headerStyle: { backgroundColor: R.colors.saumon },
									headerBackTitleStyle: { fontSize: 12 },
									transitionSpec: { open: config, close: config }
								}}
							/>
							<Stack.Screen
								name="PhotosFavoris"
								component={PhotosFavorisScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									gestureEnabled: true,
									headerBackTitleVisible: true,
									headerTintColor: R.colors.dark_blue,
									headerTitle: 'Favoris',
									headerTransparent: false,
									headerStyle: { backgroundColor: R.colors.saumon },
									headerBackTitleStyle: { fontSize: 12 },
									transitionSpec: { open: config, close: config }
								}}
							/>
							<Stack.Screen
								name="PhotosRecents"
								component={PhotosRecentsScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									gestureEnabled: true,
									headerBackTitleVisible: true,
									headerTintColor: R.colors.dark_blue,
									headerTitle: 'Récents',
									headerTransparent: false,
									headerStyle: { backgroundColor: R.colors.saumon },
									headerBackTitleStyle: { fontSize: 12 },
									transitionSpec: { open: config, close: config }
								}}
							/>
							<Stack.Screen
								name="Photos"
								component={PhotosScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									headerLeft: '',
									gestureEnabled: false,
									headerBackTitleVisible: true,
									headerTitle: '',
									headerTransparent: false,
									headerTintColor: R.colors.dark_blue,
									headerStyle: { backgroundColor: R.colors.saumon },
								}}
							/>
							<Stack.Screen
								name="Note"
								component={NoteScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									gestureEnabled: true,
									headerBackTitleVisible: true,
									headerTintColor: R.colors.dark_blue,
									headerTitle: '',
									headerTransparent: false,
									headerStyle: { backgroundColor: R.colors.saumon },
									headerBackTitleStyle: { fontSize: 12 }
								}}
							/>
							<Stack.Screen
								name="NotesList"
								component={NotesListScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									headerLeft: '',
									gestureEnabled: false,
									headerBackTitleVisible: false,
									headerTitle: '',
									headerTransparent: true
								}}
							/>
							<Stack.Screen
								name="GoogleMaps"
								component={GoogleMapsScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									headerLeft: '',
									gestureEnabled: false,
									headerBackTitleVisible: false,
									headerTitle: '',
									headerTransparent: true
								}}
							/>
							<Stack.Screen
								name="GoogleHome"
								component={GoogleHomeScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									headerLeft: '',
									gestureEnabled: false,
									headerBackTitleVisible: false,
									headerTitle: '',
									headerTransparent: true
								}}
							/>
							<Stack.Screen
								name="Meteo"
								component={MeteoScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									headerLeft: '',
									gestureEnabled: false,
									headerBackTitleVisible: false,
									headerTitle: '',
									headerTransparent: true
								}}
							/>
							<Stack.Screen
								name="Horloge"
								component={HorlogeScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									headerLeft: '',
									gestureEnabled: false,
									headerBackTitleVisible: false,
									headerTitle: '',
									headerTransparent: true
								}}
							/>
							<Stack.Screen
								name="Sante"
								component={SanteScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									headerLeft: '',
									gestureEnabled: false,
									headerBackTitleVisible: false,
									headerTitle: '',
									headerTransparent: true
								}}
							/>
							<Stack.Screen
								name="Contacts"
								component={ContactsScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									headerLeft: '',
									gestureEnabled: false,
									headerTransparent: true,
									headerTitle: '',
									headerBackTitleVisible: true,
									headerTintColor: R.colors.dark_blue,
									headerTitle: '',
									headerTransparent: false,
									headerStyle: { backgroundColor: R.colors.saumon },
								}}
							/>
							<Stack.Screen
								name="FicheContact"
								component={FicheContactScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									gestureEnabled: true,
									headerBackTitleVisible: true,
									headerTintColor: R.colors.dark_blue,
									headerTitle: '',
									headerTransparent: true,
									headerBackTitleStyle: { fontSize: 12 }
								}}
							/>
							<Stack.Screen
								name="CallsFavoris"
								component={CallsFavorisScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									headerLeft: '',
									gestureEnabled: false,
									headerTransparent: true,
									headerTitle: '',
									transitionSpec: { open: config, close: config }
								}}
							/>
							<Stack.Screen
								name="CallsRecents"
								component={CallsRecentsScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									headerLeft: '',
									gestureEnabled: false,
									headerTransparent: true,
									headerTitle: '',
									headerBackTitleVisible: true,
									headerTintColor: R.colors.dark_blue,
									headerTitle: '',
									headerTransparent: false,
									headerStyle: { backgroundColor: R.colors.saumon },
								}}
							/>
							<Stack.Screen
								name="CallsContacts"
								component={CallsContactsScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									headerLeft: '',
									gestureEnabled: false,
									headerTransparent: true,
									headerTitle: '',
									headerBackTitleVisible: true,
									headerTintColor: R.colors.dark_blue,
									headerTitle: '',
									headerTransparent: false,
									headerStyle: { backgroundColor: R.colors.saumon },
									transitionSpec: { open: config, close: config }
								}}
							/>
							<Stack.Screen
								name="CallsClavier"
								component={CallsClavierScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									headerLeft: '',
									gestureEnabled: false,
									headerTransparent: true,
									headerTitle: '',
									animationEnabled: true,
									animationTypeForReplace: 'pop'
								}}
							/>
							<Stack.Screen
								name="CallsMessagerie"
								component={CallsMessagerieScreen}
								options={{
									headerRight: () => (
										<Button
											onPress={() => navigate('Home')}
											title="✕"
											color={R.colors.dark_blue}
										/>
									),
									headerLeft: '',
									gestureEnabled: false,
									headerTransparent: true,
									headerTitle: '',
									transitionSpec: { open: config, close: config }
								}}
							/>
							<Stack.Screen
								name="Calling"
								component={CallingScreen}
								options={{
									gestureEnabled: false,
									headerShown: false
								}}
							/>
							<Stack.Screen
								name="IncomingCall"
								component={IncomingCallScreen}
								options={{
									gestureEnabled: false,
									headerShown: false
								}}
							/>
						</>
					}
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container__alarme__stop: {
		width: '50%',
		height: 'auto',
		position: 'absolute',
		top: '53%',
		left: '25%',
		backgroundColor: 'rgba(255, 185, 157, 0.2)',
		borderColor: R.colors.dark_blue,
		borderWidth: 1,
		borderRadius: 50,
	},

	container__alarme__stop__text: {
		fontFamily: R.fonts.Agrandir_Regular,
		fontSize: 20,
		color: R.colors.saumon,
		textAlign: 'center',
		padding: 15,
		marginTop: 5,
	},

	backgroundImage: {
		width: '100%',
		height: '100%'
	},
})



export default App