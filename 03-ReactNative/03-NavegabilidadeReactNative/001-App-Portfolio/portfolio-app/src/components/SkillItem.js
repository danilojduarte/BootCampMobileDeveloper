// Componente que exibe uma habilidade com estrelas

import React from "react";
import { View, Text } from "react-native";

export default function SkillItem({ skill, stars }) {
  // Criando array de estrelas
  const starsArray = Array(stars).fill("⭐");
  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
      <Text style={{ fontSize: 18, marginRight: 10 }}>{skill}:</Text>
      <Text style={{ fontSize: 18 }}>{starsArray.join(" ")}</Text>
    </View>
  );
}