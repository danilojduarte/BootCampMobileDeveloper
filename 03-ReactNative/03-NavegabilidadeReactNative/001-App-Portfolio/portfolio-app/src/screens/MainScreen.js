// Tela Principal - exibe sua foto, nome e botões de contato

import React from "react";
import { View, Text, Button, Image, StyleSheet, Linking } from "react-native";

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Foto de perfil */}
      <Image source={require("../assets/profile.jpg")} style={styles.image} />

      {/* Nome */}
      <Text style={styles.name}>Seu Nome Aqui</Text>

      {/* Botões de contato */}
      <Button title="LINKEDIN" onPress={() => Linking.openURL("https://www.linkedin.com/in/seuPerfil")} />
      <Button title="GITHUB" onPress={() => Linking.openURL("https://github.com/seuPerfil")} />
      <Button title="E-MAIL" onPress={() => Linking.openURL("mailto:seuemail@email.com")} />

      {/* Botão para ir para a tela de habilidades */}
      <View style={{ marginTop: 20 }}>
        <Button title="Ver Habilidades" onPress={() => navigation.navigate("Skills")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  image: { width: 120, height: 120, borderRadius: 60, marginBottom: 15 },
  name: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
});