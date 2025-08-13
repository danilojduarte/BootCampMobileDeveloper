import React from "react";
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from "./Styles";
import { BatLogo } from "../../components/BatLogo/BatLogo";

export default function Home() {
  return(
    <View style={styles.appContainer}>

      <View style={styles.logoContainer}>
        <BatLogo />
      </View>
      
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
};




