// App.js
// Arquivo principal do app - define a navegação entre as telas

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importando as telas
import MainScreen from "./src/screens/MainScreen";
import SkillScreen from "./src/screens/SkillScreen";

// Criando a pilha de navegação
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        {/* Tela Principal */}
        <Stack.Screen name="Main" component={MainScreen} options={{ title: "Meu Portfólio" }} />
        
        {/* Tela de Habilidades */}
        <Stack.Screen name="Skills" component={SkillScreen} options={{ title: "Minhas Habilidades" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}