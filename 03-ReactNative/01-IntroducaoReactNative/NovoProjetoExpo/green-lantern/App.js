import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'red' }}>Hello Word!</Text>
      <Text>Hello Word!</Text>
      <Text style={{ 
        color: 'white', 
        ackgroundColor: 'black',
        fontSize: 30, 
        }}
        >Iniciado meu BootCamp Dio de React Native!</Text>
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
