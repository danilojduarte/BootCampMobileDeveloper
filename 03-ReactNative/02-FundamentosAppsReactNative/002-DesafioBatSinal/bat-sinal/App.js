import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import Form from "./components/Form";

export default function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <View style={styles.container}>
      {!showForm ? (
        <>
          <Image
            source={require("./assets/logo.png")} // Coloque seu logo
            style={styles.logo}
          />
          <TouchableOpacity style={styles.button} onPress={() => setShowForm(true)}>
            <Text style={styles.buttonText}>Activate Bat Signal</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Form />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#333",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
