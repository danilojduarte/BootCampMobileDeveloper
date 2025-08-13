import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './BatLogoStyles';

import batLogo from '../../../assets/bat-logo.png'; // Adjust the path as necessary

export function BatLogo() {
  return (
    <View>
      <Text style={styles.title}>
        Bat Pass Generator
      </Text>
      <Image style={styles.logo} source={batLogo} />

    </View>
  );
}


