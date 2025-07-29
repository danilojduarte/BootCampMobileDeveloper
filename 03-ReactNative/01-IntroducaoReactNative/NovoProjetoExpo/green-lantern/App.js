import { StyleSheet, Text, View, Image } from 'react-native';
import symbolOn from './assets/pictures/symbol-on.png';
import symbolOff from './assets/pictures/symbol-off.png';


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={symbolOn}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
