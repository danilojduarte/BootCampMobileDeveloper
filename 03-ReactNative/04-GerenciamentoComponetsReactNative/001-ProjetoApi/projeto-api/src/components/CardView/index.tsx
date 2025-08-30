import React from 'react';
import { View, Text, Button, Image } from 'react-native';

import Logo from '../../../assets/logo.png';
import { styles } from './styles';

export default function CardView(){
  return (
    <View style={styles.imageContainer}>
      <Text>CardView Works!!</Text>
    </View>
  );
}

// Aula, importando imagens