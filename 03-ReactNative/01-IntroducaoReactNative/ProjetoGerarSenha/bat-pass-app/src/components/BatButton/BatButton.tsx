import React from 'react';
import { View, Button } from 'react-native';

import { styles } from './BatButtonStyles';

export function BatButton() {
  return (
    <View style={styles.container}>
      <Button 
      onPress={() => {console.log("Olá")}}
      title="Click aqui"
      accessibilityLabel='Clique em mim'
       />
    </View>
  );
}