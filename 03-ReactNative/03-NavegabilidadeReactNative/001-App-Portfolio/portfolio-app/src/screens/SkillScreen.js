// Tela de Habilidades - exibe suas skills com estrelas

import React from "react";
import { View, Text, Button, Image, StyleSheet, Alert } from "react-native";
import SkillItem from "../components/SkillItem";

export default function SkillScreen() {
  return (
    <View style={styles.container}>
      {/* Foto de perfil */}
      <Image source={require("../assets/profile.jpg")} style={styles.image} />

      {/* Título */}
      <Text style={styles.title}>Minhas Habilidades</Text>

      {/* Lista de habilidades */}
      <SkillItem skill="CSS" stars={4} />
      <SkillItem skill="HTML" stars={5} />
      <SkillItem skill="React" stars={3} />

      {/* Botão de contato */}
      <View style={{ marginTop: 30 }}>
        <Button title="Fala comigo" onPress={() => Alert.alert("Entre em contato!", "Envie um email para seuemail@email.com")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  image: { width: 120, height: 120, borderRadius: 60, marginBottom: 15 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
});