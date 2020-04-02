import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableWithoutFeedback } from 'react-native';

import Auth from '@react-native-firebase/auth';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// Screens
import CodeScreen from './screens/code.screen';
import HomeScreen from './screens/home.screen';

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

				{
					!user
				? 
					<Stack.Screen name="Code" component={ CodeScreen } />
				:
					<Stack.Screen name="Home" component={ HomeScreen } />
				}
				
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
