/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Navigation from './src/navigation';
import { AuthProvider } from './src/context/AuthContext';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';




function App() {


  return (
    <SafeAreaView style={styles.root}>
      <AuthProvider>
      <Navigation/>
      </AuthProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'#F9FBFC'
  }
});

export default App;
