import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function WaitingForMatchesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Waiting for your matches...</Text>
      <Image source={require("../assets/icon.png")} style={styles.logo} />
      <Text style={styles.message}>We'll let you know when a match has been made!</Text>
      {/* <View style={styles.navBar}>
        <TouchableOpacity>
          <Image source={require("../assets/home.png")} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/cart.png")} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/chat.png")} style={styles.navIcon} />
        </TouchableOpacity>
      </View> */}
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf1df",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    position: "absolute",
    bottom: 20,
  },
  navIcon: {
    width: 30,
    height: 30,
  },
});