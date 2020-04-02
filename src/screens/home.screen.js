import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableWithoutFeedback, Button } from 'react-native';

import Auth from '@react-native-firebase/auth';

const HomeScreen = () => {

    const signOut = async () => {
        try {
            await Auth().signOut();
        } catch(e) {
            console.warn(e.message)
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>WELCOME</Text>
            <Button 
                title="Sign out"
                onPress={() => signOut()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 50
    }
})

export default HomeScreen;