import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'red' }}>Hello Word!</Text>
      <Text style={styles2.titleStyle}>Hello Word!</Text>
      <Text style={{ 
        color: 'white', 
        backgroundColor: 'black',
        fontSize: 30, 
        }}
        >Iniciado meu BootCamp Dio de React Native!</Text>
    </View>
  );
}

const styles2 = StyleSheet.create({
  titleStyle:{
    fontSize: 15,
    color: '#f1f1f1',
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
