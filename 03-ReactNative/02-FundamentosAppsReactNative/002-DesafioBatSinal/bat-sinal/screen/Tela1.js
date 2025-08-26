import React, { useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";

export default function Tela1({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(1)).current; // começa visível

  const handlePress = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate("Tela2");
    });
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require(".././assets/logo.png")}
        style={[styles.logo, { opacity: fadeAnim }]}
        resizeMode="contain"
      />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Ativar Bat Sinal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  logo: { width: 200, height: 200, marginBottom: 30 },
  button: { backgroundColor: "#000", padding: 15, borderRadius: 10 },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});