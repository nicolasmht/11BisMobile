import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableWithoutFeedback, Button } from 'react-native'

import Auth from '@react-native-firebase/auth'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
// import CodeScreen from './screens/code.screen'
import HomeScreen from './screens/home.screen'

import HorlogeScreen from './screens/Horloge/horloge.screen'
import SanteScreen from './screens/Sante/sante.screen'
import ContactsScreen from './screens/Contacts/contacts.screen'
import FicheContactScreen from './screens/Contacts/ficheContact.screen'
import MeteoScreen from './screens/Meteo/meteo.screen'
import GoogleHomeScreen from './screens/Google/google.home.screen'
import NotesListScreen from './screens/Notes/notes.list.screen'
import NoteScreen from './screens/Notes/note.screen'

import PhotosScreen from './screens/Photos/photos.screen'
import PhotosRecentsScreen from './screens/Photos/photos.recents.screen'
import PhotoVisuelScreen from './screens/Photos/photo.visuel.screen'
import PhotosFavorisScreen from './screens/Photos/photos.favoris.screen'
import PhotosProScreen from './screens/Photos/photos.pro.screen'
import PhotosScreenshotScreen from './screens/Photos/photos.screenshot.screen'
import PhotosPersonnesScreen from './screens/Photos/photos.personnes.screen'
import PhotosMaskedScreen from './screens/Photos/photos.masked.screen'
import PhotosDeletedScreen from './screens/Photos/photos.deleted.screen'

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

const App = () => {
	
	// Set an initializing state whilst Firebase connects
	const [initializing, setInitializing] = useState(true)
	const [user, setUser] = useState()

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
						headerTintColor: '#151C38', 
						headerTitle: '', 
						headerTransparent: true 
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
								color="#151C38"
							/>
						),
						gestureEnabled: true,
						headerBackTitleVisible: true,
						headerTintColor: '#151C38',
						headerTitle: '',
						headerTransparent: false,
						headerStyle: { backgroundColor: '#FFB99D' },
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
								color="#151C38"
							/>
						),
						gestureEnabled: true,
						headerBackTitleVisible: true,
						headerTintColor: '#151C38',
						headerTitle: 'Suppr. récemment',
						headerTransparent: false,
						headerStyle: { backgroundColor: '#FFB99D' },
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
								color="#151C38"
							/>
						),
						gestureEnabled: true,
						headerBackTitleVisible: true,
						headerTintColor: '#151C38',
						headerTitle: 'Masqués',
						headerTransparent: false,
						headerStyle: { backgroundColor: '#FFB99D' },
						headerBackTitleStyle: { fontSize: 12 },
						transitionSpec: { open: config, close: config }
					}}
				/>
				<Stack.Screen
					name="PhotosPro"
					component={PhotosProScreen}
					options={{
						headerRight: () => (
							<Button
								onPress={() => navigate('Home')}
								title="✕"
								color="#151C38"
							/>
						),
						gestureEnabled: true,
						headerBackTitleVisible: true,
						headerTintColor: '#151C38',
						headerTitle: 'Professionnel',
						headerTransparent: false,
						headerStyle: { backgroundColor: '#FFB99D' },
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
								color="#151C38"
							/>
						),
						gestureEnabled: true,
						headerBackTitleVisible: true,
						headerTintColor: '#151C38',
						headerTitle: 'Personnes',
						headerTransparent: false,
						headerStyle: { backgroundColor: '#FFB99D' },
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
								color="#151C38"
							/>
						),
						gestureEnabled: true,
						headerBackTitleVisible: true,
						headerTintColor: '#151C38',
						headerTitle: 'Screenshot',
						headerTransparent: false,
						headerStyle: { backgroundColor: '#FFB99D' },
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
								color="#151C38"
							/>
						),
						gestureEnabled: true,
						headerBackTitleVisible: true,
						headerTintColor: '#151C38',
						headerTitle: 'Favoris',
						headerTransparent: false,
						headerStyle: { backgroundColor: '#FFB99D' },
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
								color="#151C38"
							/>
						),
						gestureEnabled: true,
						headerBackTitleVisible: true,
						headerTintColor: '#151C38',
						headerTitle: 'Récents',
						headerTransparent: false,
						headerStyle: { backgroundColor: '#FFB99D' },
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
								color="#151C38"
							/>
						),
						headerLeft: '',
						gestureEnabled: true,
						headerBackTitleVisible: true,
						headerTitle: '',
						headerTransparent: false,
						headerTintColor: '#151C38',
						headerStyle: { backgroundColor: '#FFB99D' },
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
								color="#151C38"
							/>
						),
						gestureEnabled: true,
						headerBackTitleVisible: true,
						headerTintColor: '#151C38',
						headerTitle: '',
						headerTransparent: false,
						headerStyle: { backgroundColor: '#FFB99D'},
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
								color="#151C38"
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
								color="#151C38"
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
								color="#151C38"
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
								color="#151C38"
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
								color="#151C38"
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
							color="#151C38"
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
					name="FicheContact" 
					component={FicheContactScreen} 
					options={{
						headerRight: () => (
							<Button
								onPress={() => navigate('Home')}
								title="✕"
								color="#151C38"
							/>
						),
						gestureEnabled: true, 
						headerBackTitleVisible: true, 
						headerTintColor: '#151C38', 
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
								color="#151C38"
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
								color="#151C38"
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
					name="CallsContacts" 
					component={CallsContactsScreen} 
					options={{
						headerRight: () => (
							<Button
								onPress={() => navigate('Home')}
								title="✕"
								color="#151C38"
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
					name="CallsClavier" 
					component={CallsClavierScreen} 
					options={{
						headerRight: () => (
							<Button
								onPress={() => navigate('Home')}
								title="✕"
								color="#151C38"
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
								color="#151C38"
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

export default App
