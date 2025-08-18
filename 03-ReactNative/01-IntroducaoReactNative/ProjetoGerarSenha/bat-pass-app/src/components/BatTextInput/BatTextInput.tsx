import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './BatTextInputStyles';

interface BatTextInputProps{
  pass:string;
}

export function BatTextInput(props : BatTextInputProps) {
  return (
    <>
      <TextInput 
      style={styles.input}
      placeholder='Password'
      value={props.pass}
    >

      </TextInput>
    </>
  );
}