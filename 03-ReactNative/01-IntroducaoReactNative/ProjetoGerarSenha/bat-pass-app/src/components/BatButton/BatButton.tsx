import React from 'react';
import { View, Button, Pressable, Text } from 'react-native';

import { styles } from './BatButtonStyles';

export function BatButton() {
  return (
    <View>      
      {/* Button 01 */}
      <Pressable
       onPress={() => {console.log("Fui pressionado")}}
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
    </View>
  );
}