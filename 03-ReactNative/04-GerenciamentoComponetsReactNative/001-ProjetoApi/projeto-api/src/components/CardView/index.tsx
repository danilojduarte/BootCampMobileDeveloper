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

  const renderCarDetails = () => ({})




  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}


      <Divider />
    </View>
  );
}

// Aula, Render Car Detail