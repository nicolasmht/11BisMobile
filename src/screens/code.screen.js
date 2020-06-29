import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback, AsyncStorage, ImageBackground } from 'react-native'

import Auth from '@react-native-firebase/auth'
import Firestore from '@react-native-firebase/firestore'
import R from '../res/R'

const CodeScreen = ({ navigation }) => {

	const [code, setCode] = useState('');
	
	const _storeCode = async (code) => {
		try {
		  await AsyncStorage.setItem(
			'@code',
			code
		  );
		} catch (error) {
		  console.log(error);
		}
	  };

	const connectToDesktop = async () => {

		try {
			await Firestore()
			.collection('sessions')
			.doc(code)
			.update({
				connected: true
			});
			
			await _storeCode(code);

        	await Auth().signInAnonymously()
		} catch(error) {
			console.log(error);
		}

		
        
        // navigation.navigate('Home')
	}

	const addNumber = (number) => {
		
		if (code.length < 4) {
			setCode(code + number);
		}
	}

	useEffect(() => {

		if (code.length < 4) { return }

		connectToDesktop();
		
	}, [code])

	return (
		<>
			<View style={styles.container}>
				<ImageBackground source={require('../main/assets/fond/Points.png')} style={styles.backgroundImage}>

					{/* <View style={styles.containerCode}> */}
                        <Text style={styles.containerCode__text}>Entrer votre code</Text>
						<Text style={styles.code}>{code}</Text>
					{/* </View> */}

					<View style={styles.containerTouch}>
						<TouchableWithoutFeedback onPress={() => addNumber(1)}>
							<View style={styles.touch}><Text style={styles.textTouch}>1</Text></View>
						</TouchableWithoutFeedback>

						<TouchableWithoutFeedback onPress={() => addNumber(2)}>
							<View style={styles.touch}><Text style={styles.textTouch}>2</Text></View>
						</TouchableWithoutFeedback>

						<TouchableWithoutFeedback onPress={() => addNumber(3)}>
							<View style={styles.touch}><Text style={styles.textTouch}>3</Text></View>
						</TouchableWithoutFeedback>

						<TouchableWithoutFeedback onPress={() => addNumber(4)}>
							<View style={styles.touch}><Text style={styles.textTouch}>4</Text></View>
						</TouchableWithoutFeedback>

						<TouchableWithoutFeedback onPress={() => addNumber(5)}>
							<View style={styles.touch}><Text style={styles.textTouch}>5</Text></View>
						</TouchableWithoutFeedback>

						<TouchableWithoutFeedback onPress={() => addNumber(6)}>
							<View style={styles.touch}><Text style={styles.textTouch}>6</Text></View>
						</TouchableWithoutFeedback>

						<TouchableWithoutFeedback onPress={() => addNumber(7)}>
							<View style={styles.touch}><Text style={styles.textTouch}>7</Text></View>
						</TouchableWithoutFeedback>

						<TouchableWithoutFeedback onPress={() => addNumber(8)}>
							<View style={styles.touch}><Text style={styles.textTouch}>8</Text></View>
						</TouchableWithoutFeedback>

						<TouchableWithoutFeedback onPress={() => addNumber(9)}>
							<View style={styles.touch}><Text style={styles.textTouch}>9</Text></View>
						</TouchableWithoutFeedback>

						<TouchableWithoutFeedback onPress={() => addNumber(0)}>
							<View style={styles.touch}><Text style={styles.textTouch}>0</Text></View>
						</TouchableWithoutFeedback>
					</View>
				</ImageBackground>
			</View>
		</>
	)
}

const styles = StyleSheet.create({

	container: {
		...StyleSheet.absoluteFillObject,
		flex: 1,
		backgroundColor: R.colors.blue,
		width: '100%',
		height: '100%'
	},

	container__touch__icon: {
		padding: 10
	},
	
	containerCode: {
		flex: 2,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},

	containerCode__text: {
		position: 'absolute',
		fontSize: 20,
		fontFamily: R.fonts.Agrandir_GrandHeavy,
		color: R.colors.saumon,
		top: '15%',
		left: '20%',
		bottom: '10%'
	},

	code: {
		position: 'absolute',
		fontSize: 50,
		fontFamily: R.fonts.Agrandir_GrandHeavy,
		color: R.colors.saumon,
		top: '26%',
		left: '29%',
	},
	
	containerTouch: {
		color: R.colors.blue,
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: '70%',
	},

	touch: {
		width: 70,
		height: 70,
		marginHorizontal: 20,
		marginVertical: 15,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 50,
		borderWidth: 1,
		borderColor: R.colors.saumon,
	},

	textTouch: {
		fontSize: 20,
		fontFamily: R.fonts.Agrandir_GrandLight,
		color: R.colors.saumon,
		marginTop: 10,
	},

	backgroundImage: {
		width: '100%',
		height: '100%'
	},
})

export default CodeScreen