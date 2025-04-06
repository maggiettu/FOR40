import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Here you would normally authenticate the user
    navigation.navigate("ChooseItemsScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/icon.png")} style={styles.logo} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Don't have an account yet?</Text>
      <TouchableOpacity style={styles.signUpContainer} onPress={handleLogin}>
        <Text style={styles.signUp}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf1df", // Light yellow,
    justifyContent: "center",
    alignItems: "center", // Centering the content
    paddingHorizontal: 20,
  },
  logo: {
    width: 400, // Set width and height for consistency
    height: 200,
    resizeMode: "contain", // Ensure it keeps its aspect ratio
  },
  input: {
    width: "80%", // Adjust to fill more space
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    width: "80%", // Keep button width consistent with input
    backgroundColor: "#ff5a5f",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    textAlign: "center",
    fontSize: 15,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  signUpContainer: {
    marginTop: 10, // Space between "Don't have an account?" and "Sign up"
    marginBottom: 24, // Adjust bottom margin for proper spacing
  },
  signUp: {
    textAlign: "center",
    fontSize: 15,
    textDecorationLine: "underline",
    marginBottom: 24,
  },
});
