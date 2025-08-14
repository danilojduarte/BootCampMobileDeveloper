import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './BatTextInputStyles';

export function BatTextInput() {
  return (
    <View>
      <TextInput 
      style={styles.input}
      placeholder='Password'
    >

      </TextInput>
    </View>
  );
}