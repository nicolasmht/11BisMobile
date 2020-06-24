import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Button, StatusBar, ImageBackground } from 'react-native'

import Auth from '@react-native-firebase/auth'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import R from './res/R'

// Screens
// import CodeScreen from './screens/code.screen'
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
	const [minutes, setMinutes] = useState(6);
	const [heures, setHeures] = useState(18);

	// Handle user state changes
	function onAuthStateChanged(user) {
		setUser(user)
		if (initializing) setInitializing(false)
	}


	const myTimer = useInterval(() => {
		if (minutes >= 0) {
			console.log(minutes)
			setMinutes(minutes + 1)
		}
		if (minutes === 59) {
			setMinutes(0);
			console.log('sec 0')

			if (heures === 0 && minutes === 0) {
				clearInterval(myTimer)
				console.log('clear')
			} else {
				console.log('min')
				setHeures(heures + 1);
				setMinutes(0);
			}
		}
	}, 60000)


	useEffect(() => {
		const subscriber = Auth().onAuthStateChanged(onAuthStateChanged)
		return subscriber // unsubscribe on unmount
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
			<Text style={{ backgroundColor: 'transparent', fontFamily: R.fonts.Agrandir_Regular, color: R.colors.saumon, fontSize: 15 }}>
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

	return (
		<NavigationContainer ref={navigationRef}>
			<View style={{ position: 'absolute', zIndex: 10, top: 8, left: '45%' }}>
				{/* <ImageBackground source={require('./main/assets/fond/Points.png')} style={{width: '100%'}}> */}
				<StatusBar hidden={true} />
				{/* <View style={{position:'absolute', top: 8, left: '45%', bottom: 0, right: 0}}> */}
				{timerCall()}
				{/* </View> */}
				{/* </ImageBackground> */}
			</View>
			<View>
				{!alarmStop && heures === 18 && minutes === 7
					? <View>
						{isAlarm()}
						<TouchableOpacity style={styles.container__alarme__stop} onPress={() => { setAlarm(false), setAlarmStop(true) }}>
							<Text style={styles.container__alarme__stop__text}>Arrêter</Text>
						</TouchableOpacity>
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

				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{
						headerBackTitleVisible: false,
						headerTintColor: R.colors.dark_blue,
						headerTitle: '',
						headerTransparent: true
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
						gestureEnabled: true,
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
})



export default App