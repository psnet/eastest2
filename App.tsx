import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import AppLoading from 'expo-app-loading';

import {
  ArchivoBlack_400Regular,
  useFonts,
} from '@expo-google-fonts/archivo-black';
import { AnnieUseYourTelescope_400Regular } from '@expo-google-fonts/annie-use-your-telescope';
import { Arizonia_400Regular } from '@expo-google-fonts/arizonia';
import { Audiowide_400Regular } from '@expo-google-fonts/audiowide';
import { Barrio_400Regular } from '@expo-google-fonts/barrio';

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    ArchivoBlack_400Regular,
    AnnieUseYourTelescope_400Regular,
    Arizonia_400Regular,
    Audiowide_400Regular,
    Barrio_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if (fontsError) {
    Alert.alert(`Error during useFonts hook: ${fontsError}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text1}>
          Some text here
        </Text>
      </View>

      <View style={styles.textWrapper}>
        <Text style={styles.text2}>
          Some text here
        </Text>
      </View>

      <View style={styles.textWrapper}>
        <Text style={styles.text3}>
          Some text here
        </Text>
      </View>

      <View style={styles.textWrapper}>
        <Text style={styles.text4}>
          Some text here
        </Text>
      </View>

      <View style={styles.textWrapper}>
        <Text style={styles.text5}>
          Some text here
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textWrapper: {
    marginTop: 20,
  },

  text1: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'ArchivoBlack_400Regular'
  },

  text2: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'AnnieUseYourTelescope_400Regular'
  },

  text3: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Arizonia_400Regular'
  },

  text4: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Audiowide_400Regular'
  },

  text5: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Barrio_400Regular'
  },
});
