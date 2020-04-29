import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableWithoutFeedback } from 'react-native';

import Auth from '@react-native-firebase/auth';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// Screens
// import CodeScreen from './screens/code.screen';
import HomeScreen from './screens/home.screen';
import HorlogeScreen from './screens/Horloge/horloge.screen';
import SanteScreen from './screens/Sante/sante.screen';
import ContactsScreen from './screens/Contacts/contacts.screen';
import FicheContactScreen from './screens/Contacts/ficheContact.screen';
import CallScreen from './screens/Call/call.screen';
import AcceptCallScreen from './screens/Call/acceptCall.screen'

const App = () => {

	// Set an initializing state whilst Firebase connects
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState();

	// Handle user state changes
	function onAuthStateChanged(user) {
		setUser(user);
		if (initializing) setInitializing(false);
	}

	useEffect(() => {
		const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
    	return subscriber; // unsubscribe on unmount
	}, []);

	if (initializing) return null;

	return(
		<NavigationContainer>
			<Stack.Navigator headerMode='none'>

				{/* {
					!user
				? 
					<Stack.Screen name="Code" component={ CodeScreen } />
				:
					<Stack.Screen name="Home" component={ HomeScreen } />
				} */}
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Horloge" component={HorlogeScreen} />
				<Stack.Screen name="Sante" component={SanteScreen} />
				<Stack.Screen name="Contacts" component={ContactsScreen} />
				<Stack.Screen name="FicheContact" component={FicheContactScreen} />
				<Stack.Screen name="Call" component={CallScreen} />
				<Stack.Screen name="AcceptCall" component={AcceptCallScreen} />

			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
