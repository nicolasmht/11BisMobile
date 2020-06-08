import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Button } from 'react-native'

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

App = () => {
	// Set an initializing state whilst Firebase connects
	const [initializing, setInitializing] = useState(true)
	const [user, setUser] = useState()
	const [alarm, setAlarm] = useState(false)
	const [alarmStop, setAlarmStop] = useState(false)

	// Handle user state changes
	function onAuthStateChanged(user) {
		setUser(user)
		if (initializing) setInitializing(false)
	}

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
	
	if (alarm === true && alarmStop === false) {
		return (
			<View>
				{isAlarm()}
				<TouchableOpacity style={styles.container__alarme__stop} onPress={() => { setAlarm(false), setAlarmStop(true) }}>
					<Text style={styles.container__alarme__stop__text}>Arrêter</Text>
				</TouchableOpacity>
			</View>
		)
	} else {
		setTimeout(() => {
			setAlarm(true)
		}, 10000000000);
		return(
			<NavigationContainer ref={navigationRef}>
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
						name="Calendrier"
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
							headerStyle: { backgroundColor: R.colors.saumon},
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
							headerTransparent: true ,
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
							transitionSpec: {open: config,close: config} 
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


	function isAlarm() {
		return(
			<View style={{height: '100%'}}>
				<AlarmeScreen/>
			</View>
		)
	}
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