import React from 'react';
import { View, Button, Pressable, Text } from 'react-native';
import { BatTextInput } from '../BatTextInput/BatTextInput'; 
import { useState } from 'react';

import { styles } from './BatButtonStyles';

export function BatButton() {
  const [pass, setPass] = useState('');

  function handleGenerateButton() {
    setPass('Olá')
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
       onPress={() => {console.log("Fui pressionado")}} 
       style={styles.button}
       >
        <Text style={styles.text}>✨ COPY</Text>
       </Pressable>
    </>
  );
}