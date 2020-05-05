import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableWithoutFeedback } from 'react-native'

import Auth from '@react-native-firebase/auth'
import Firestore from '@react-native-firebase/firestore'

const CodeScreen = ({ navigation }) => {

    const [code, setCode] = useState('')

	const connectToDesktop = async () => {

		await Firestore()
			.collection('sessions')
			.doc(code)
			.update({
				connected: true
            })

        await Auth().signInAnonymously()
        
        // navigation.navigate('Home')
	}

	const addNumber = (number) => {
		
		if (code.length < 4) {
			setCode(code + number)
		}
	}

	useEffect(() => {

		if (code.length < 4) { return }

		connectToDesktop()
		
	}, [code])

	return (
		<>
			<View style={styles.container}>

					<View style={styles.containerCode}>
                        <Text>Enter your code</Text>
						<Text style={styles.code}>{code}</Text>
					</View>

					<View style={styles.containerTouch}>
						<TouchableWithoutFeedback onPress={() => addNumber(7)}>
							<View style={styles.touch}><Text style={styles.textTouch}>7</Text></View>
						</TouchableWithoutFeedback>

						<TouchableWithoutFeedback onPress={() => addNumber(8)}>
							<View style={styles.touch}><Text style={styles.textTouch}>8</Text></View>
						</TouchableWithoutFeedback>

						<TouchableWithoutFeedback onPress={() => addNumber(9)}>
							<View style={styles.touch}><Text style={styles.textTouch}>9</Text></View>
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

						<TouchableWithoutFeedback onPress={() => addNumber(1)}>
							<View style={styles.touch}><Text style={styles.textTouch}>1</Text></View>
						</TouchableWithoutFeedback>

						<TouchableWithoutFeedback onPress={() => addNumber(2)}>
							<View style={styles.touch}><Text style={styles.textTouch}>2</Text></View>
						</TouchableWithoutFeedback>

						<TouchableWithoutFeedback onPress={() => addNumber(3)}>
							<View style={styles.touch}><Text style={styles.textTouch}>3</Text></View>
						</TouchableWithoutFeedback>

						<TouchableWithoutFeedback onPress={() => addNumber(1)}>
							<View style={styles.touch}><Text style={styles.textTouch}>0</Text></View>
						</TouchableWithoutFeedback>
					</View>
					
			</View>
		</>
	)
}

const styles = StyleSheet.create({

	container: {
		...StyleSheet.absoluteFillObject,
		flex: 1
	},

	containerCode: {
		flex: 2,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},

	code: {
		fontSize: 80,
	},
	
	containerTouch: {
		// ...StyleSheet.absoluteFillObject,
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
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
		borderWidth: 3,
		borderColor: "#000",
		borderStyle: 'solid',
	},

	textTouch: {
		fontSize: 20
	}

})

export default CodeScreen