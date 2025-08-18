import React from 'react';
import { View, Button, Pressable, Text } from 'react-native';
import { BatTextInput } from '../BatTextInput/BatTextInput'; 
import { useState } from 'react';
import * as Clipboard from 'expo-clipboard';

import { styles } from './BatButtonStyles';
import generatePass from '../../service/passwordServices';

export function BatButton() {
  const [pass, setPass] = useState('');

  function handleGenerateButton() {
    let generateToken = generatePass()
    setPass(generateToken)
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass)
  }

  return (
    <>      
      <BatTextInput pass={pass}/> 
      {/* Button 01 */}
      <Pressable
       onPress={handleGenerateButton}
       style={styles.button}
       >
        <Text style={styles.text}>GENERATE</Text>
       </Pressable>

      {/* Button 02 */}
       <Pressable
       onPress={handleCopyButton} 
       style={styles.button}
       >
        <Text style={styles.text}>✨ COPY</Text>
       </Pressable>
    </>
  );
}