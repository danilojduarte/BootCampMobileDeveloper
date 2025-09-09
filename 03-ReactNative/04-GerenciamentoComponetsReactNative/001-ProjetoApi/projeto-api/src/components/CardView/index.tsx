import React from 'react';
import { View, Text, Button, Image } from 'react-native';

import Logo from '../../../assets/logo.png';
import { styles } from './styles';
import Divider from '../Divider';

export default function CardView(){

  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
        <Image style={styles.imageLogo} source={Logo} />
      </View>
  );

  const renderCarDetails = () => (
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>Model</Text>
    </View>
  )

  const renderCardImage = () => (
    <Image style={styles.image}
    source={{ uri: "https://digitalinnovationone.github.io/fake-data-api-lamborghini/assets/3.png",}}
  )



  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}


      <Divider />
      {renderCarDetails()}
    </View>
  );
}

// Aula, Render Car Imagem