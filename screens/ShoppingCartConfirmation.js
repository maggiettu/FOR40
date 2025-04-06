import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ShoppingCartConfirmation() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require("../assets/icon.png")} style={styles.logo} />
      </View>

      {/* Main Content */}
      <View style={styles.main}>
        <Text style={styles.title}>You have successfully matched!</Text>
        <Image source={require("../assets/unicorn.png")} style={styles.image} />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MatchScreen")}>
          <Text style={styles.buttonText}>See Your Matches</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate("ChooseItemsScreen")}>
          <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("DropDown")}>
          <Text style={styles.navIcon}>🛒</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("MatchScreen")}>
          <Text style={styles.navIcon}>💬</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf1df", 
  },
  header: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40, 
  },
  logo: {
    width: 120,
    height: 60,
    marginBottom: 30,
  },
  main: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    marginBottom: 20,
    textAlign: "center",
    color: "#ff5a5f",
    textShadowColor: "#f8e0e0",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: "contain",
    marginBottom: 30,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
  button: {
    width: "75%",
    backgroundColor: "#ff5a5f", // Vibrant button color
    paddingVertical: 16,
    borderRadius: 30, // Rounded button corners
    alignItems: "center",
    marginTop: 20,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#ffe5e5",
    borderTopWidth: 1,
    borderTopColor: "#ffcccc",
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderRadius: 15, // Smooth bottom corners
  },
  navIcon: {
    fontSize: 30,
    color: "#ff5a5f",
    marginBottom: 10,
  },
});
